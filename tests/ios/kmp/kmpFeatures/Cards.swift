//

import KotlinShared
import FeatureCards

class CardsKmpFeature {

  func get() -> KotlinCoordinator? {
    guard let featurePlugin: CardsPlugin = MultiplatformFeature.plugin(Cards.self) else { return nil }
    let coordinator = featurePlugin.platform.entrypoint(KotlinUnit.shared)
    return coordinator
  }

  func install() {
     MultiplatformFeature.shared.install(
      CardsPlugin()
     )
   }
}
