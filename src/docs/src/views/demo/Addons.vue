<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> Addons
      </h1>

      <hr>
      <h2 class="subtitle is-4">Navigation View</h2>
      <p>The navigation view control provides a collapsible navigation menu for top-level navigation in your app.</p>
      <div class="block">
        <div class="has-centered-text">
          <button
            class="button is-primary"
            @click="isNavigationBarOpen = !isNavigationBarOpen">
            Toggle Navigation view
          </button>
        </div>
        <div
          :class="{'is-active': isNavigationBarOpen}"
          class="navigation-view">
          <a
            class="navbar-burger is-active"
            role="button"
            aria-expanded="false"
            aria-label="menu"
            @click="isNavigationBarOpen = !isNavigationBarOpen">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-box"
                      aria-hidden="true"/>
                  </span> Dashboard
                </a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-address-card"
                      aria-hidden="true"/>
                </span> Customers</a>
              </li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-cog"
                      aria-hidden="true"/>
                </span> Team Settings</a>
              </li>
              <li>
                <a class="is-active">
                  <span class="icon">
                    <i
                      class="fas fa-child"
                      aria-hidden="true"/>
                </span> Manage Your Team</a>
              </li>
              <li class="is-disabled">
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-at"
                      aria-hidden="true"/>
                </span> Invitations</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-cloudversify"
                      aria-hidden="true"/>
                </span> Cloud Storage Settings</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-user"
                      aria-hidden="true"/>
                </span> Authentication</a>
              </li>
            </ul>
            <p class="menu-label">
              Transactions
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-amazon-pay"
                      aria-hidden="true"/>
                </span> Payments</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-align-center"
                      aria-hidden="true"/>
                </span> Transfers</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i
                      class="fas fa-briefcase"
                      aria-hidden="true"/>
                </span> Balance</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      <hr>
      <h2 class="subtitle is-4">Custom Loader/Spinner</h2>
      <p>A simple loader to display indeterminate loading status.</p>
      <div class="block loader-container">
        <div class="custom-loader is-small is-info">
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
        </div>
        <div class="custom-loader is-info">
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
        </div>
        <div class="custom-loader is-medium is-info">
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
        </div>
        <div class="custom-loader is-large is-info">
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
          <div class="dot">
            <div class="inner-dot"/>
          </div>
        </div>
      </div>

      <hr>
      <h2 class="subtitle is-4">Checkbox</h2>
      <p>Styled checkbox controls to match your application theme.</p>
      <div class="block">
        <div class="field">
          <div class="control">
            <label class="checkbox is-primary">
              <input
                type="checkbox"
                checked> I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
      </div>

      <hr>
      <h2 class="subtitle is-4">Toggle</h2>
      <p>A custom toggle control to match your application theme.</p>
      <div class="block">
        <div class="field">
          <div class="control">
            <label class="toggle is-primary">
              <input
                type="checkbox"
                checked> Subscribe to news-letter
            </label>
          </div>
        </div>
      </div>

      <hr>
      <h2 class="subtitle is-4">Radio</h2>
      <p>Styled radio controls to match your application theme.</p>
      <div class="block">
        <div class="field">
          <div class="control">
            <label class="radio">
              <input
                name="question"
                type="radio"> Yes
            </label>
            <label class="radio">
              <input
                name="question"
                type="radio"
                checked> No
            </label>
          </div>
        </div>
      </div>

      <hr>
      <h2 class="subtitle is-4">Highlighted Buttons</h2>
      <p>Highlighted buttons to gain user focus.</p>
      <div class="block buttons-container">
        <a class="button is-dark is-highlighted"> Default
        </a>
        <a class="button is-primary is-highlighted"> Primary
        </a>
        <a class="button is-info is-highlighted"> Info
        </a>
        <a class="button is-success is-highlighted"> Success
        </a>
        <a class="button is-warning is-highlighted"> Warning
        </a>
        <a class="button is-danger is-highlighted"> Danger
        </a>

      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },
}
</script>

<style>
.block:not(:first-child) {
  margin-top: 1em;
}

.loader-container .custom-loader {
  margin: 3em;
}

.buttons-container .button:not(:first-child) {
  margin-left: 2em;
}
</style>
