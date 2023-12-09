<template>
    <div class="backdrop">
        <div class="modal">
            <p>moal content here</p>
        </div>
    </div>
</template>

<script>
    
</script>
<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        width: 100%;
        height: 100%;
        margin: auto;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
    }
</style>