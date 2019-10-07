import {storiesOf} from "@storybook/vue";
import TestButton from "./button"

storiesOf("Button", module)
    .add("All Buttons", ()=>({
        components: {
            TestButton
        },
        template:`<div>
                    <test-button/> 
                    <test-button type="primary"/> 
                    <test-button type="error"/>
                  <div/>`
    }));