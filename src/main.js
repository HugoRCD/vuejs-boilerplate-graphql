import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "flowbite";
import "./assets/style/main.scss";
import i18n from "./plugins/i18n";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import clickOutside from "./plugins/directives.js";

import {ApolloClient, ApolloLink, createHttpLink, InMemoryCache} from "@apollo/client/core";
import {createApolloProvider} from "@vue/apollo-option";
import {concat} from "@apollo/client/link/core";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_API_URL || "http://localhost:3000/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: store.state.token ? `Bearer ${store.state.token}` : null
    }
  });
  return forward(operation);
});

const apolloProvider = createApolloProvider({
  defaultClient: new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
});

const options = {
  toast: true,
  position: "top-end",
  timer: 1500,
  showConfirmButton: false,
  timerProgressBar: true,
  confirmButtonColor: "var(--accent)",
};

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(i18n)
  .use(apolloProvider)
  .use(VueSweetalert2, options)
  .directive("click-outside", clickOutside["click-outside"])
  .mount("#app");
