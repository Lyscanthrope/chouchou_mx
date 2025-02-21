function standoff_extrude_6_outline_fn(){
    return CAG.circle({"center":[159.756879,-197.0939413],"radius":4.5})
.union(
    CAG.circle({"center":[92.1243418,-197.0939413],"radius":4.5})
).union(
    CAG.circle({"center":[152.6492126,-118.1088561],"radius":4.5})
).union(
    CAG.circle({"center":[99.2320082,-118.1088561],"radius":4.5})
).union(
    CAG.circle({"center":[177.8043778,-146.1767213],"radius":4.5})
).union(
    CAG.circle({"center":[74.076843,-146.1767213],"radius":4.5})
).union(
    CAG.circle({"center":[198.1129769,-109.2489323],"radius":4.5})
).union(
    CAG.circle({"center":[53.7682439,-109.2489323],"radius":4.5})
).extrude({ offset: [0, 0, 6] });
}


function mounting_extrude_6_outline_fn(){
    return CAG.circle({"center":[159.756879,-197.0939413],"radius":1.5})
.union(
    CAG.circle({"center":[92.1243418,-197.0939413],"radius":1.5})
).union(
    CAG.circle({"center":[152.6492126,-118.1088561],"radius":1.5})
).union(
    CAG.circle({"center":[99.2320082,-118.1088561],"radius":1.5})
).union(
    CAG.circle({"center":[177.8043778,-146.1767213],"radius":1.5})
).union(
    CAG.circle({"center":[74.076843,-146.1767213],"radius":1.5})
).union(
    CAG.circle({"center":[198.1129769,-109.2489323],"radius":1.5})
).union(
    CAG.circle({"center":[53.7682439,-109.2489323],"radius":1.5})
).extrude({ offset: [0, 0, 6] });
}


function xlBoard_extrude_3_outline_fn(){
    return new CSG.Path2D([[20.7799418,-139.8651527],[33.3902365,-105.2186526]]).appendArc([37.1473611,-102.0181644],{"radius":5,"clockwise":true,"large":false}).appendPoint([59.3828213,-97.7557244]).appendArc([60.9693227,-97.7081114],{"radius":5,"clockwise":true,"large":false}).appendPoint([81.4562486,-100.3738779]).appendArc([82.8447686,-100.7643523],{"radius":5,"clockwise":true,"large":false}).appendPoint([101.8658938,-109.2331028]).appendArc([103.4406041,-110.3396891],{"radius":5,"clockwise":true,"large":false}).appendPoint([117.6648266,-125.1690739]).appendPoint([134.2163941,-125.1690739]).appendPoint([148.4406167,-110.3396891]).appendArc([150.0153272,-109.2331027],{"radius":5,"clockwise":true,"large":false}).appendPoint([169.0357445,-100.7646675]).appendArc([170.4249722,-100.3738779],{"radius":5,"clockwise":true,"large":false}).appendPoint([190.9118981,-97.7081114]).appendArc([192.4983996,-97.7557244],{"radius":5,"clockwise":true,"large":false}).appendPoint([214.7338596,-102.0181644]).appendArc([218.4909844,-105.2186526],{"radius":5,"clockwise":true,"large":false}).appendPoint([231.101279,-139.8651526]).appendArc([228.1129165,-146.2737165],{"radius":5,"clockwise":true,"large":false}).appendPoint([211.7037463,-152.2461659]).appendArc([205.2600894,-149.1581202],{"radius":5,"clockwise":true,"large":false}).appendPoint([203.0864767,-142.7691441]).appendPoint([172.5183035,-159.0133089]).appendPoint([169.4023881,-160.9469311]).appendPoint([181.7483968,-190.032305]).appendArc([179.0995279,-196.5884849],{"radius":5,"clockwise":true,"large":false}).appendPoint([145.9567508,-210.6567592]).appendArc([139.4005709,-208.0078902],{"radius":5,"clockwise":true,"large":false}).appendPoint([127.3465241,-179.6103355]).appendPoint([125.9406104,-177.7864835]).appendPoint([124.5346967,-179.6103357]).appendPoint([112.4806498,-208.0078904]).appendArc([105.9244701,-210.6567592],{"radius":5,"clockwise":true,"large":false}).appendPoint([72.7816927,-196.5884849]).appendArc([70.1328239,-190.0323051],{"radius":5,"clockwise":true,"large":false}).appendPoint([82.4788327,-160.9469311]).appendPoint([79.3629176,-159.0133091]).appendPoint([48.7947441,-142.769144]).appendPoint([46.6211314,-149.1581202]).appendArc([40.1774745,-152.246166],{"radius":5,"clockwise":true,"large":false}).appendPoint([23.7683043,-146.2737164]).appendArc([20.7799417,-139.8651527],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function xlBoard_extrude_7_6_outline_fn(){
    return new CSG.Path2D([[20.7799418,-139.8651527],[33.3902365,-105.2186526]]).appendArc([37.1473611,-102.0181644],{"radius":5,"clockwise":true,"large":false}).appendPoint([59.3828213,-97.7557244]).appendArc([60.9693227,-97.7081114],{"radius":5,"clockwise":true,"large":false}).appendPoint([81.4562486,-100.3738779]).appendArc([82.8447686,-100.7643523],{"radius":5,"clockwise":true,"large":false}).appendPoint([101.8658938,-109.2331028]).appendArc([103.4406041,-110.3396891],{"radius":5,"clockwise":true,"large":false}).appendPoint([117.6648266,-125.1690739]).appendPoint([134.2163941,-125.1690739]).appendPoint([148.4406167,-110.3396891]).appendArc([150.0153272,-109.2331027],{"radius":5,"clockwise":true,"large":false}).appendPoint([169.0357445,-100.7646675]).appendArc([170.4249722,-100.3738779],{"radius":5,"clockwise":true,"large":false}).appendPoint([190.9118981,-97.7081114]).appendArc([192.4983996,-97.7557244],{"radius":5,"clockwise":true,"large":false}).appendPoint([214.7338596,-102.0181644]).appendArc([218.4909844,-105.2186526],{"radius":5,"clockwise":true,"large":false}).appendPoint([231.101279,-139.8651526]).appendArc([228.1129165,-146.2737165],{"radius":5,"clockwise":true,"large":false}).appendPoint([211.7037463,-152.2461659]).appendArc([205.2600894,-149.1581202],{"radius":5,"clockwise":true,"large":false}).appendPoint([203.0864767,-142.7691441]).appendPoint([172.5183035,-159.0133089]).appendPoint([169.4023881,-160.9469311]).appendPoint([181.7483968,-190.032305]).appendArc([179.0995279,-196.5884849],{"radius":5,"clockwise":true,"large":false}).appendPoint([145.9567508,-210.6567592]).appendArc([139.4005709,-208.0078902],{"radius":5,"clockwise":true,"large":false}).appendPoint([127.3465241,-179.6103355]).appendPoint([125.9406104,-177.7864835]).appendPoint([124.5346967,-179.6103357]).appendPoint([112.4806498,-208.0078904]).appendArc([105.9244701,-210.6567592],{"radius":5,"clockwise":true,"large":false}).appendPoint([72.7816927,-196.5884849]).appendArc([70.1328239,-190.0323051],{"radius":5,"clockwise":true,"large":false}).appendPoint([82.4788327,-160.9469311]).appendPoint([79.3629176,-159.0133091]).appendPoint([48.7947441,-142.769144]).appendPoint([46.6211314,-149.1581202]).appendArc([40.1774745,-152.246166],{"radius":5,"clockwise":true,"large":false}).appendPoint([23.7683043,-146.2737164]).appendArc([20.7799417,-139.8651527],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7.6] });
}


function board_extrude_7_6_outline_fn(){
    return new CSG.Path2D([[23.5990197,-140.8912131],[36.2093144,-106.244713]]).appendArc([37.7121642,-104.9645177],{"radius":2,"clockwise":true,"large":false}).appendPoint([59.9476243,-100.7020777]).appendArc([60.5822249,-100.6830325],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.0691508,-103.3487989]).appendArc([81.6245588,-103.5049887],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.6456838,-111.9737392]).appendArc([101.275568,-112.4163737],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.7950028,-127.5535303]).appendArc([117.2383602,-128.1690739],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.6428606,-128.1690739]).appendArc([136.086218,-127.5535303],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.6056528,-112.4163737]).appendArc([151.235537,-111.9737391],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.256662,-103.5049887]).appendArc([170.81207,-103.348799],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.298996,-100.6830325]).appendArc([191.9335965,-100.7020777],{"radius":2,"clockwise":true,"large":false}).appendPoint([214.1690566,-104.9645177]).appendArc([215.6719065,-106.244713],{"radius":2,"clockwise":true,"large":false}).appendPoint([228.2822011,-140.8912131]).appendArc([227.0868561,-143.4546386],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.6776859,-149.427088]).appendArc([208.1002232,-148.1918698],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.5481801,-140.6905598]).appendArc([202.7162298,-139.5686108],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.0809422,-156.3798485]).appendArc([170.9648994,-156.4465879],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.0925469,-158.849627]).appendArc([166.3061079,-161.3304659],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.9868823,-191.2044984]).appendArc([177.9273347,-193.8269702],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.7845574,-207.8952446]).appendArc([142.1620856,-206.835697],{"radius":2,"clockwise":true,"large":false}).appendPoint([130.0578921,-178.3200042]).appendArc([129.8008911,-177.8804356],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.5246192,-174.9274925]).appendArc([124.3566016,-174.9274925],{"radius":2,"clockwise":false,"large":false}).appendPoint([122.0803297,-177.8804356]).appendArc([121.8233288,-178.3200042],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.7191353,-206.835697]).appendArc([107.0966633,-207.8952445],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.9538861,-193.8269703]).appendArc([72.8943386,-191.2044983],{"radius":2,"clockwise":true,"large":false}).appendPoint([85.575113,-161.3304659]).appendArc([84.7886738,-158.8496271],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.9163214,-156.4465879]).appendArc([80.8002786,-156.3798485],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.164991,-139.5686108]).appendArc([46.3330407,-140.6905598],{"radius":2,"clockwise":false,"large":false}).appendPoint([43.7809976,-148.1918697]).appendArc([41.2035349,-149.4270881],{"radius":2,"clockwise":true,"large":false}).appendPoint([24.7943647,-143.4546385]).appendArc([23.5990196,-140.8912131],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_6_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_6_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = xlBoard_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_7_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_7_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = bottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        