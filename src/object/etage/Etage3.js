import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";
import { Emitter } from "../../infrastructure/emitter";
import { Etage } from "./Etage";

export class Etage3 extends Etage {
    constructor(scene, caseFrom) {
        super("3", scene, caseFrom);

        const positionCase = caseFrom.mesh.position.clone();
        this.mesh.position = positionCase;
        this.pionPosition = positionCase.clone();
        this.pionPosition.y = 2.28;

        this.animateBuild();
    }
}