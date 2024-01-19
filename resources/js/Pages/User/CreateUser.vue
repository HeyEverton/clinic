<script lang="ts" setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { VCardText, VDataTableServer } from "vuetify/lib/components/index.mjs";
import GeneralButton from "../../Components/GeneralButton.vue";
const fakeData = [
    {
        name: "Everton Henrique",
        email: "everton@everton.com",
        birthDate: "10/10/2002",
        phone_number: "+55 (11) 11111-1111",
    },
    {
        name: "Daniel Lima",
        email: "daniel@daniel.com",
        birthDate: "10/04/2000",
        phone_number: "+55 (11) 22222-2222",
    },
];

const headers = [
    {
        title: "Nome",
        key: "name",
        sortable: true,
    },
    {
        title: "E-mail",
        key: "email",
        sortable: true,
    },
    {
        title: "Data de nascimento",
        key: "birthDate",
        sortable: true,
    },
    {
        title: "Telefone",
        key: "phone_number",
        sortable: true,
    },
    {
        title: "Ações",
        key: "actions",
        sortable: false,
    },
];

const itemsPerPageOptions = [
    {
        title: "10",
        value: 10,
    },
    {
        title: "15",
        value: 15,
    },
    {
        title: "20",
        value: 20,
    },
    {
        title: "30",
        value: 30,
    },
    {
        title: "Todos",
        value: -1,
    },
];
</script>
<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Usuários
            </h2>
        </template>

        <VCard>
            <VCardText>
                <VDataTableServer
                    :items-length="fakeData.length"
                    density="comfortable"
                    no-data-text="Nenhum usuário foi encontrado"
                    :items="fakeData"
                    :headers="headers"
                    items-per-page-text="Linhas por página"
                    show-current-page
                    :items-per-page-options="itemsPerPageOptions"
                >
                    <template #item.actions="{ item }">
                        <GeneralButton button-text="Excluir" badge
badgeContent="2" />
                    </template>
                </VDataTableServer>
            </VCardText>
        </VCard>
    </AuthenticatedLayout>
</template>
