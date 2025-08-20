<!-- <template>
    <el-button type="success" @click="dialogVisible = true">
        click to open the Dialog
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        //使用插槽定制功能按钮，如不需要可不定义
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

// 关闭按钮的处理方法
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
</script> -->
<template>
    <el-button type="success" @click="dialogFormVisible = true">
        open a Form nested Dialog
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="30%">
        <el-form :model="form">
            <el-form-item label="Promotion name" label-width="140px">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" label-width="140px">
                <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogFormVisible = ref(false)

const form = ref({
    name: '',
    region: ''
})

</script>