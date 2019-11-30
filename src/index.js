import Button from './components/button'
import Icon from './components/icon'

const components = {
  VisBtn: Button,
  BtnGroup: Button.Group,
  VisIcon: Icon
}

const install = function (Vue) {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
