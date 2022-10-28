/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Controller;

import com.marcio.springjwt.Entity.Banner;
import com.marcio.springjwt.Interface.IBannerService;
import javax.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@Component
public class BannerController {

    @Autowired
    IBannerService iBannerService;

    @GetMapping("banner/traer/{id}")
    public Banner getBanner(@PathVariable Long id) {
        return iBannerService.getBanner(id);
    }

    @PutMapping("/banner/editar/{id}")
    public Banner editBanner(@RequestBody Banner b) {
        Banner banner = iBannerService.findBanner(b.getId());
        banner = b;
        iBannerService.saveBanner(banner);
        return banner;
    }
}
