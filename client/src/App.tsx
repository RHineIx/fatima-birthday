import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function EmptyPage() {
  return <div aria-hidden="true" />;
}

function Router() {
  return (
    <Switch>
      <Route path="/fatima10" component={Home} />
      <Route path="/" component={EmptyPage} />
      <Route component={EmptyPage} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
