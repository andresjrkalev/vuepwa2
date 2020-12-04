<template>
  <header>
    <nav
      class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
    >
      <div class="container">
        <a class="navbar-brand" href="/">WebApp</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-dark"
                title="Manage"
                href="/Identity/Account/Manage"
                >Hello ankale@ttu.ee!</a
              >
            </li>
            <li class="nav-item">
              <form
                class="form-inline"
                action="/Identity/Account/Logout?returnUrl=%2F"
                method="post"
              >
                <button type="submit" class="nav-link btn btn-link text-dark">
                  Logout
                </button>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="CfDJ8F70qYPWQKpMkqprHIU0E51lV_yUSFqBKnGM33an9gAHbpGa2ZGMGnhY6bccCU0NIUOB86mnHt9nkEmhU9girWeDZ1D6l3sc00z_MPkz8qIrd1SZ6VHiYPnzDkBz92PExwXT3S-qYj9hu3yzm8xYUnhakshX5bTB2JeBTzanvAPOviJdkvFmUGMnkP7KBbUKrg"
                />
              </form>
            </li>
          </ul>

          <ul class="navbar-nav flex-grow-1">
            <router-link class="nav-link text-dark" to="/listitems">Listitems</router-link>
            <router-link class="nav-link text-dark" to="/about"
              >About</router-link
            >
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container">
    <main role="main" class="pb-3">
      <router-view />
    </main>
  </div>

  <footer class="border-top footer text-muted">
    <div class="container">
      &copy; 2020 - WebApp - <a href="/Home/Privacy">Privacy</a>
    </div>
  </footer>
</template>

<style>
/* Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
for details on configuring this project to bundle and minify static web assets. */

a.navbar-brand {
  white-space: normal;
  text-align: center;
  word-break: break-all;
}

/* Provide sufficient contrast against white background */
a {
  color: #0366d6;
}

.btn-primary {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

/* Sticky footer styles
-------------------------------------------------- */
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

button.accept-policy {
  font-size: 1rem;
  line-height: inherit;
}

/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}

body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  white-space: nowrap;
  line-height: 60px; /* Vertically center the text there */
}
</style>
