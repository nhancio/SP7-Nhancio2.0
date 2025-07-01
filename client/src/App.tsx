import { Route, Switch } from 'wouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AutomationSetup from './pages/AutomationSetup';
import Pricing from './pages/Pricing';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SEOHead from './components/SEO/SEOHead';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/automation-setup" component={AutomationSetup} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;