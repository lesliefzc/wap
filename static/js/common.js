export default {
    install(Vue){
        Vue.prototype.open1 = function(msg){
            this.$message(msg);
        },
        Vue.prototype.open2 = function(msg){
            this.$message({
                message: msg, 
                type: 'success'
            });
           
        },
        Vue.prototype.open3 = function(msg){
            this.$message({
                message: msg, 
                type: 'warning'
            });
        },
        Vue.prototype.open4 = function(msg){
            this.$message.error(msg);
        }
    }
}