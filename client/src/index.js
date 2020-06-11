import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Books } from "./components/Books";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import {BaseLayout} from "./components/BaseLayout";
import { AddBook } from "./components/AddBook";
import { BookDetails } from "./components/BookDetails";

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
  <BaseLayout>
  <Switch>

  <Route component={App} path="/" exact/>
  <Route component={Books} path="/books" exact />
  <Route component={AddBook} path="/add-book" />
  <Route component={BookDetails} path="/books/:bookid" />

  </Switch>
  </BaseLayout>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();