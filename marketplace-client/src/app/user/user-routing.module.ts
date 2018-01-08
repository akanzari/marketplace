import { UserComponent } from "./components/user.component";
import { AddressesPageComponent } from "./components/addresses/addresses-page.component";
import { OverviewPageComponent } from "./components/overview/overview-page.component";
import { OrdersPageComponent } from "./components/orders/orders-page.component";
import { OrderDetailComponent } from "./components/orders/order-detail/order-detail.component";
import { ProfilePageComponent } from "./components/profile/profile-page.component";


export const UserRoutes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'profile' },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'overview', component: OverviewPageComponent, redirectTo: 'orders' },
            { path: 'orders', component: OrdersPageComponent },
            { path: 'orders/detail/:number', component: OrderDetailComponent },
            { path: 'addresses', component: AddressesPageComponent }
        ]
    },
];
