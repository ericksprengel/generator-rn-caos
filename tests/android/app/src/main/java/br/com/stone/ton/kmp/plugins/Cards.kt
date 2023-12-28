package br.com.stone.ton.kmp.plugins

import br.com.stone.ton.StoneCo
import co.stone.banking.cards.common.CardsPlugin
import co.stone.multiplatform.core.featurePlugin.MultiplatformFeature

internal fun installCards() {
    MultiplatformFeature.install(
        CardsPlugin()
    )
}