<template>
    <div @click="$emit('click',$event)" :class="buttonClass">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "test-button",
        props:{
            text:{
                type: String,
                default: "Button"
            },
            type:{
                type: String,
                default: "default"
            }
        },
        computed:{
            buttonClass(){
                return "button " + this.type
            }
        }
    }
</script>

<style scoped lang="css">
    .button{
        margin: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        font-size: 14px;
        line-height: 19px;
        height: 24px;
        width: 60px;
        border-radius: 2px;
        border: 1px solid;
    }
    .primary{
        color: white;
        background-color: blue;
        border-color: blue;
    }
    .error{
        color: white;
        background-color: red;
        border-color: red;
    }
    .default{
        color: black;
        background-color: white;
        border-color: black;
    }
</style>                                                                                                                                     