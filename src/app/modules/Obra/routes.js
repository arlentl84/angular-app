import {ObraListComponent} from "./obra-list/obra-list.component";
import {ObraCreateComponent} from "./obra-create/obra-create.component";

 const routes =[
   {path:'obras', component:ObraListComponent},
   {path:'obras/create', component:ObraCreateComponent},
 ]



export default routes
