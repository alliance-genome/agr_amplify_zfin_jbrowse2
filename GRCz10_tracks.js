export default [
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_gene",
      "name": "ZFIN Gene",
      "assemblyNames": [
         "GRCz10"
      ],
      "formatDetails": {
         "feature": "jexl:{id:null,curie:null,ZFIN:'<a href=\"http://zfin.org/'+feature.id+' \">'+feature.name+'</a>'}"
      },
      "category": [
         "ZFIN tracks"
      ],
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN_Gene/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zfin_gene-1687907419159-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#088080",
               "displayMode": "reducedRepresentation"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zfin_gene-1687907419159-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_transcript",
      "name": "Transcript",
      "assemblyNames": [
         "GRCz10"
      ],
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN_Gene/{refseq}/trackData.jsonz"
         }
      },
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.id+' \">'+feature.name+'</a>'}"
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_transcript-1687907635485-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#6792ED"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_transcript-1687907635485-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_genes_with_phenotype",
      "name": "ZFIN Genes with Phenotype",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.gene_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN_Genes_with_Phenotype/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zfin_genes_with_phenotype-1687908071014-LinearBasicDisplay"
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zfin_genes_with_phenotype-1687908071014-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_genes_with_antibody_data",
      "name": "ZFIN Genes with Antibody Data",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.gene_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN_Genes_with_Antibody_Data/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zfin_genes_with_antibody_data-1687908124039-LinearBasicDisplay"
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zfin_genes_with_antibody_data-1687908124039-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_genes_with_expression",
      "name": "ZFIN Genes with Expression",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.gene_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN_Genes_with_Expression/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zfin_genes_with_expression-1687908166699-LinearBasicDisplay"
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zfin_genes_with_expression-1687908166699-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_complete_assembly_clones",
      "name": "Complete Assembly Clones",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.zdb_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/Complete_Assembly_Clones/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_complete_assembly_clones-1687908227633-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "white",
               "outline": "#8CADF1"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_complete_assembly_clones-1687908227633-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_knockdown_reagent",
      "name": "Knockdown Reagent",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.zdb_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/Knockdown_Reagent/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_knockdown_reagent-1687908500113-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#3DB471"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_knockdown_reagent-1687908500113-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_assembly",
      "name": "Assembly",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.zdb_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/Assembly/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_assembly-1687908614561-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#6792ED"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_assembly-1687908614561-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_zebrafish_mutation_project",
      "name": "Zebrafish Mutation Project",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.zdb_id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/Zebrafish_Mutation_Project/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zebrafish_mutation_project-1687908719190-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#800080"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zebrafish_mutation_project-1687908719190-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_transgenic_insertion",
      "name": "Transgenic Insertion",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/Transgenic_Insertion/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_transgenic_insertion-1687908986143-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "#7135B3"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_transgenic_insertion-1687908986143-LinearArcDisplay"
         }
      ]
   },
   {
      "type": "FeatureTrack",
      "trackId": "GRCz10_zfin_mutants",
      "name": "ZFIN Mutants",
      "assemblyNames": [
         "GRCz10"
      ],
      "category": [
         "ZFIN tracks"
      ],
      "formatDetails": {
         "feature": "jexl:{ ZFIN: '<a href=\"http://zfin.org/'+feature.id+' \">'+feature.name+'</a>'}"
      },
      "adapter": {
         "type": "NCListAdapter",
         "rootUrlTemplate": {
            "locationType": "UriLocation",
            "uri": "https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/zfin/GRCz10/tracks/ZFIN Mutants/{refseq}/trackData.jsonz"
         }
      },
      "displays": [
         {
            "type": "LinearBasicDisplay",
            "displayId": "GRCz10_zfin_mutants-LinearBasicDisplay",
            "renderer": {
               "type": "SvgFeatureRenderer",
               "color1": "goldenrod"
            }
         },
         {
            "type": "LinearArcDisplay",
            "displayId": "GRCz10_zfin_mutants-LinearArcDisplay"
         }
      ]
   }
];