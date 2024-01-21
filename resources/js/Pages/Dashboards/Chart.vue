<script lang="ts" setup>
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";
interface Props {
    title: string;
}
const props = defineProps<Props>();
const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Novos usuários",
            backgroundColor: "rgb(254, 190, 201)",
            borderColor: "rgb(79, 0, 42)",
            data: [20, 10, 7, 5, 4, 9, 1, 5, 6, 4, 12, 5],
        },
        {
            label: "Novas Clínicas",
            backgroundColor: "rgb(0, 38, 16)",
            borderColor: "rgb(30, 227, 158)",
            data: [5, 2, 4, 5, 7, 8, 2, 7, 8, 8, 9, 3],
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {},
};
onMounted(() => {
    const myChart = new Chart(document.getElementById("exampleChart"), config);
});
</script>
<template>
    <div>
        <h1>{{ props.title }}</h1>
        <div>
            <canvas id="exampleChart"></canvas>
        </div>
    </div>
</template>
