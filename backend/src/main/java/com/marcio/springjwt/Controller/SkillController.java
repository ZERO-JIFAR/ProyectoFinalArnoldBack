/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Skill;
import com.marcio.springjwt.Interface.ISkillService;
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
public class SkillController {

    @Autowired
    private ISkillService interSkill;

    @GetMapping("/skills/traer")
    public List<Skill> getSkills() {
        return interSkill.getSkills();
    }

    @PostMapping("/skills/crear")
    public String creteSkill(@RequestBody Skill skill) {
        interSkill.saveSkill(skill);
        return "Skill agregada correctamente";
    }

    @DeleteMapping("/skills/borrar/{id}")
    public String deleteSkill(@PathVariable Long id) {
        interSkill.deleteSkill(id);
        return "Skill eliminada correctamente";
    }

    @PutMapping("/skills/editar/{id}")
    public Skill editSkill(@RequestBody Skill sk) {
        Skill skill = interSkill.findSkill(sk.getId());
        skill = sk;
        interSkill.saveSkill(skill);
        return skill;
    }
    
     @GetMapping("/skills/traer/{id}")
    public Skill getSkill(@PathVariable Long id){
        return interSkill.findSkill(id);
    }
}
