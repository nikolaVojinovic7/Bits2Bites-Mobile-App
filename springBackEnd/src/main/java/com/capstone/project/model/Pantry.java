package com.capstone.project.model;

import javax.persistence.*;

@Entity
public class Pantry {

    @ManyToOne(cascade = {CascadeType.ALL})
    private Ingredient ingredient;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    //no arg constructor
    public Pantry(){
    }

    public Pantry(long id, Ingredient ingredient) {
        this.id = id;
        this.ingredient = ingredient;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredients) {
        this.ingredient = ingredients;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

}
