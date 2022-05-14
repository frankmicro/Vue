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