import { CartComponent } from "./components/cart/cart.component";

export const CheckoutRoutes = [
    { path: '', redirectTo: 'cart', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },];
