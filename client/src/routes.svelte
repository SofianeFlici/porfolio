<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './pages/LandingPage.svelte';
    import Admin from './pages/Admin.svelte';
    import Connect from './pages/Connect.svelte';
  </script>
  
  <Router>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
    <Route path="/connect" component={Connect} />
  </Router>
  