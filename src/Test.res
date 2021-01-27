module type Template = {
  type props
  let component: React.component<props>
}

module Template = (
  T: {
    type props
    let component: React.component<props>
  },
) => {
  type props = T.props
  let component: React.component<props> = T.component
}

let template = (type props, component: React.component<props>) => {
  let boxedComponent: module(Template with type props = props) = module(
    Template({
      type props = props
      let component = component
    })
  )

  boxedComponent
}

module CompA = {
  @react.component
  let make = (~className, ~styles, ~children) => {
    <div className style={styles}> {children} </div>
  }
}

let compA = template(CompA.make)
