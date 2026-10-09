;(function () {
  class Plugin {
    name = 'VariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantColor', f => {
            // the 9.0.0 VCF wraps INFO string values in literal double quotes
            const geneImpact = f.get('INFO')?.geneImpact?.[0]?.replace(/^"|"$/g, '')
            if(geneImpact==='HIGH')     { return 'red' }
            if(geneImpact==='MODIFIER') { return 'purple' }
            if(geneImpact==='MODERATE') { return 'gold' }
            if(geneImpact==='LOW')      { return 'cyan' }
            return 'black';
      })
    }

    configure(pluginManager) {}
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginVariantColorPlugin =
    {
      default: Plugin,
    }
})()

