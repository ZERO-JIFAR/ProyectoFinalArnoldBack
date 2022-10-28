/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Proyecto;
import com.marcio.springjwt.Interface.IProyectoService;
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
public class ProyectoController {

    @Autowired
    private IProyectoService interProy;

    @GetMapping("/proyectos/traer")
    public List<Proyecto> getProyectos() {
        return interProy.getProyecto();
    }

    @PostMapping("/proyectos/crear")
    public String createProyecto(@RequestBody Proyecto proy) {
        interProy.saveProyecto(proy);
        return "El proyecto fue creado exitosamente";
    }

    @DeleteMapping("/proyectos/borrar/{id}")
    public String deleteProyectos(@PathVariable Long id) {
        interProy.deleteProyecto(id);
        return "El proyecto fue eliminado satisfactoriamente";
    }

    @PutMapping("/proyectos/editar/{id}")
    public Proyecto editProyecto(@RequestBody Proyecto proyec) {

        Proyecto proy = interProy.findProyecto(proyec.getId());
        proy = proyec;
        interProy.saveProyecto(proy);
        return proy;
    }
    
    @GetMapping("/proyectos/traer/{id}")
    public Proyecto getProyecto(@PathVariable Long id){
        return interProy.findProyecto(id);
    }

}
