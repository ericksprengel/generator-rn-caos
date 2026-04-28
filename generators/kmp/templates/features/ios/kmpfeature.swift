//

import KotlinShared
import Feature<%= featureName %>

class <%= featureName %>KmpFeature {

  func get() -> KotlinCoordinator? {
    guard let featurePlugin: <%= featurePluginName %> = MultiplatformFeature.plugin(<%= featureName %>.self) else { return nil }
    let coordinator = featurePlugin.platform.entrypoint(KotlinUnit.shared)
    return coordinator
  }

  func install() {
     MultiplatformFeature.shared.install(
      <%= featurePluginName %>()
     )
   }
}
