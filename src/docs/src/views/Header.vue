<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Bulma Addons
          </h1>
          <h2 class="subtitle is-4">
            Addons for
            <a
              href="http://bulma.io"
              target="_blank">Bulma CSS Framework</a>
          </h2>
          <br>
          <p>
            <a
              class="button is-white is-highlighted"
              href="https://github.com/mubaidr/bulma-addons"
              title="Github Repository"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-star"
                  aria-hidden="true" />
              </span>
              <span>Star on Github</span>
            </a>
            <a
              class="button is-light"
              href="https://raw.githubusercontent.com/mubaidr/bulma-addons/master/css/bulma.min.css"
              title="Download Latest Minified Build"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-download"
                  aria-hidden="true" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>

    <div
      :class="{'is-active': isNavigationBarOpen}"
      class="navigation-view is-static">
      <a
        :class="{'is-active': isNavigationBarOpen}"
        class="navbar-burger"
        role="button"
        aria-expanded="false"
        aria-label="menu"
        @click="isNavigationBarOpen = !isNavigationBarOpen">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
      <aside class="menu">
        <p class="menu-label">
          Menu
        </p>
        <ul class="menu-list">
          <li>
            <router-link
              title="Getting Started"
              to="/"
              exact-active-class="is-active">
              <span class="icon">
                <i class="fas fa-home" />
              </span>
              <span>Getting Started</span>
            </router-link>
          </li>
          <li>
            <router-link
              title="Addons"
              to="/addons"
              active-class="is-active">
              <span class="icon">
                <i class="fas fa-object-group" />
              </span>
              <span>Addons</span>
            </router-link>
          </li>
        </ul>
        <p class="menu-label">
          Source
        </p>
        <ul class="menu-list">
          <li>
            <a
              href="https://github.com/mubaidr/bulma-addons"
              title="Github Repository"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-star"
                  aria-hidden="true" />
              </span>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://raw.githubusercontent.com/mubaidr/bulma-addons/master/css/bulma.min.css"
              title="Download"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-download"
                  aria-hidden="true" />
              </span>
              <span>Download</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },
}
</script>

<style>
</style>
