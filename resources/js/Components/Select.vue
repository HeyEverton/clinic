<script lang="ts" setup>
interface ItemSelect {
    name: string;
    value: string;
}

interface Props {
    items: ItemSelect[];
}

const props = defineProps<Props>();
</script>
<template>
    <div>
        <select
            class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
        >
            <option disabled value="">Escolha uma opção</option>
            <option v-if="props.items?.length === 0" value="">
                Nenhuma opção foi encontrada
            </option>
            <option v-for="item in props.items" :key="item.value">
                {{ item.name }}
            </option>
        </select>
    </div>
</template>
