class ParticipatingEmployers extends HTMLElement {
  connectedCallback() {
    // prettier-ignore
    const employers = [
      // [ Name, Basic Life, Medical Plan Choices, Dental, Vision, Disability Plan, Add. Life ]
      ["Academy for Technology and the Classics",                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Ace Leadership High School",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Aces Technical Charter School",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["AFT New Mexico",                                                 "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "N/A"],
      ["Alamogordo Public Schools",                                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Albuquerque Aviation Academy",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Albuquerque Bilingual Academy",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Albuquerque Charter Academy",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Albuquerque Collegiate Charter School",                          "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Albuquerque Institute for Math & Science",                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Albuquerque School of Excellence",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Albuquerque Sign Language Academy",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Aldo Leopold Charter School",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Alice King Community School",                                    "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Alma d'Arte Charter High School",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Altura Preparatory School",                                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Amy Biehl Charter High School",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Anansi Charter School",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Animas Public Schools",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Archer Academy of Accelerated Learning",                         "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Artesia Public Schools",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "N/A", "N/A",     "YES"],
      ["Aztec Municipal Schools",                                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Belen Consolidated Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Bernalillo Public Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Bloomfield Municipal Schools",                                   "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Capitan Municipal Schools",                                      "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Carlsbad Municipal Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Carrizozo Municipal Schools",                                    "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Central Consolidated School District",                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cesar Chavez Community School",                                  "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Chama Valley Independent Schools",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Christine Duncan's Heritage Academy",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cien Aguas International School",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cimarron Municipal Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Clayton Municipal Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cloudcroft Municipal Schools",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Clovis Municipal Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cobre Consolidated Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Collins Lake Outdoor School",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cooperative Educational Services",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Coral Community Charter School",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Corona Public Schools",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "N/A"],
      ["Corrales International School",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Cottonwood Classical Preparatory School",                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cottonwood Valley Charter School",                               "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Cuba Independent Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Deming Cesar Chavez Charter High School",                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Deming Public Schools",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "N/A", "60 days", "YES"],
      ["Deming School Employees Credit Union",                           "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Des Moines Municipal Schools",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Dexter Consolidated Schools",                                    "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Digital Arts and Technology Academy",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Dora Consolidated Schools",                                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Dream Diné Charter School",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Dulce Independent Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Dzil Ditl'ooí School of Empowerment, Action & Perseverance",     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["East Mountain High School",                                      "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["El Camino Real Academy",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Elida Municipal Schools",                                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["ENMU - Portales",                                                "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["ENMU - Roswell",                                                 "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Equip Academy of New Mexico",                                    "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "N/A"],
      ["Espanola Public Schools",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Estancia Municipal Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Estancia Valley Classical Academy",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Eunice Municipal Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Explore Academy",                                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Explore Academy - Las Cruces",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Explore Academy Rio Rancho",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Farmington Municipal Schools",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "N/A"],
      ["Floyd Municipal Schools",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Fort Sumner Municipal Schools",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Gadsden Independent Schools",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Gallup-McKinley County Schools",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Gilbert L. Sena Charter High School",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Gordon Bernell Charter School",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Grady Municipal Schools",                                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Grants/Cibola County Schools",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Hagerman Municipal Schools",                                     "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Hatch Valley Public Schools",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Health Leadership High School",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Hobbs Municipal Schools",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Hondo Valley Public Schools",                                    "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Horizon Academy West",                                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["House Municipal Schools",                                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Hózhó Academy",                                                  "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Inspira Steam Academy",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["J. Paul Taylor Academy",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Jal Public Schools",                                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Jefferson Montessori Academy",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Jemez Mountain Public Schools",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Jemez Valley Public Schools",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["La Academia de Esperanza",                                       "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["La Academia Dolores Huerta",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Lake Arthur Municipal Schools",                                  "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Las Cruces Public Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Las Vegas City Schools",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["LEA Regional Educational #7",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Logan Municipal Schools",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Lordsburg Municipal Schools",                                    "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Los Alamos Public Schools",                                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Los Alamos Schools Credit Union",                                "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Los Lunas Schools",                                              "$25,000", "BCBSNM and Presbyterian", "YES", "N/A", "30 days", "YES"],
      ["Loving Municipal Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Lovington Municipal School District",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Luna Community College",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Magdalena Municipal Schools",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Mark Armijo Academy",                                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Maxwell Municipal Schools",                                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["McCurdy Charter School",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Melrose Municipal Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Mesa Vista Consolidated Schools",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Mesalands Community College",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Middle College High School",                                     "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Mission Achievement and Success Charter School",                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Monte Del Sol Charter School",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Montessori of the Rio Grande Charter School",                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Mora Independent School District",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Moreno Valley High School",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Moriarty-Edgewood School District",                              "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Mosaic Academy",                                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Mosquero Municipal Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Mountain Mahogany Community School",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Mountainair Public Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Native American Community Academy",                              "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["NEA",                                                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["New Mexico Academy for the Media Arts",                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Activities Association",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Association of School Business Officials",            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Coalition of Educational Leaders",                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Connections Academy",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico International School",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Junior College",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["New Mexico School Board Association",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico School for the Arts",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico School for the Deaf",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["New Mexico Tech",                                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["New Mexico Tech Retirees",                                       "$0",      "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["NMPSIA",                                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["North Valley Academy",                                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Northern New Mexico College",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Northpoint Charter School",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Pecos Cyber Academy",                                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Pecos Independent School District",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Pecos Valley REC #8",                                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Penasco Independent School District",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Pojoaque Valley School District",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Portales Municipal Schools",                                     "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Public Academy for Performing Arts",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Public Charter Schools of New Mexico",                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Quay Schools Federal Credit Union",                              "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Quemado Independent Schools",                                    "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Questa Independent School District",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Raices del Saber Xinachtli Community School",                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Raton Public Schools",                                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["REC #2",                                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Red River Valley Charter School",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "N/A"],
      ["Region IX Education Cooperative",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Regional Educational Center #6",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Renaissance Academy Charter School",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Reserve Independent Schools",                                    "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Rio Gallinas School for Ecology and the Arts",                   "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Rio Grande Academy of Fine Arts",                                "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Rio Rancho Public Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Robert F. Kennedy Charter School",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Roots and Wings Community School",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Roswell Independent School District",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Roy Municipal Schools",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Ruidoso Municipal Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Sacramento School of Engineering and Science",                   "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["San Diego Riverside Charter School",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["San Jon Municipal Schools",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Sandoval Academy of Bilingual Education",                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Santa Fe Community College",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Santa Fe Public Schools",                                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Santa Rosa Consolidated Schools",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["School of Dreams Academy",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Sendero School of Academics and Career Preparation",             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Sidney Gutierrez Middle School",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Siembra Leadership High School",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Silver Consolidated Schools",                                    "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Six Directions Indigenous School",                               "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Socorro Consolidated Schools",                                   "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Solare Collegiate Charter School",                               "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "N/A"],
      ["South Valley Academy",                                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "N/A"],
      ["South Valley Preparatory School",                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Springer Municipal Schools",                                     "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Sun Mountain Community School",                                  "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Taos Academy",                                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Taos Charter School",                                            "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "N/A"],
      ["Taos Integrated School of the Arts",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Taos International School",                                      "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Taos Municipal Schools",                                         "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Tatum Municipal Schools",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Technology Leadership High School",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Texico Municipal Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["The Albuquerque Talent Development",                             "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The Ask Academy",                                                "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The Great Academy",                                              "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The International School",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The Masters Program",                                            "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The Montessori Elementary & Middle School",                      "$10,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["The New America School - Las Cruces",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["The New America School New Mexico",                              "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Thrive Community School",                                        "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Tierra Adentro of New Mexico",                                   "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Tierra Encantada Charter High School",                           "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["Truth or Consequences Municipal Schools",                        "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Tucumcari Public Schools",                                       "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Tularosa Municipal School District",                             "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Turquoise Trail Charter Schools",                                "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Twenty First Century Public Academy",                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Vaughn Municipal Schools",                                       "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Vista Grande Charter High School",                               "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Voz Collegiate Preparatory Charter School",                      "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "60 days", "YES"],
      ["Wagon Mound Public Schools",                                     "$25,000", "BCBSNM and Presbyterian", "YES", "YES", "N/A",     "YES"],
      ["Walatowa High Charter School",                                   "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
      ["West Las Vegas School District",                                 "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Western NM University",                                          "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "30 days", "YES"],
      ["Zuni Public Schools",                                            "$50,000", "BCBSNM and Presbyterian", "YES", "YES", "90 days", "YES"],
    ];

    const uid      = "pe-" + Math.random().toString(36).slice(2, 7);
    const modalId  = uid + "-modal";
    const searchId = uid + "-search";
    const tableId  = uid + "-table";
    const countId  = uid + "-count";
    const total    = employers.length;

    const rows = employers
      .map(
        ([name, life, medical, dental, vision, disability, addLife]) => /*html*/ `
        <tr>
          <td>${name}</td>
          <td>${life}</td>
          <td>${medical}</td>
          <td>${dental}</td>
          <td>${vision}</td>
          <td>${disability}</td>
          <td>${addLife}</td>
        </tr>`
      )
      .join("");

    this.innerHTML = /*html*/ `
      <!-- Page-level CTA -->
      <section aria-labelledby="${uid}-heading" class="pg-employers">
        <h2 id="${uid}-heading">Participating Employers</h2>
        <p>
          NMPSIA serves ${total} member employers across New Mexico.
          View the full list below to see available plan options by employer.
        </p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#${modalId}"
        >
          <i class="bx bx-table me-1"></i>
          View All ${total} Participating Employers
        </button>
      </section>

      <!-- Modal -->
      <div
        class="modal fade"
        id="${modalId}"
        tabindex="-1"
        aria-labelledby="${uid}-modal-title"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-lg-down">
          <div class="modal-content">

            <div class="modal-header document-modal">
              <h2 class="modal-title fs-5" id="${uid}-modal-title">
                Participating Employers
              </h2>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body p-0">
              <!-- Sticky search bar -->
              <div class="pg-employers__search-wrap">
                <label for="${searchId}" class="visually-hidden">Filter employers by name</label>
                <input
                  id="${searchId}"
                  type="search"
                  class="form-control pg-employers__search"
                  placeholder="Filter by employer name&hellip;"
                  aria-controls="${tableId}"
                  autocomplete="off"
                />
                <p class="pg-employers__count" id="${countId}" aria-live="polite" aria-atomic="true">
                  Showing ${total} employers
                </p>
              </div>

              <!-- Scrollable table -->
              <div class="table-responsive px-3 pb-3">
                <table
                  id="${tableId}"
                  class="table table-bordered table-striped table-sm pg-employers__table mb-0"
                >
                  <caption class="visually-hidden">
                    NMPSIA participating employers and their available benefit plan options
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">NMPSIA Participating Employers</th>
                      <th scope="col">Basic Life</th>
                      <th scope="col">Medical Plan Choices</th>
                      <th scope="col">Dental</th>
                      <th scope="col">Vision</th>
                      <th scope="col">Disability Plan</th>
                      <th scope="col">Add. Life</th>
                    </tr>
                  </thead>
                  <tbody id="${tableId}-body">
                    ${rows}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    `;

    this._setupFilter(searchId, tableId, countId, total);

    // Clear the search input whenever the modal is closed so it resets for next open
    const modal = this.querySelector("#" + modalId);
    modal.addEventListener("hidden.bs.modal", () => {
      const input = this.querySelector("#" + searchId);
      input.value = "";
      input.dispatchEvent(new Event("input"));
    });
  }

  _setupFilter(searchId, tableId, countId, total) {
    const input   = this.querySelector("#" + searchId);
    const tbody   = this.querySelector("#" + tableId + "-body");
    const counter = this.querySelector("#" + countId);

    input.addEventListener("input", () => {
      const term = input.value.trim().toLowerCase();
      let visible = 0;

      tbody.querySelectorAll("tr").forEach((row) => {
        const name = row.cells[0].textContent.toLowerCase();
        const show = !term || name.includes(term);
        row.hidden = !show;
        if (show) visible++;
      });

      counter.textContent = term
        ? `Showing ${visible} of ${total} employers`
        : `Showing ${total} employers`;
    });
  }
}
customElements.define("participating-employers", ParticipatingEmployers);
