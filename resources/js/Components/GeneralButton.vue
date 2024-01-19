<script lang="ts" setup>
interface Props {
    badge?: boolean;
    badgeContent?: number | string;
    icon?: string;
    color?: string;
    size?: string;
    disabled?: boolean;
    loading?: boolean;
    variant?: string;
    type?: string;
    buttonText?: string;
}
const props = defineProps<Props>();
</script>
<template>
    <VBadge v-if="badge" color="primary" size="12px" :content="badgeContent">
        <VBtn>
            <VIcon icon="tabler-user"/>
            {{ buttonText ?? "Clique" }}
        </VBtn>
    </VBadge>
</template>
