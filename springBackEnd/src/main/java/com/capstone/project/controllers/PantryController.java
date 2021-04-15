package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.Pantry;
import com.capstone.project.model.User;
import com.capstone.project.services.IngredientService;
import com.capstone.project.services.PantryService;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
@RequestMapping("api/pantry")
public class PantryController {

    private final UserService userService;
    private final IngredientService ingredientService;
    private final PantryService pantryService;

    public PantryController(UserService userService, IngredientService ingredientService, PantryService pantryService) {
        this.userService = userService;
        this.ingredientService = ingredientService;
        this.pantryService = pantryService;
    }


    //add ingredient to pantry for specific id
    @PutMapping("/addIngredient/{email}")
    public User addIngredientPantry(@PathVariable String email, @RequestBody Ingredient ingredient) {
        Pantry pantryItem = new Pantry();
        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + email);
        }
        pantryItem.setIngredient(ingredient);
        user.addIngredientItem(pantryItem);
        return userService.save(user);
    }


    //get all pantry ingredients by email api
    @GetMapping("allPantry/{email}")
    public Set<Pantry> allPantry(@PathVariable String email){
        User user = userService.findByEmail(email);
        return user.getPantryIngredients();
    }

    //delete a pantry item by its id
    @DeleteMapping("deletePantry/{name}&{email}")
    public Map<String, Boolean> deletePantryItem(@PathVariable String name, @PathVariable String email){
        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with email: " + email);
        }
        Set<Pantry> pantrySet = user.getPantryIngredients();
        if(pantryItem == null){
            throw new ResourceNotFoundException("There is no pantry with ingredient name: " + id);
        }
        user.removePantryItem(pantryItem);
        userService.save(user);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
