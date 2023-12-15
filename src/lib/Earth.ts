import { Viewer } from "cesium";

export const createViewer = (el:string)=>{
    new Viewer(el)
}