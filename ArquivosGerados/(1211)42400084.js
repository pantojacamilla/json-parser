    if(xRot != null && xRot != undefined){&#xD;&#xA;        camera.rotateX(xRot);            &#xD;&#xA;    }&#xD;&#xA;    if(yRot != null && yRot != undefined){&#xD;&#xA;        camera.rotateY(yRot);&#xD;&#xA;    }&#xD;&#xA;    if(camera.rotation.x < minCameraRotX){&#xD;&#xA;        camera.rotation.x = minCameraRotX;&#xD;&#xA;    }else if (camera.rotation.x > maxCameraRotX){&#xD;&#xA;        camera.rotation.x = maxCameraRotX;&#xD;&#xA;    }     &#xD;&#xA;    if(camera.rotation.y < minCameraRotY){&#xD;&#xA;        camera.rotation.y = minCameraRotY;&#xD;&#xA;    }else if(camera.rotation.y > maxCameraRotY){&#xD;&#xA;        camera.rotation.y = maxCameraRotY;&#xD;&#xA;    }  