<template>
<div>
    <main class="wrapper">
        <h1>Past Orders</h1>

        <table class="product-table">
          <thead>
            <tr>
              <td><span class="sr-only">Product Image</span></td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td><span class="sr-only">Actions</span></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i class="icofont-carrot icofont-4x"/></td>
              <td>Carrot</td>
              <td>{{price}}</td>
              <td>{{quantity}}</td>
              <td>{{total}}</td>
              <td><button class="btn btn-dark" @click="quantity += 1">Add</button>
              <button class="btn btn-dark" @click="quantity -= 1">Less</button>
              </td>
            </tr>
            <tr>
              <td><i class="icofont-banana icofont-4x"/></td>
              <td>Banana</td>
              <td>$0.50</td>
              <td>10</td>
              <td>$5.00</td>
              <td><button class="btn btn-dark">Add</button></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quantity : 0,
      total : 0,
      price : 4
    }
  },
  watch:{
    quantity(newValue, oldValue) {
      if (newValue < 0) {
        console.log(oldValue);
        alert('value cannot go less than 0')
        this.quantity = 0;
        return;
      } 
      this.total = this.quantity * this.price
    }
  }
}
</script>

<style scoped>
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  cursor: pointer;
  width: 30%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  width: 450px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>