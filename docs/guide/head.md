# Head Management

Similar to asset injection, head management follows the same idea: we can dynamically attach data to the render `context` in a component's lifecycle, and then interpolate those data in `template`.

> In version 2.3.2+, you can directly access the SSR context in a component as `this.$ssrContext`. In older versions you'd have to manually inject the SSR context by passing it to `createApp()` and expose it on the root instance's `$options` - child components can then access it via `this.$root.$options.ssrContext`.

We can write a simple mixin to perform title management:

``` js
// title-mixin.js

function getTitle (vm) {
  // components can simply provide a `title` option
  // which can be either a string or a function
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = title
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}

// `VUE_ENV` can be injected with `webpack.DefinePlugin`
export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
```

Now, a route component can make use of this to control the document title:

``` js
// Item.vue
export default {
  mixins: [titleMixin],

  title () {
    return this.item.title
  },

  serverPrefetch () {
    return this.$store.dispatch('fetchItem', this.$route.params.id)
  },

  computed: {
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
```

And inside the template passed to bundle renderer:

``` html
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    ...
  </body>
</html>
```

**Notes:**

- Use double-mustache (HTML-escaped interpolation) to avoid XSS attacks.

- You should provide a default title when creating the `context` object in case no component has set a title during render.

---

Using the same strategy, you can easily expand this mixin into a generic head management utility.
