function standoff_extrude_6_outline_fn(){
    return CAG.circle({"center":[151.9679902,-193.2495291],"radius":4.5})
.union(
    CAG.circle({"center":[89.6520228,-193.2495291],"radius":4.5})
).union(
    CAG.circle({"center":[145.7342418,-119.0019971],"radius":4.5})
).union(
    CAG.circle({"center":[95.8857712,-119.0019971],"radius":4.5})
).union(
    CAG.circle({"center":[169.0864853,-144.487879],"radius":4.5})
).union(
    CAG.circle({"center":[72.5335277,-144.487879],"radius":4.5})
).union(
    CAG.circle({"center":[189.3968197,-111.9589266],"radius":4.5})
).union(
    CAG.circle({"center":[52.2231933,-111.9589266],"radius":4.5})
).extrude({ offset: [0, 0, 6] });
}


function mounting_extrude_6_outline_fn(){
    return CAG.circle({"center":[151.9679902,-193.2495291],"radius":1.5})
.union(
    CAG.circle({"center":[89.6520228,-193.2495291],"radius":1.5})
).union(
    CAG.circle({"center":[145.7342418,-119.0019971],"radius":1.5})
).union(
    CAG.circle({"center":[95.8857712,-119.0019971],"radius":1.5})
).union(
    CAG.circle({"center":[169.0864853,-144.487879],"radius":1.5})
).union(
    CAG.circle({"center":[72.5335277,-144.487879],"radius":1.5})
).union(
    CAG.circle({"center":[189.3968197,-111.9589266],"radius":1.5})
).union(
    CAG.circle({"center":[52.2231933,-111.9589266],"radius":1.5})
).extrude({ offset: [0, 0, 6] });
}


function xlBoard_extrude_3_outline_fn(){
    return new CSG.Path2D([[21.7082419,-139.0031659],[32.857148,-108.3717983]]).appendArc([36.491555,-105.195762],{"radius":5,"clockwise":true,"large":false}).appendPoint([57.6576067,-100.5845875]).appendArc([59.2993957,-100.5034554],{"radius":5,"clockwise":true,"large":false}).appendPoint([78.6762397,-102.7564336]).appendArc([80.1324547,-103.1552473],{"radius":5,"clockwise":true,"large":false}).appendPoint([98.0661958,-111.1398634]).appendArc([99.7093281,-112.3187714],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.8686022,-126.5923011]).appendPoint([128.7514108,-126.5923011]).appendPoint([141.9106849,-112.3187714]).appendArc([143.5531097,-111.1401783],{"radius":5,"clockwise":true,"large":false}).appendPoint([161.4875582,-103.1552474]).appendArc([162.9437733,-102.7564336],{"radius":5,"clockwise":true,"large":false}).appendPoint([182.3206172,-100.5034555]).appendArc([183.9624063,-100.5845875],{"radius":5,"clockwise":true,"large":false}).appendPoint([205.128458,-105.195762]).appendArc([208.7626002,-108.3710704],{"radius":5,"clockwise":true,"large":false}).appendPoint([219.911771,-139.0031658]).appendArc([216.9234085,-145.4117297],{"radius":5,"clockwise":true,"large":false}).appendPoint([201.5942809,-150.9910757]).appendArc([195.1549858,-147.9181786],{"radius":5,"clockwise":true,"large":false}).appendPoint([192.9648218,-141.5463637]).appendPoint([164.2308512,-156.9253328]).appendPoint([160.696762,-159.1720721]).appendPoint([172.2947801,-186.4952904]).appendArc([169.6459111,-193.0514704],{"radius":5,"clockwise":true,"large":false}).appendPoint([139.5454026,-205.8283783]).appendArc([132.9892227,-203.1795093],{"radius":5,"clockwise":true,"large":false}).appendPoint([121.9719493,-177.2244399]).appendPoint([120.8100065,-176.76326]).appendPoint([119.6480637,-177.2244399]).appendPoint([108.6307902,-203.1795095]).appendArc([102.0746105,-205.8283783],{"radius":5,"clockwise":true,"large":false}).appendPoint([71.9741017,-193.0514704]).appendArc([69.3252329,-186.4952906],{"radius":5,"clockwise":true,"large":false}).appendPoint([80.9232511,-159.1720721]).appendPoint([77.389161,-156.9253323]).appendPoint([48.6551912,-141.5463637]).appendPoint([46.4650273,-147.9181786]).appendArc([40.02646,-150.9913408],{"radius":5,"clockwise":true,"large":false}).appendPoint([24.6973324,-145.4119945]).appendArc([21.7082419,-139.0031659],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function xlBoard_extrude_7_6_outline_fn(){
    return new CSG.Path2D([[21.7082419,-139.0031659],[32.857148,-108.3717983]]).appendArc([36.491555,-105.195762],{"radius":5,"clockwise":true,"large":false}).appendPoint([57.6576067,-100.5845875]).appendArc([59.2993957,-100.5034554],{"radius":5,"clockwise":true,"large":false}).appendPoint([78.6762397,-102.7564336]).appendArc([80.1324547,-103.1552473],{"radius":5,"clockwise":true,"large":false}).appendPoint([98.0661958,-111.1398634]).appendArc([99.7093281,-112.3187714],{"radius":5,"clockwise":true,"large":false}).appendPoint([112.8686022,-126.5923011]).appendPoint([128.7514108,-126.5923011]).appendPoint([141.9106849,-112.3187714]).appendArc([143.5531097,-111.1401783],{"radius":5,"clockwise":true,"large":false}).appendPoint([161.4875582,-103.1552474]).appendArc([162.9437733,-102.7564336],{"radius":5,"clockwise":true,"large":false}).appendPoint([182.3206172,-100.5034555]).appendArc([183.9624063,-100.5845875],{"radius":5,"clockwise":true,"large":false}).appendPoint([205.128458,-105.195762]).appendArc([208.7626002,-108.3710704],{"radius":5,"clockwise":true,"large":false}).appendPoint([219.911771,-139.0031658]).appendArc([216.9234085,-145.4117297],{"radius":5,"clockwise":true,"large":false}).appendPoint([201.5942809,-150.9910757]).appendArc([195.1549858,-147.9181786],{"radius":5,"clockwise":true,"large":false}).appendPoint([192.9648218,-141.5463637]).appendPoint([164.2308512,-156.9253328]).appendPoint([160.696762,-159.1720721]).appendPoint([172.2947801,-186.4952904]).appendArc([169.6459111,-193.0514704],{"radius":5,"clockwise":true,"large":false}).appendPoint([139.5454026,-205.8283783]).appendArc([132.9892227,-203.1795093],{"radius":5,"clockwise":true,"large":false}).appendPoint([121.9719493,-177.2244399]).appendPoint([120.8100065,-176.76326]).appendPoint([119.6480637,-177.2244399]).appendPoint([108.6307902,-203.1795095]).appendArc([102.0746105,-205.8283783],{"radius":5,"clockwise":true,"large":false}).appendPoint([71.9741017,-193.0514704]).appendArc([69.3252329,-186.4952906],{"radius":5,"clockwise":true,"large":false}).appendPoint([80.9232511,-159.1720721]).appendPoint([77.389161,-156.9253323]).appendPoint([48.6551912,-141.5463637]).appendPoint([46.4650273,-147.9181786]).appendArc([40.02646,-150.9913408],{"radius":5,"clockwise":true,"large":false}).appendPoint([24.6973324,-145.4119945]).appendArc([21.7082419,-139.0031659],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7.6] });
}


function board_extrude_7_6_outline_fn(){
    return new CSG.Path2D([[24.5273198,-140.0292263],[35.6764908,-109.3971308]]).appendArc([37.1301476,-108.1270074],{"radius":2,"clockwise":true,"large":false}).appendPoint([58.2961993,-103.5158329]).appendArc([58.9529149,-103.4833801],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.3297589,-105.7363583]).appendArc([78.9122449,-105.8958837],{"radius":2,"clockwise":true,"large":false}).appendPoint([96.8466935,-113.8808148]).appendArc([97.5036634,-114.352252],{"radius":2,"clockwise":true,"large":false}).appendPoint([110.9599604,-128.9479548]).appendArc([112.4304035,-129.5923011],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.1896095,-129.5923011]).appendArc([130.6600526,-128.9479548],{"radius":2,"clockwise":false,"large":false}).appendPoint([144.1163496,-114.352252]).appendArc([144.7733195,-113.8808147],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.7077682,-105.8958837]).appendArc([163.2902541,-105.7363583],{"radius":2,"clockwise":true,"large":false}).appendPoint([182.6670981,-103.4833801]).appendArc([183.3238137,-103.5158329],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.4898654,-108.1270074]).appendArc([205.9435223,-109.3971308],{"radius":2,"clockwise":true,"large":false}).appendPoint([217.0926932,-140.0292263]).appendArc([215.8973481,-142.5926518],{"radius":2,"clockwise":true,"large":false}).appendPoint([200.5674926,-148.1722629]).appendArc([197.9920658,-146.942998],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.420043,-139.4602463]).appendArc([192.584892,-138.3470435],{"radius":2,"clockwise":false,"large":false}).appendPoint([162.782191,-154.2980175]).appendArc([162.6529613,-154.3735364],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.3721655,-157.0949819]).appendArc([157.6041499,-159.5642486],{"radius":2,"clockwise":false,"large":false}).appendPoint([169.5332655,-187.6674839]).appendArc([168.4737179,-190.2899557],{"radius":2,"clockwise":true,"large":false}).appendPoint([138.3732092,-203.0668637]).appendArc([135.7507374,-202.0073161],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.5702112,-175.6676472]).appendArc([123.4670188,-174.5901781],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5478239,-173.8284418]).appendArc([120.0721891,-173.8284417],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.1529941,-174.5901781]).appendArc([117.0498019,-175.6676472],{"radius":2,"clockwise":false,"large":false}).appendPoint([105.8692757,-202.0073161]).appendArc([103.2468037,-203.0668636],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.1462951,-190.2899558]).appendArc([72.0867476,-187.6674838],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.0158632,-159.5642486]).appendArc([83.2478474,-157.094982],{"radius":2,"clockwise":false,"large":false}).appendPoint([78.9670518,-154.3735363]).appendArc([78.837822,-154.2980175],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.035121,-138.3470434]).appendArc([46.1999701,-139.4602464],{"radius":2,"clockwise":false,"large":false}).appendPoint([43.6279473,-146.9429981]).appendArc([41.0525204,-148.1722629],{"radius":2,"clockwise":true,"large":false}).appendPoint([25.7226649,-142.5926517]).appendArc([24.5273198,-140.0292263],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        