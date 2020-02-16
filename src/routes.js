import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 

import Register from './pages/Register';
import Calc from './pages/Calc';

const Routes = createAppContainer(
    createStackNavigator({
        Register: {
            screen: Register,
            navigationOptions: {
                title: "Registro",

            }
        },
        Calc: {
            screen: Calc,
            navigationOptions: {
                title: "Cálculo",
            }
        },
    },
    {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTintColor: "#151515",
            headerStyle: {
                backgroundColor: "#c4c4c4",
            }

        }
    }
    
    
    )
);

export default Routes;