export class ColorPlane extends THREE.PlaneBufferGeometry {
	constructor(...params) {
		super(...params);

		this.bufferCount = this.getAttribute('position').count;

		let colorBuffer = new Float32Array(3*this.bufferCount);
		for(let i = 0, len = colorBuffer.length; i < len; ++i) {
			colorBuffer[i] = 1;
		}

		this.addAttribute('color', new THREE.BufferAttribute(colorBuffer, 3));
	}

	setColor(color) {
		let colorAttribute = this.getAttribute('color');
		for(let i = 0; i < this.bufferCount; ++i) {
			this.setColorAttribute(colorAttribute, i, color);
		}
		colorAttribute.needsUpdate = true;
	}

	setVertexColor(index, color) {
		let colorAttribute = this.getAttribute('color');
		this.setColorAttribute(colorAttribute, index, color);

		colorAttribute.needsUpdate = true;
	}

	setColorAttribute(colorAttribute, index, color) {
		colorAttribute.setXYZ(index, color.r, color.g, color.b);
	}
}
