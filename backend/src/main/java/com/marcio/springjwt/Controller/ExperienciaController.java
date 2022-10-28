/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Experiencia;
import com.marcio.springjwt.Interface.IExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
public class ExperienciaController {

    @Autowired
    private IExperienciaService interExp;


    @GetMapping("/experiencias/traer")
    public List<Experiencia> getExperiencias() {
        return interExp.getExperiencias();
    }

    @PostMapping("/experiencias/crear")
    public String createExperiencia(@RequestBody Experiencia exp) {
        interExp.saveExperiencia(exp);
        return "La experiencia fue agregada exitosamente";
    }

    @DeleteMapping("/experiencias/eliminar/{id}")
    public String deleteExperiencia(@PathVariable Long id) {
        interExp.deleteExperiencia(id);
        return "La experiencia fue eliminada correctamente";
    }

    @PutMapping("/experiencias/editar/{id}")
    public Experiencia editExperiencia(@RequestBody Experiencia ex) {

        Experiencia exp = interExp.findExperiencia(ex.getId());

        exp = ex;
        interExp.saveExperiencia(exp);
        return exp;
    }
    
     @GetMapping("/experiencias/traer/{id}")
    public Experiencia getExperiencia(@PathVariable Long id){
        return interExp.findExperiencia(id);
    }
}
