import { Component } from "solid-js"
import './routing_container.css'

const ComproContainer: Component = (props: any) => {
    return (
        <>
            <div>
                <div class="ismobile bacground-summry overflow-hidden"> 
                  {props.children}
                </div>
            </div>
        </>
    )
}
export default ComproContainer;