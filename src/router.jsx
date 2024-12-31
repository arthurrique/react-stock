import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import ItemsLayout from "./views/items/Layout";
import ListItems from "./views/items/ListItems";
import CreateItem from "./views/items/CreateItem";
import ShowItem from "./views/items/ShowItem";
import UpdateItem from "./views/items/UpdateItem";
import Home from "./views/Home";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "items",
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ListItems /> },
        { path: "new", element: <CreateItem /> },
        { path: ":id", element: <ShowItem /> },
        { path: ":id/update", element: <UpdateItem /> }
      ]
    }
  ]
}])

export default router;