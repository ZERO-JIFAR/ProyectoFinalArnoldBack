/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Educacion;
import com.marcio.springjwt.Interface.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
@Component
public class EducacionController {
    
    @Autowired
    private IEducacionService interEduc;
    
 
    @GetMapping("/educacion/traer")
    public List<Educacion> getEducacion(){
        return interEduc.getEducacion();
    }    
   
    @PostMapping("/educacion/crear")
    public String createEducacion(@RequestBody Educacion ed){
        interEduc.saveEducacion(ed);
        return "El item Educacion fue agregado correctamente";
    }
    
    @DeleteMapping("/educacion/eliminar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        interEduc.deleteEducacion(id);
        return "La item educacion fue eliminado correctamente";
    }
    
    @PutMapping("/educacion/editar/{id}")
    public Educacion editEducacion(@RequestBody Educacion educ){
        
        Educacion ed = interEduc.findEducacion(educ.getId());
        ed=educ;
        interEduc.saveEducacion(ed);
        
        return ed;
    } 
    
     @GetMapping("/educacion/traer/{id}")
    public Educacion getEducacion(@PathVariable Long id){
        return interEduc.findEducacion(id);
    }
}
