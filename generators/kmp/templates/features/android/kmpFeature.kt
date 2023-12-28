package br.com.stone.ton.kmp.plugins

import br.com.stone.ton.StoneCo
import co.stone.banking.<%= lowerCaseFeatureName %>.common.<%= featurePluginName %>
import co.stone.multiplatform.core.featurePlugin.MultiplatformFeature

internal fun install<%= featureName %>() {
    MultiplatformFeature.install(
        <%= featurePluginName %>()
    )
}