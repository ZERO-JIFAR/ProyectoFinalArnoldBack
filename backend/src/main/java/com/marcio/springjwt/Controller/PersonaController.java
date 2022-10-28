/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Persona;
import com.marcio.springjwt.Interface.IPersonaService;
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
public class PersonaController {

    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("personas/traer")
    public List<Persona> getPersonas() {
        return ipersonaService.getPersonas();

    }


    @GetMapping("personas/traer/{id}")
    public Persona getPersona(@PathVariable Long id) {
        return ipersonaService.getPersona(id);
    }

    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona) {
        ipersonaService.savePersona(persona);
        return " Persona creada correctamente";
    }

    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id) {
        ipersonaService.deletePersona(id);
        return "Persona eliminada correctamente";
    }

    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@RequestBody Persona per) {
        Persona persona = ipersonaService.findPersona(per.getId());
        persona = per;
        ipersonaService.savePersona(persona);
        return persona;
    }

}
