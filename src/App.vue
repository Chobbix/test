<script setup lang="ts">
import { ref, onMounted } from "vue";
import Heart from "./components/Heart.vue";

const posY = ref(100);
const posX = ref(100);
const isActive = ref(false);
const isAnswerYes = ref(false);
const indexResponse = ref(0);


const noResponses = [
	"Porque no quieres:((",
	"Mejor picale al 'Si'",
	"Porque te esfuerzas tanto en picarle a 'No'? :((",
	"Andale, picale 'Si' y te regalo un chicle",
	"Que mala u.u"
]

function mover() {
	if (isActive) {
  		posX.value = Math.random() * (window.innerWidth - 150);
		posY.value = Math.random() * (window.innerHeight - 60);

		indexResponse.value = Math.floor(Math.random() * noResponses.length);
	}
}

function activate() {
	isActive.value = true;
}

interface HeartProperties {
	id: number
	duration: number
	position: number
}

const hearts = ref<HeartProperties[]>([])

function generateHearts(cantidad: number) {
	for (let i = 0; i < cantidad; i++) {
		hearts.value.push({
			id: i,
			duration: Math.random() * 3 + 2,
			position: (i * 10)* .25
		})
	}
}

onMounted(() => {
	const size = Math.floor(window.innerWidth / 40)
	generateHearts(size)
})

</script>

<style>

</style>

<template>

	<Heart v-for="heart in hearts" 
			:key="heart.id" :id="heart.id" :seconds=heart.duration :position="heart.position" />


	<div class="absolute flex flex-col w-full h-screen items-center justify-center p-5 duration-100" :class="isAnswerYes ? 'scale-100' : 'scale-0'">
		<img class="max-w-2/3 transition-all duration-400" :class="isAnswerYes ? 'scale-100' : 'scale-0'" src="/cat.jpg" alt="for you">
		<h1  class="text-2xl transition-all duration-400" :class="isAnswerYes ? 'scale-100' : 'scale-0'">Te quiero muchooo</h1>
	</div>

	<div class="flex flex-col w-full h-screen items-center justify-center p-5" :class="isAnswerYes ? 'scale-0' : 'scale-100'">
		<div class="flex flex-col p-3 bg-violet-400 w-full items-center justify-center rounded-xl text-center">
			<h1 class="text-2xl">¿Quieres ser mi valentín?</h1>
			<div>
				<button
					class="p-5 m-2 border border-violet-300 rounded-xl bg-violet-400 hover:bg-violet-300 transition-all duration-300"
							@click="isAnswerYes = true">Siiiiiiii</button>
				<button
					class="p-5 m-2 border border-violet-300 rounded-xl bg-violet-400 hover:bg-violet-300 transition-all duration-300 z-10"
					:class="isActive ? 'absolute' : ''" :style="{
						top: posY + 'px',
						left: posX + 'px'
					}" @click=" isActive ? mover() : activate();">{{ isActive ? noResponses[indexResponse] : "NO" }}</button>
			</div>
		</div>
	</div>
</template>