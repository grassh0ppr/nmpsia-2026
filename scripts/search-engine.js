/**
 * Custom Search Engine for NMPSIA Website
 * A lightweight, client-side search solution that doesn't require Google or external APIs
 */

class SearchEngine {
  constructor() {
    this.index = [];
    this.searchResults = [];
  }

  /**
   * Load the search index from JSON file
   */
  async loadIndex() {
    try {
      const response = await fetch('./scripts/data/search-index.json');
      if (!response.ok) {
        throw new Error('Failed to load search index');
      }
      this.index = await response.json();
      return true;
    } catch (error) {
      console.error('Error loading search index:', error);
      return false;
    }
  }

  /**
   * Normalize text for searching (lowercase, remove special chars)
   */
  normalizeText(text) {
    return text.toLowerCase().trim();
  }

  /**
   * Calculate relevance score for a search result
   */
  calculateScore(page, query, queryTerms) {
    let score = 0;
    const normalizedTitle = this.normalizeText(page.title);
    const normalizedDescription = this.normalizeText(page.description);
    const normalizedKeywords = page.keywords.map(k => this.normalizeText(k));
    const normalizedQuery = this.normalizeText(query);
    const normalizedUrl = this.normalizeText(page.url);

    // Check if this is a document/section entry (has # in URL or specific keywords)
    const isDocument = normalizedUrl.includes('#') || 
                       normalizedKeywords.some(kw => ['pdf', 'document', 'form', 'chart', 'guide'].includes(kw));

    // Exact title match gets highest score
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 100;
    }

    // Exact phrase match in title (boost for documents)
    if (normalizedTitle.includes(normalizedQuery)) {
      score += isDocument ? 80 : 50;
    }

    // Multi-word phrase matching in title (e.g., "program guide", "comparison chart")
    if (queryTerms.length > 1) {
      const phrase = queryTerms.join(' ');
      if (normalizedTitle.includes(phrase)) {
        score += isDocument ? 120 : 60;
      }
    }

    // Title word matches
    queryTerms.forEach(term => {
      if (normalizedTitle.includes(term)) {
        score += isDocument ? 60 : 50;
      }
    });

    // Keyword exact matches (very important for documents)
    queryTerms.forEach(term => {
      normalizedKeywords.forEach(kw => {
        if (kw === term) {
          score += isDocument ? 50 : 30; // Exact keyword match
        } else if (kw.includes(term)) {
          score += isDocument ? 35 : 25; // Partial keyword match
        }
      });
    });

    // Description matches
    queryTerms.forEach(term => {
      if (normalizedDescription.includes(term)) {
        score += 20;
      }
    });

    // URL matches (for specific page searches)
    queryTerms.forEach(term => {
      if (normalizedUrl.includes(term)) {
        score += 10;
      }
    });

    // Boost score for document entries when query matches document-specific terms
    if (isDocument) {
      const documentTerms = ['guide', 'chart', 'comparison', 'form', 'pdf', 'document', 'program'];
      const hasDocumentTerm = queryTerms.some(term => 
        documentTerms.some(docTerm => term.includes(docTerm) || docTerm.includes(term))
      );
      if (hasDocumentTerm) {
        score += 40;
      }
    }

    return score;
  }

  /**
   * Search through the index
   */
  search(query) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const queryTerms = query
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(term => term.length > 0);

    if (queryTerms.length === 0) {
      return [];
    }

    // Calculate scores for all pages
    const results = this.index
      .map(page => ({
        ...page,
        score: this.calculateScore(page, query, queryTerms)
      }))
      .filter(result => result.score > 0) // Only include pages with matches
      .sort((a, b) => b.score - a.score); // Sort by relevance (highest first)

    this.searchResults = results;
    return results;
  }

  /**
   * Highlight search terms in text
   */
  highlightTerms(text, query) {
    if (!query || !text) return text;
    
    const queryTerms = query
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(term => term.length > 0);

    let highlighted = text;
    queryTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });

    return highlighted;
  }

  /**
   * Format search result for display
   */
  formatResult(result, query) {
    const highlightedTitle = this.highlightTerms(result.title, query);
    const highlightedDescription = this.highlightTerms(result.description, query);
    
    // Check if this is a document/section (has anchor)
    const isDocument = result.url.includes('#');
    let displayUrl = result.url;
    let urlLabel = result.url;
    
    if (isDocument) {
      // Extract the page and section for better display
      const [page, section] = result.url.split('#');
      urlLabel = `${page} → ${section.replace(/-/g, ' ')}`;
    }
    
    return {
      title: highlightedTitle,
      description: highlightedDescription,
      url: result.url,
      displayUrl: displayUrl,
      urlLabel: urlLabel,
      isDocument: isDocument,
      score: result.score
    };
  }
}

// Initialize search engine when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  const searchEngine = new SearchEngine();
  const loaded = await searchEngine.loadIndex();

  if (!loaded) {
    console.error('Failed to load search index');
    return;
  }

  // Get search query from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q') || '';

  // Perform search if query exists
  if (query) {
    const results = searchEngine.search(query);
    displaySearchResults(results, query, searchEngine);
  } else {
    displayNoQuery();
  }
});

/**
 * Display search results on the page
 */
function displaySearchResults(results, query, searchEngine) {
  const resultsContainer = document.getElementById('searchResults');
  const queryDisplay = document.getElementById('searchQuery');
  const resultsCount = document.getElementById('resultsCount');

  if (!resultsContainer) return;

  // Display query
  if (queryDisplay) {
    queryDisplay.textContent = query;
  }

  // Display results count
  if (resultsCount) {
    const count = results.length;
    resultsCount.textContent = count === 1 
      ? `Found ${count} result` 
      : `Found ${count} results`;
  }

  // Clear previous results
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <i class="bx bx-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
        <h3>No results found</h3>
        <p>We couldn't find any pages matching "${query}".</p>
        <p>Try different keywords or check your spelling.</p>
      </div>
    `;
    return;
  }

  // Display results
  results.forEach(result => {
    const formatted = searchEngine.formatResult(result, query);
    const resultElement = document.createElement('div');
    resultElement.className = 'search-result-item';
    
    // Add document indicator class if it's a document/section
    if (formatted.isDocument) {
      resultElement.classList.add('search-result-document');
    }
    
    resultElement.innerHTML = `
      <h3 class="search-result-title">
        <a href="${formatted.url}">${formatted.title}</a>
        ${formatted.isDocument ? '<span class="document-badge"><i class="bx bx-file"></i> Document</span>' : ''}
      </h3>
      <p class="search-result-description">${formatted.description}</p>
      <a href="${formatted.url}" class="search-result-link">${formatted.urlLabel || formatted.url}</a>
    `;
    resultsContainer.appendChild(resultElement);
  });
}

/**
 * Display message when no query is provided
 */
function displayNoQuery() {
  const resultsContainer = document.getElementById('searchResults');
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div class="no-query">
        <i class="bx bx-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
        <h3>Enter a search query</h3>
        <p>Use the search bar in the navigation to search the website.</p>
      </div>
    `;
  }
}



