user_price = prompt("What Price do you want to set? ");
quantity = prompt("How much quantity of Chicken do you want? ");

quantity_per_kg = quantity/1000;
final_price = user_price*quantity_per_kg;

document.write("Your Price Fee kg = " + quantity_per_kg + "<br>" + "Final Price = " + final_price)

