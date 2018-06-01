<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Getting started</h1>

        <hr>

        <div class="content">
          <p>
            You can either:
          </p>
          <ol>
            <li>
              use
              <strong>npm</strong> to install the
              <em>bulma-addons</em> package
            </li>
            <li>
              use
              <strong>CDN</strong>
            </li>
            <li>
              use the
              <strong>GitHub repository</strong> to get the latest development version
            </li>
          </ol>
          <ol class="padded-list">
            <li>
              <span class="title is-5">Use npm:
              </span>
              <p>
                <a href="https://nodei.co/npm/bulma-addons/"><img src="https://nodei.co/npm/bulma-addons.png?compact=true"></a>
              </p>
              <p>
                <code>
                  import 'bulma-addons/css/bulma.css'
                </code>
                <br>or<br>
                <code>
                  import 'bulma-addons/bulma.sass'
                </code>
              </p>
              <p>
                <span class="tag is-info">Info:</span> You can also import only the required addon from this package;
                <br>
                <code>
                  import 'bulma-addons/css/addons/navigation-view.css'
                </code>
                <br>or<br>
                <code>
                  import 'bulma-addons/src/sass/navigation-view.sass'
                </code>
              </p>
            </li>
            <li>
              <span class="title is-5">CDN link</span>
              <p>
                <a href="https://unpkg.com/bulma-addons/css/">unpkg.com/bulma-addons</a>
              </p>
            </li>
            <li>
              <span class="title is-5">
                Download from the repository:
              </span>
              <p>
                <a href="https://github.com/mubaidr/bulma-addons/tree/master/css">https://github.com/mubaidr/bulma-addons/tree/master/css</a>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.padded-list li {
  padding: 1em 0;
}
</style>
