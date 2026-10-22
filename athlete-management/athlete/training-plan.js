(function(){
if (customElements.get('velou-training-plan')) return;
const D = {"S":{"REVO L1":[[1,1,1,"3- Progression A, RP1","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,1,3,"","Baseball","","",1,20,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[1,3,1,"4-Progression B, RP3","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,6,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz","","12oz or 8oz",1,6,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz","","12oz or 8oz",1,6,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,6,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,10,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[1,3,6,"","Baseball","","",1,15,70,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[1,5,1,"5-Progression B, RP4","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[1,5,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[1,5,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[1,5,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[1,5,5,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[1,5,6,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,1,1,"4-Progression A, RP2","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,1,3,"","Baseball","","",1,15,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[2,1,4,"","Baseball","","",1,20,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,3,1,"5-Progression B, RP5","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,8,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz","","12oz or 8oz",1,8,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz","","12oz or 8oz",1,8,70,"","Run and Round Throw","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,8,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,10,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[2,3,6,"","Baseball","","",1,10,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,3,7,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,5,1,"6-Progression B, RP6, Restructure Velocity Testing","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[2,5,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[2,5,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[2,5,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[2,5,5,"","Baseball","","",1,10,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,5,6,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,5,7,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,5,8,"","Baseball","","",1,3,80,"Kneeling Neutral Throws*Tap & Go","","","","","","","",""],[2,5,9,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Tap & Go","","","","","","","",""],[3,1,1,"4-Progression A, RP2","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,1,3,"","Baseball","","",1,15,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[3,1,4,"","Baseball","","",1,20,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,3,1,"5-Progression B, RP4","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[3,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,3,6,"","Baseball","","",1,15,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,5,1,"3-RP6","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,5,2,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,6,1,"6-Progression B, RP4","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,6,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,6,5,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[3,6,6,"","Baseball","","",1,15,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,1,1,"3-Progression A, RP1","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Rocker Figure 8 Throw","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Crossover Pendulum Throws","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,1,3,"","Baseball","","",1,20,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[4,3,1,"5-Progression B, RP4","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,3,6,"","Baseball","","",1,15,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,5,1,"3-RP6","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,5,2,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,6,1,"7-Progression B, RP4, Restructure Velocity Testing","8oz or 5oz","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[4,6,4,"","8oz or 5oz","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,6,5,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,6,6,"","Baseball","","",1,15,80,"Natural Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,6,7,"","Baseball","","",1,5,80,"Kneeling Neutral Throws*Tap & Go","","","","","","","",""],[4,6,8,"","Baseball","","",1,5,85,"Kneeling Natural Throws*Tap & Go","","","","","","","",""]],"REVO L2-3":[[1,1,1,"3- Progression A, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,1,3,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"4-Progression B, CPP1","12oz or 8oz","","16oz or 12oz",1,6,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz","","12oz or 8oz",1,6,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz","","12oz or 8oz",1,6,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","5oz or 3oz","","8oz or 5oz",1,6,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,25,75,"Catch Play (60 ft)","","","","","","","",""],[1,5,1,"5-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[1,5,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[1,5,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[1,5,4,"","8oz or 5oz","","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[1,5,5,"","5oz or 3oz","","",1,5,75,"","Hands Over Head Walking Windup","Step Back Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","45 Degree Turn and Burn Mound Throws"],[1,5,6,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Kikucki Mound Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Drop Step Mound Throws"],[1,5,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[2,1,1,"4-Progression A, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,1,3,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[2,3,1,"5-Progression B, CPP1","12oz or 8oz","","16oz or 12oz",1,8,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz","","12oz or 8oz",1,8,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz","","12oz or 8oz",1,8,70,"","Run and Round Throw","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,3,4,"","5oz or 3oz","","8oz or 5oz",1,8,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,30,75,"Catch Play (60 ft)","","","","","","","",""],[2,5,1,"6-Progression C, CPP1, Restructure Velocity Testing","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[2,5,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[2,5,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[2,5,4,"","8oz or 5oz","","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[2,5,5,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Elevated Uphill Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","45 Degree Turn and Burn Mound Throws"],[2,5,6,"","5oz or 3oz","","",1,5,80,"","Lateral Pendulum Mound Throw","Janitor 2 Tap Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Drop Step Mound Throws"],[2,5,7,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,5,8,"","Baseball","","",1,3,80,"Kneeling Neutral Throws*Tap & Go","","","","","","","",""],[2,5,9,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Tap & Go","","","","","","","",""],[3,1,1,"3-Progression A, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,1,3,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[3,3,1,"5-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz","","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[3,3,5,"","5oz or 3oz","","",1,5,75,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Drive Leg Hop Rewire Catch Throw","TapX3 Mound Throws"],[3,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Kikucki Mound Throws","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Walking Wind Up Flow","Throw and Stick"],[3,3,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[3,5,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,6,1,"6-Progression B, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,6,4,"","5oz or 3oz","","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[3,6,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,1,1,"3-Progression A, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Rocker Figure 8 Throw","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Crossover Pendulum Throws","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,1,3,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,1,"5-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Half Kneeling Lead Leg Block Throw","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Half Kneeling Lateral Lunge Throws","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run and Round Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz","","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Run-Stop-Spin Throw","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","5oz or 3oz","","",1,5,75,"","Lateral Figure 8 Mound Throw","Elevated Uphill Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","Horizontal Step Forward Mound Throws","Hover Flip Up Throw","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[4,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Pendulum Mound Throw","Janitor 2 Tap Throws","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Horizontal Step Backwards Mound Throw","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","Throw and Stick"],[4,3,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[4,5,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,6,1,"7-Progression B, CPP2, Restructure Velocity Testing","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[4,6,4,"","5oz or 3oz","","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,6,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,6,7,"","Baseball","","",1,3,80,"Kneeling Neutral Throws*Tap & Go","","","","","","","",""],[4,6,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Tap & Go","","","","","","","",""],[4,6,9,"","Baseball","","",1,4,90,"Standing Natural Throws*Tap & Go","","","","","","","",""]],"REIN L1":[[1,1,1,"4- Progression A, RP7","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,1,3,"","Baseball","","",1,15,65,"Seated Baseball Throw","","","","","","","",""],[1,1,4,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[1,1,5,"","Baseball","","",1,10,80,"Standing Pivot Baseball Throw","","","","","","","",""],[1,3,1,"5-Progression B, RP8","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[1,3,6,"","Baseball","","",1,15,80,"Neutral Standing Baseball Throw","","","","","","","",""],[1,5,1,"4-RP9","Baseball","","",1,15,70,"Kneeling Pivot Baseball Throw","","","","","","","",""],[1,5,2,"","Baseball","","",1,15,75,"Kneeling Natural Baseball Throw","","","","","","","",""],[1,5,3,"","Baseball","","",1,10,80,"Standing Neutral Baseball Throw","","","","","","","",""],[1,6,1,"6-Progression B, RP10","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[1,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[1,6,5,"","Baseball","","",1,15,80,"Standing Pivot Baseball Throw","","","","","","","",""],[1,6,6,"","Baseball","","",1,15,85,"Standing Neutral Baseball Throw","","","","","","","",""],[2,1,1,"4-Progression A, RP11","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[2,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","3 Step Dead Leg Throw"],[2,1,3,"","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throw","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[2,3,1,"6-Progression B, RP12","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[2,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[2,3,6,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throw","","","","","","","",""],[2,3,7,"","Baseball","","",1,10,80,"Pivot Standing Baseball Throw","","","","","","","",""],[2,5,1,"3-Progression A, RP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws *Pendelum","Dead Leg Lasso Throw"],[2,5,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Natural Throws*Flow","3 Step Dead Leg Throw"],[2,5,3,"","Baseball","","",1,15,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[2,5,4,"","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[2,6,1,"7-Progression B, RP13, Restructure Velocity Testing","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,6,5,"","Baseball","","",1,10,80,"Kneeling Natural Baseball Throw","","","","","","","",""],[2,6,6,"","Baseball","","",1,10,80,"Pivot Standing Baseball Throw","","","","","","","",""],[2,6,7,"","Baseball","","",1,15,80,"Neutral Standing Baseball Throw","","","","","","","",""],[2,6,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[2,6,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Velo","","","","","","","",""],[3,1,1,"4-Progression A, RP14","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Linear Roll In*Pendulum Throw","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,1,3,"","Baseball","","",1,15,65,"Seated Baseball Throw","","","","","","","",""],[3,1,4,"","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throw","","","","","","","",""],[3,1,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[3,2,1,"2-CPP2","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,2,2,"","Baseball","","",1,20,65,"Catch Play (75 ft)","","","","","","","",""],[3,3,1,"5-Progression B, RP8","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[3,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[3,3,6,"","Baseball","","",1,15,80,"Neutral Standing Baseball Throw","","","","","","","",""],[3,5,1,"4-RP9","Baseball","","",1,15,70,"Kneeling Pivot Baseball Throw","","","","","","","",""],[3,5,2,"","Baseball","","",1,15,75,"Kneeling Natural Baseball Throw","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,80,"Standing Neutral Baseball Throw","","","","","","","",""],[3,6,1,"6-Progression B, RP10","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[3,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,6,5,"","Baseball","","",1,15,80,"Standing Pivot Baseball Throw","","","","","","","",""],[3,6,6,"","Baseball","","",1,15,85,"Standing Neutral Baseball Throw","","","","","","","",""],[4,1,1,"3-Progression A, RP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,1,3,"","Baseball","","",1,20,65,"Seated Baseball Throw","","","","","","","",""],[4,3,1,"7-Progression B, RP12","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","3 Step Dead Leg Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Drop Step Throws"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[4,3,5,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throw","","","","","","","",""],[4,3,6,"","Baseball","","",1,10,80,"Natural Kneeling Baseball Throw","","","","","","","",""],[4,3,7,"","Baseball","","",1,10,80,"Pivot Standing Baseball Throw","","","","","","","",""],[4,5,1,"3-RP14","Baseball","","",1,15,65,"Seated Baseball Throws (For Distance)","","","","","","","",""],[4,5,2,"","Baseball","","",1,15,70,"Pivot Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,75,"Neutral Kneeling Baseball Throws (For Distance)","","","","","","","",""],[4,6,1,"7-Progression B, RP13, Restructure Velocity Testing","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Stride Leg Linear Hop Baseball Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[4,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[4,6,5,"","Baseball","","",1,10,80,"Kneeling Natural Baseball Throw","","","","","","","",""],[4,6,6,"","Baseball","","",1,10,80,"Pivot Standing Baseball Throw","","","","","","","",""],[4,6,7,"","Baseball","","",1,15,80,"Neutral Standing Baseball Throw","","","","","","","",""],[4,6,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Tap & Go","","","","","","","",""],[4,6,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Tap & Go","","","","","","","",""]],"REIN L2-3":[[1,1,1,"4-Progression B, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,1,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,1,4,"","5oz or 3oz","","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,1,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"5-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz","","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","5oz or 3oz","","",1,5,80,"","Hands Over Head Walking Windup","Step Back Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[1,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Kikuchi Mound Throw","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[1,3,7,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,5,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[1,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,5,3,"","Baseball","","",1,15,70,"Catch Play (90 ft)","","","","","","","",""],[1,6,1,"6-Progression B, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[1,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[1,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[1,6,4,"","5oz or 3oz","","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[1,6,5,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[1,6,6,"","Baseball","","",1,15,85,"Catch Play (75 ft)","","","","","","","",""],[2,1,1,"4-Progression A, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[2,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","3 Step Dead Leg Throw"],[2,1,3,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[2,3,1,"6-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[2,3,4,"","8oz or 5oz","","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[2,3,5,"","5oz or 3oz","","",1,5,75,"","Lateral Figure 8 Mound Throw","Elevated Uphill Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Drive Leg Hop Rewire Catch Throw","45 Degree Turn and Burn Mound Throws"],[2,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Pendulum Mound Throw","Janitor 2 Tap Throws","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Walking Windup Throw","Drop Step Mound Throws"],[2,3,7,"","Baseball","","",1,20,80,"Catch Play (60 ft)","","","","","","","",""],[2,5,1,"3-Progression A, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Half Kneeling Lead Leg Block Throw","Dead Leg Lasso Throw"],[2,5,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Half Kneeling Lateral Lunge Throws","3 Step Dead Leg Throw"],[2,5,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[2,5,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,6,1,"7-Progression D, CPP1, Restructure Velocity Testing","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,6,4,"","8oz or 5oz","","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,6,5,"","5oz or 3oz","","",1,5,80,"","Hands Over Head Walking Windup","Step Back Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","45 Degree Turn and Burn Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[2,6,6,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Kikuchi Mound Throw","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Rock Back Wind Up Mound Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[2,6,7,"","Baseball","","",1,20,80,"","Lateral Figure 8 Mound Throw","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play","Catch Play (60 ft)","Catch Play (60 ft)"],[2,6,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[2,6,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Velo","","","","","","","",""],[2,6,10,"","Baseball","","",1,4,100,"Flat Ground Throws*Velo","","","","","","","",""],[3,1,1,"4-Progression A, CPP3","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Linear Roll In*Pendulum Throw","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,1,3,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[3,1,4,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[3,1,5,"","Baseball","","",1,10,75,"Catch Play (90 ft)","","","","","","","",""],[3,2,1,"2-CPP2","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,2,2,"","Baseball","","",1,20,65,"Catch Play (75 ft)","","","","","","","",""],[3,3,1,"5-Progression C, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz","","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[3,3,5,"","5oz or 3oz","","",1,5,80,"","Hands Over Head Walking Windup","Step Back Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Coil and Flip Up Catch Throws","Drive Leg Hop Rewire Catch Throw","TapX3 Mound Throws"],[3,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Kikucki Mound Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Hip-Shoulder Tap Throw","Walking Windup Throw","Throw and Stick"],[3,3,7,"","Baseball","","",1,15,75,"","Lateral Figure 8 Mound Throw","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)","Catch Play (60 ft)"],[3,5,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,6,1,"6-Progression B, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Reactive Rebounder","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[3,6,4,"","5oz or 3oz","","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[3,6,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,1,1,"3-Progression A, CPP1","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,1,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,1,3,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,1,"6-Progression C, CPP2","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[4,3,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","3 Step Dead Leg Throw"],[4,3,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Drop Step Throws"],[4,3,4,"","8oz or 5oz","","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[4,3,5,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Elevated Uphill Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Open Stance Linear Mound Throw","45 Degree Turn and Burn Mound Throws"],[4,3,6,"","5oz or 3oz","","",1,5,80,"","Lateral Pendulum Mound Throw","Janitor 2 Tap Throws","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","Drop Step Mound Throws"],[4,3,7,"","Baseball","","",1,10,80,"Catch Play (60 ft)","","","","","","","",""],[4,3,8,"","Baseball","","",1,10,85,"Catch Play (75 ft)","","","","","","","",""],[4,5,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,6,1,"7-Progression D, CPP1, Restructure Velocity Testing","12oz or 8oz","","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[4,6,2,"","8oz or 5oz","","12oz or 8oz",1,10,65,"","Split Stance Blocking Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lateral Lunge Throws"],[4,6,3,"","8oz or 5oz","","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikucki Throws","Stride Leg Linear Hop Baseball Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Run and Round Throw"],[4,6,4,"","8oz or 5oz","","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Run-Stop-Spin Throw"],[4,6,5,"","5oz or 3oz","","",1,5,80,"","Lateral Figure 8 Mound Throw","Elevated Uphill Mound Throws","Shoulder Dip Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Drive Leg Hop Mound Throws","Horizontal Step Forward Mound Throws"],[4,6,6,"","5oz or 3oz","","",1,5,80,"","Lateral Pendulum Mound Throw","Janitor 2 Tap Throws","Drive Leg Hop Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Walking Windup Throw","Horizontal Step Backwards Mound Throw"],[4,6,7,"","Baseball","","",1,20,80,"","Lateral Figure 8 Mound Throw","Catch Play","Catch Play (60 ft)","Catch Play","Catch Play (60 ft)","Catch Play","Catch Play","Catch Play"],[4,6,8,"","Baseball","","",1,3,85,"","Lateral Figure 8 Mound Throw","Kneeling Natural Throws*Tap & Go","Kneeling Natural Throws*Velo","Kneeling Natural Throws*Tap & Go","Kneeling Natural Throws*Velo","Kneeling Natural Throws*Tap & Go","Kneeling Natural Throws*Tap & Go","Kneeling Natural Throws*Tap & Go"],[4,6,9,"","Baseball","","",1,3,90,"","Kneeling Neutral Tap & Go","Standing Natural Throws*Tap & Go","Standing Natural Throws*Velo","Standing Natural Throws*Tap & Go","Standing Natural Throws*Velo","Standing Natural Throws*Tap & Go","Standing Natural Throws*Tap & Go","Standing Natural Throws*Tap & Go"],[4,6,10,"","Baseball","","",1,4,100,"Flat Ground Throws*Velo","","","","","","","",""]],"ENVO":[[1,1,1,"4-Flow, CPP4","Baseball","","",1,5,60,"Roll In Baseball Throw","","","","","","","",""],[1,1,2,"","Baseball","","",1,5,65,"Walking Backward Baseball Throw","","","","","","","",""],[1,1,3,"","Baseball","","",1,10,70,"Catch Play (60 ft)","","","","","","","",""],[1,1,4,"","Baseball","","",1,10,70,"Catch Play (75 ft)","","","","","","","",""],[1,1,5,"","Baseball","","",1,10,75,"Catch Play (90 ft)","","","","","","","",""],[1,1,6,"","Baseball","","",1,5,75,"Catch Play (120 ft)","","","","","","","",""],[1,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Thows*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[1,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[1,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"6-Progression C, LTP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,55,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,60,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,75,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Drop Back Flow","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[1,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","TapX3 Mound Throws","Rear Facing Walking Wind Up Mound Throws","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","Throw and Stick"],[1,3,7,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,3,8,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[1,5,1,"3-Flow, CPP1","Baseball","","",1,5,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[1,5,2,"","Baseball","","",1,5,60,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[1,5,3,"","Baseball","","",1,5,65,"Rotational Horizontal Step Back Baseball Throw","","","","","","","",""],[1,5,4,"","Baseball","","",1,5,65,"Rotational Horizontal Step Forward Baseball Throw","","","","","","","",""],[1,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[1,6,1,"7-Progression B, CPP2, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Run and Round Throw","Linear Roll In*Pendulum","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[1,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Run-Stop-Spin Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[1,6,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[1,6,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,6,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[2,1,1,"4-Flow, CPP3","Baseball","","",1,5,60,"Forward Shuffle Flow Baseball Throw","","","","","","","",""],[2,1,2,"","Baseball","","",1,5,60,"Backward Shuffle Flow Baseball Throw","","","","","","","",""],[2,1,3,"","Baseball","","",1,5,65,"Forward Carioca Shuffle Baseball Throw","","","","","","","",""],[2,1,4,"","Baseball","","",1,5,65,"Backward Carioca Shuffle Baseball Throw","","","","","","","",""],[2,1,5,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[2,1,6,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[2,1,7,"","Baseball","","",1,10,75,"Catch Play (90 ft)","","","","","","","",""],[2,2,1,"3-CPP3","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[2,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,2,3,"","Baseball","","",1,15,70,"Catch Play (90 ft)","","","","","","","",""],[2,3,1,"7-Progression D, CPP1, Restructure Velocity Testing","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[2,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","Throw and Stick"],[2,3,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[2,3,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[2,3,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Velo","","","","","","","",""],[2,3,10,"","Baseball","","",1,4,100,"Flat Ground Throws*Velo","","","","","","","",""],[2,5,1,"3-Flow, CPP2","Baseball","","",1,5,60,"Rear Facing Jump Turn & Baseball Throw","","","","","","","",""],[2,5,2,"","Baseball","","",1,5,60,"Rear Facing Walking Wind Up Baseball Throw","","","","","","","",""],[2,5,3,"","Baseball","","",1,5,65,"Fake Turn & Baseball Throw","","","","","","","",""],[2,5,4,"","Baseball","","",1,5,65,"Run Away Stop & Baseball Throw","","","","","","","",""],[2,5,5,"","Baseball","","",1,10,65,"Catch Play (60 ft)","","","","","","","",""],[2,5,6,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[2,6,1,"8-Progression B, CPP2, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Roll In Baseball Throw","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Kneeling Neutral Throws*Tap & Go"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Tracer Pick Up Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Leg Lift Roll In","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Reactive Rebounders"],[2,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Run-Stop-Spin Throw"],[2,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[2,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[2,6,8,"","Baseball","","",1,10,90,"Long Toss Extension","","","","","","","",""],[3,1,1,"3-Flow, CPP2","Baseball","","",1,5,60,"Drive Leg Linear Hop Baseball Throw","","","","","","","",""],[3,1,2,"","Baseball","","",1,5,60,"Drive Leg Multi Linear Hop Baseball Throw","","","","","","","",""],[3,1,3,"","Baseball","","",1,5,65,"Stride Leg Linear Hop Baseball Throw","","","","","","","",""],[3,1,4,"","Baseball","","",1,5,65,"Stride Leg Linear Multi Hop Baseball Throw","","","","","","","",""],[3,1,5,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[3,1,6,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[3,2,1,"4-Flow, CPP2","Baseball","","",1,5,65,"Drive Leg Hop Baseball Throw","","","","","","","",""],[3,2,2,"","Baseball","","",1,5,65,"Drive Leg Multi Hop Baseball Throw","","","","","","","",""],[3,2,3,"","Baseball","","",1,5,70,"Rotational Step Back Baseball Throw","","","","","","","",""],[3,2,4,"","Baseball","","",1,5,70,"Rotational Multi Hop Baseball Throw","","","","","","","",""],[3,2,5,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[3,2,6,"","Baseball","","",1,20,70,"Catch Play (75 ft)","","","","","","","",""],[3,3,1,"6-Flow, CPP6","Baseball","","",1,10,60,"Quick Hands","","","","","","","",""],[3,3,2,"","Baseball","","",1,10,60,"Reactive Rebounders","","","","","","","",""],[3,3,3,"","Baseball","","",1,10,65,"Shuffle Reactionary Throws","","","","","","","",""],[3,3,4,"","Baseball","","",1,10,65,"Turn and Burn Reactionary Throws","","","","","","","",""],[3,3,5,"","Baseball","","",1,10,70,"Catch Play (60 ft)","","","","","","","",""],[3,3,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[3,3,7,"","Baseball","","",1,10,80,"Catch Play Alternating FB&CH (90 feet)","","","","","","","",""],[3,3,8,"","Baseball","","",1,10,80,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[3,5,1,"4-Flow, CPP2","Baseball","","",1,5,60,"Horizontal Step Backward Baseball Catch Throw","","","","","","","",""],[3,5,2,"","Baseball","","",1,5,65,"Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[3,5,3,"","Baseball","","",1,5,70,"Rotational Horizontal Step Back Baseball Catch Throw","","","","","","","",""],[3,5,4,"","Baseball","","",1,5,75,"Rotational Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[3,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[3,5,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[3,6,1,"8-Progression B, CPP3, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Kneeling Neutral Throws*Tap & Go","Roll In Baseball Throw","Kneeling Neutral Throws*Tap & Go","Kneeling Neutral Throws*Tap & Go","Kneeling Neutral Throws*Tap & Go"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Tracer Pick Up Throw","Walking Backward Baseball Throw","Tracer Pick Up Throw","Tracer Pick Up Throw","Tracer Pick Up Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Reactive Rebounders","Leg Lift Roll In","Reactive Rebounders","Reactive Rebounders","Reactive Rebounders"],[3,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,80,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Bauer Step Back Throws","Run-Stop-Spin Throw","Run-Stop-Spin Throw","Run-Stop-Spin Throw"],[3,6,5,"","Baseball","","",1,10,70,"Catch Play (60 ft)","","","","","","","",""],[3,6,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[3,6,7,"","Baseball","","",1,10,80,"Catch Play (90 ft)","","","","","","","",""],[3,6,8,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[3,6,9,"","Baseball","","",1,10,90,"Long Toss Extension","","","","","","","",""],[4,1,1,"3-Flow, CPP1","Baseball","","",1,5,55,"Horizontal Walk Backward Cross Body Baseball Throw","","","","","","","",""],[4,1,2,"","Baseball","","",1,5,55,"Horizontal Walk Forward Cross Body Baseball Throw","","","","","","","",""],[4,1,3,"","Baseball","","",1,5,60,"Horizontal Back Pedal Cross Body Baseball Throw","","","","","","","",""],[4,1,4,"","Baseball","","",1,5,60,"Horizontal Run Forward Cross Body Baseball Throw","","","","","","","",""],[4,1,5,"","Baseball","","",1,25,65,"Catch Play (60 ft)","","","","","","","",""],[4,2,1,"2-Progression A","Football","","",1,20,55,"T/K Football Spiral Flow Throws","","","","","","","",""],[4,2,2,"","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"Kneeling Neutral Throws*Tap & Go","","","","","","","",""],[4,2,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"Tracer Pick Up Throw","","","","","","","",""],[4,3,1,"7-Progression D, CPP1, Restructure Velocity Testing","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Run and Round Throw","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[4,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Figure 8 Mound Throws","Elevated Uphill Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","45 Degree Turn and Burn Mound Throws","Coil and Flip Up Catch Throws","Drive Leg Hop Mound Throws","TapX3 Mound Throws"],[4,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,90,"","Lateral Pendulum Mound Throws","Janitor 2 Tap Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Rock Back Wind Up Mound Throws","Hip-Shoulder Tap Throw","Walking Wind Up Flow","Throw and Stick"],[4,3,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[4,3,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[4,3,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Velo","","","","","","","",""],[4,3,10,"","Baseball","","",1,4,100,"Flat Ground Throws*Velo","","","","","","","",""],[4,5,1,"3-Progression A, CPP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Anchored Kneeling Throws*Flow"],[4,5,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Roll In Rewire Catch Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","Roll In Rewire Catch Throw"],[4,5,3,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[4,5,4,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[4,6,1,"7-Progression C, CPP1, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[4,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Lateral Figure 8 Mound Throws","Elevated Uphill Mound Throws","Elevated Slope Mound Throws","Horizontal Drop Back Flow","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[4,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Lateral Pendulum Mound Throws","Janitor 2 Tap Throws","TapX3 Mound Throws","Rear Facing Walking Wind Up Mound Throws","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","Throw and Stick"],[4,6,7,"","Baseball","","",1,15,80,"Catch Play (60 ft)","","","","","","","",""],[4,6,8,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""]],"ENIN":[[1,1,1,"4-Flow, CPP2","Baseball","","",1,5,60,"Roll In Baseball Throw","","","","","","","",""],[1,1,2,"","Baseball","","",1,5,60,"Walking Backward Baseball Throw","","","","","","","",""],[1,1,3,"","Baseball","","",1,5,65,"Backpedal Baseball Throw","","","","","","","",""],[1,1,4,"","Baseball","","",1,5,65,"High Step Forward Baseball Throw","","","","","","","",""],[1,1,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,1,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[1,2,1,"3-Flow, CPP1","Baseball","","",1,5,60,"Horizontal Step Backward Baseball Catch Throw","","","","","","","",""],[1,2,2,"","Baseball","","",1,5,60,"Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[1,2,3,"","Baseball","","",1,5,65,"Rotational Horizontal Step Back Baseball Catch Throw","","","","","","","",""],[1,2,4,"","Baseball","","",1,5,65,"Rotational Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[1,2,5,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"7-Progression B, CPP2, LTP3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[1,3,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[1,3,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[1,3,8,"","Baseball","","",1,5,90,"Long Toss Extension","","","","","","","",""],[1,5,1,"3-Flow, CPP2","Baseball","","",1,5,60,"Drive Leg Hop Baseball Throw","","","","","","","",""],[1,5,2,"","Baseball","","",1,5,60,"Drive Leg Multi Hop Baseball Throw","","","","","","","",""],[1,5,3,"","Baseball","","",1,5,65,"Rotational Step Back Baseball Throw","","","","","","","",""],[1,5,4,"","Baseball","","",1,5,65,"Rotational Multi Hop Baseball Throw","","","","","","","",""],[1,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[1,5,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[1,6,1,"8-Progression C, LTP4","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Lateral Figure 8 Mound Throws","Elevated Uphill Mound Throws","Shoulder Dip Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[1,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Pendulum Mound Throws","Janitor 2 Tap Throws","Drive Leg Hop Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[1,6,7,"","Baseball","","",1,15,80,"Catch Play","","","","","","","",""],[1,6,8,"","Baseball","","",1,10,90,"Long Toss Extension","","","","","","","",""],[1,6,9,"","Baseball","","",1,5,95,"Long Toss Compressions","","","","","","","",""],[2,1,1,"3-CPP3","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[2,1,2,"","Baseball","","",1,15,70,"Catch Play (75 ft)","","","","","","","",""],[2,1,3,"","Baseball","","",1,10,75,"Catch Play (90 ft)","","","","","","","",""],[2,2,1,"4-Flow, CPP2","Baseball","","",1,5,60,"Tracer Throw","","","","","","","",""],[2,2,2,"","Baseball","","",1,5,60,"Tracer Pick Up Throw","","","","","","","",""],[2,2,3,"","Baseball","","",1,5,65,"Open Stance Linear Throw","","","","","","","",""],[2,2,4,"","Baseball","","",1,5,65,"Open Stance Linear Hand-Off Throw","","","","","","","",""],[2,2,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[2,2,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[2,3,1,"8-Progression B, CPP2, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,80,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[2,3,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[2,5,1,"4-Flow, CPP2","Baseball","","",1,5,60,"Roll In Baseball Throw","","","","","","","",""],[2,5,2,"","Baseball","","",1,5,60,"Walking Backward Baseball Throw","","","","","","","",""],[2,5,3,"","Baseball","","",1,5,65,"Backpedal Baseball Throw","","","","","","","",""],[2,5,4,"","Baseball","","",1,5,65,"High Step Forward Baseball Throw","","","","","","","",""],[2,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[2,5,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[2,6,1,"8-Progression C, CPP1, LTP4","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Dead Leg Lasso Throw"],[2,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Rocker Figure 8 Throw"],[2,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Hover Flip Up Throw","Drive Leg Hop Mound Throws","TapX3 Mound Throws"],[2,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","TapX3 Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Lateral Pendulum Mound Throws","Walking Wind Up Flow","Throw and Stick"],[2,6,7,"","Baseball","","",1,15,80,"Catch Play","","","","","","","",""],[2,6,8,"","Baseball","","",1,10,90,"Long Toss Extension","","","","","","","",""],[2,6,9,"","Baseball","","",1,5,100,"Long Toss Compressions","","","","","","","",""],[3,1,1,"3-Football Throws, CPP1","Football","","",1,20,60,"T/K Football Spiral Flow Throws","","","","","","","",""],[3,1,2,"","Baseball","","",1,20,65,"Catch Play (60 ft)","","","","","","","",""],[3,2,1,"4-Flow, CPP2","Baseball","","",1,5,60,"Horizontal Step Backward Baseball Catch Throw","","","","","","","",""],[3,2,2,"","Baseball","","",1,5,60,"Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[3,2,3,"","Baseball","","",1,5,65,"Rotational Horizontal Step Back Baseball Catch Throw","","","","","","","",""],[3,2,4,"","Baseball","","",1,5,65,"Rotational Horizontal Step Forward Baseball Catch Throw","","","","","","","",""],[3,2,5,"","Baseball","","",1,15,65,"Catch Play (60 ft)","","","","","","","",""],[3,2,6,"","Baseball","","",1,20,70,"Catch Play (75 ft)","","","","","","","",""],[3,3,1,"8-Progession C, CPP6","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Anchored Kneeling Throws*Flow","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Dead Leg Lasso Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","High Step Forward Baseball Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","3 Step Dead Leg Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Run and Round Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Drop Step Throws"],[3,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,75,"","Jeter Baseball Throw","Jeter Baseball Throw","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Hop Drop Step Throws"],[3,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Lateral Figure 8 Mound Throws","Lateral Figure 8 Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","45 Degree Turn and Burn Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","45 Degree Turn and Burn Mound Throws"],[3,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Pendulum Mound Throws","Lateral Pendulum Mound Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Rock Back Wind Up Mound Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Drop Step Mound Throws"],[3,3,7,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[3,3,8,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[3,3,9,"","Baseball","","",1,10,85,"Catch Play Alternating FB&CH (90 feet)","","","","","","","",""],[3,3,10,"","Baseball","","",1,10,85,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[3,5,1,"4-Progression A, CPP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Half Kneeling Lead Leg Block Throw"],[3,5,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Roll In Rewire Catch Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","Half Kneeling Lunge to Throw"],[3,5,3,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[3,5,4,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[3,6,1,"7-Progression D, CPP1, Restructure Velocity Testing","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Linear Roll In*Pendulum","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[3,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,80,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[3,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[3,6,7,"","Baseball","","",1,20,80,"Catch Play","","","","","","","",""],[3,6,8,"","Baseball","","",1,3,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[3,6,9,"","Baseball","","",1,3,90,"Standing Natural Throws*Velo","","","","","","","",""],[3,6,10,"","Baseball","","",1,4,100,"Flat Ground Throws*Velo","","","","","","","",""],[4,1,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Roll In Baseball Throw","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,1,3,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[4,2,1,"4-CPP6","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,2,3,"","Baseball","","",1,10,70,"Catch Play Alternating FB&CH (90 feet)","","","","","","","",""],[4,2,4,"","Baseball","","",1,10,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[4,3,1,"7-Progression B, CPP2, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Reactive Rebounders","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Walking Backward Baseball Throw","Drop Step Throws"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Run-Stop-Spin Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,3,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[4,3,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[4,5,1,"4-Progression A, CPP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,5,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Roll In Rewire Catch Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,5,3,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[4,5,4,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[4,6,1,"8-Progression B, CPP1, LTP2, WATT","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lasso Drop Throws","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[4,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,6,5,"","Baseball","","",1,15,80,"Catch Play","","","","","","","",""],[4,6,6,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[4,6,7,"","Baseball","","",1,3,90,"Long Toss Compressions","","","","","","","",""],[4,6,8,"","Baseball","","",1,3,95,"Angled Turn and Throw","","","","","","","",""],[4,6,9,"","Baseball","","",1,2,100,"Turn and Burn Throw","","","","","","","",""],[4,6,10,"","Baseball","","",1,2,100,"Rhythm Pull Down","","","","","","","",""]],"WATT":[[1,1,1,"5-Progression B, CPP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,1,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,1,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,1,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[1,1,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,2,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[1,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,2,3,"","Baseball","","",1,15,70,"Catch Play (90 ft)","","","","","","","",""],[1,3,1,"6-Progression E","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[1,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Run-Stop-Spin Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[1,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,85,"","Hands Over Head Walking Windup","Elevated Uphill Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Hover Flip Up Throw","Drive Leg Hop Mound Throws","45 Degree Turn and Burn Mound Throws"],[1,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,90,"","Lateral Figure 8 Mound Throws","Janitor 2 Tap Throws","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Rock Back Wind Up Mound Throws","Lateral Pendulum Mound Throws","Walking Wind Up Flow","Drop Step Mound Throws"],[1,3,7,"","5oz","","",1,10,95,"Mound Throws*Plyo Velo","","","","","","","",""],[1,5,1,"3-Flow, CPP2","Baseball","","",1,5,60,"Roll In Baseball Throw","","","","","","","",""],[1,5,2,"","Baseball","","",1,5,60,"Walking Backward Baseball Throw","","","","","","","",""],[1,5,3,"","Baseball","","",1,5,65,"Backpedal Baseball Throw","","","","","","","",""],[1,5,4,"","Baseball","","",1,5,65,"High Step Forward Baseball Throw","","","","","","","",""],[1,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[1,5,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[1,5,7,"","Baseball","","",1,10,80,"Catch Play (90 ft)","","","","","","","",""],[1,6,1,"8-Progression B, LTP2, WATT","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[1,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,6,5,"","Baseball","","",1,15,80,"Catch Play","","","","","","","",""],[1,6,6,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[1,6,7,"","Baseball","","",1,3,85,"Long Toss Compressions","","","","","","","",""],[1,6,8,"","Baseball","","",1,3,90,"Angled Turn and Throw","","","","","","","",""],[1,6,9,"","Baseball","","",1,3,95,"Turn and Burn Throw","","","","","","","",""],[1,6,10,"","Baseball","","",1,3,95,"Tornado Throw","","","","","","","",""],[1,6,11,"","Baseball","","",1,3,100,"Rhythm Pulldown","","","","","","","",""],[2,2,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[2,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,2,3,"","Baseball","","",1,15,70,"Catch Play (90 ft)","","","","","","","",""],[2,3,1,"7-Progression B, CPP, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[2,3,5,"","Baseball","","",1,20,80,"Catch Play","","","","","","","",""],[2,3,6,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[2,5,1,"4-Flow, CPP3","Baseball","","",1,5,60,"Forward Shuffle Flow Baseball Throw","","","","","","","",""],[2,5,2,"","Baseball","","",1,5,60,"Backward Shuffle Flow Baseball Throw","","","","","","","",""],[2,5,3,"","Baseball","","",1,5,65,"Forward Carioca Shuffle Baseball Throw","","","","","","","",""],[2,5,4,"","Baseball","","",1,5,65,"Backward Carioca Shuffle Throw","","","","","","","",""],[2,5,5,"","Baseball","","",1,15,70,"Catch Play (60 ft)","","","","","","","",""],[2,5,6,"","Baseball","","",1,10,75,"Catch Play (75 ft)","","","","","","","",""],[2,5,7,"","Baseball","","",1,10,80,"Catch Play (90 ft)","","","","","","","",""],[2,6,1,"7-Progression E","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[2,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,85,"","Hands Over Head Walking Windup","Step Back Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[2,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,90,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[2,6,7,"","5oz","","",1,5,95,"Mound Throws*Plyo Velo","","","","","","","",""],[2,6,8,"","5oz","","",1,5,100,"Mound Throws*Plyo Velo","","","","","","","",""],[3,1,1,"5-Progression B, CPP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,1,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,1,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,1,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,1,5,"","Baseball","","",1,10,70,"Catch Play (60 ft)","","","","","","","",""],[3,1,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[3,2,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,2,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,3,1,"8-Progression D","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Standing Neutral Throws*Flow","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Linear Roll In*Pendulum Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Bauer Step Back Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,3,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,85,"","Hands Over Head Walking Windup","Step Back Mound Throws","Elevated Slope Mound Throws","Horizontal Step Forward Mound Throws","Darvish Mound Throws","Coil and Flip Up Catch Throws","Open Stance Linear Mound Throw","TapX3 Mound Throws"],[3,3,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,5,90,"","Lateral Figure 8 Mound Throws","Kikuchi Mound Throw","TapX3 Mound Throws","Horizontal Step Backwards Mound Throw","Angled Janitor Throw","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[3,3,7,"","Baseball","","",1,15,85,"Catch Play","","","","","","","",""],[3,3,8,"","Baseball","","",1,5,85,"Kneeling Natural Throws*Velo","","","","","","","",""],[3,3,9,"","Baseball","","",1,5,90,"Standing Natural Throws*Velo","","","","","","","",""],[3,3,10,"","Baseball","","",1,5,95,"Flat Ground Throws*Velo","","","","","","","",""],[3,5,1,"3-Flow, CPP1","Baseball","","",1,5,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[3,5,2,"","Baseball","","",1,5,60,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[3,5,3,"","Baseball","","",1,5,65,"Rotational Hop Back Rewire Catch","","","","","","","",""],[3,5,4,"","Baseball","","",1,5,65,"Rotational Horizontal Step Forward Baseball Throw","","","","","","","",""],[3,5,5,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[3,6,1,"8-Progression B, LTP2, WATT","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Rocker Figure 8 Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Run Away Stop & Baseball Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Rhythm Relay Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,6,5,"","Baseball","","",1,15,80,"Catch Play","","","","","","","",""],[3,6,6,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[3,6,7,"","Baseball","","",1,4,90,"Long Toss Compressions","","","","","","","",""],[3,6,8,"","Baseball","","",1,4,95,"Angled Turn and Throw","","","","","","","",""],[3,6,9,"","Baseball","","",1,4,100,"Turn and Burn Throw","","","","","","","",""],[3,6,10,"","Baseball","","",1,4,100,"Tornado Throw","","","","","","","",""],[3,6,11,"","Baseball","","",1,4,100,"Rhythm Pulldown","","","","","","","",""],[4,2,1,"3-CPP3","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,2,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,2,3,"","Baseball","","",1,15,70,"Catch Play (90 ft)","","","","","","","",""],[4,3,1,"7-Progression B, CPP2, LTP2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Standing Natural Throws*Pendulum","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Anchored Kneeling Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Rotational Rocker Throw","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","High Step Forward Baseball Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Run and Round Throw","Drive Leg Hop Baseball Throw","Lateral Pendulum Throw","Run and Round Throw","Run and Round Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","8oz or 5oz",1,10,75,"","Jeter Baseball Throw","Swing Leg Rotational Step Back","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Jeter Baseball Throw","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","Baseball","","",1,10,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,6,"","Baseball","","",1,15,75,"Catch Play (75 ft)","","","","","","","",""],[4,3,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[4,5,1,"3-Flow, CPP1","Baseball","","",1,5,60,"Rear Facing Jump Turn & Baseball Throw","","","","","","","",""],[4,5,2,"","Baseball","","",1,5,60,"Rear Facing Walking Wind Up Baseball Throw","","","","","","","",""],[4,5,3,"","Baseball","","",1,5,65,"Fake Turn & Baseball Throw","","","","","","","",""],[4,5,4,"","Baseball","","",1,5,65,"Run Away Stop & Baseball Throw","","","","","","","",""],[4,5,5,"","Baseball","","",1,20,70,"Catch Play (60 ft)","","","","","","","",""],[4,6,1,"8-Progression E","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,65,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Kneeling Neutral Throws*Tap & Go","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,70,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Walking Backward Baseball Throw","Rotational Rocker Throw","Tracer Pick Up Throw","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,75,"","Reactive Rebounders","Kikuchi Throws","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Reactive Rebounders","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[4,6,4,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,80,"","Run-Stop-Spin Throw","Walking Forward Kikuchi Throws","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Run-Stop-Spin Throw","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,6,5,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,85,"","Hands Over Head Walking Windup","Elevated Uphill Mound Throws","Shoulder Dip Throws","Horizontal Drop Back Flow","Hands Over Head Walking Windup","Hover Flip Up Throw","Drive Leg Hop Mound Throws","45 Degree Turn and Burn Mound Throws"],[4,6,6,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,90,"","Lateral Figure 8 Mound Throws","Janitor 2 Tap Throws","Drive Leg Hop Mound Throws","Rear Facing Walking Wind Up Mound Throws","Lateral Figure 8 Mound Throws","Lateral Pendulum Mound Throws","Walking Wind Up Flow","Drop Step Mound Throws"],[4,6,7,"","5oz","","",1,5,95,"Mound Throws*Plyo Velo","","","","","","","",""],[4,6,8,"","5oz","","",1,5,100,"Mound Throws*Plyo Velo","","","","","","","",""],[4,6,9,"","5oz","","",1,5,100,"Mound Throws*Plyo Velo","","","","","","","",""]],"INT":[[1,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Roll In Baseball Throw","","","","","","","",""],[1,1,2,"","Baseball","","",1,10,65,"Walking Backward Baseball Throw","","","","","","","",""],[1,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[1,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"7-Progression B, CPP2, MB1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,3,7,"","Baseball","","",1,5,85,"","Lateral Pendulum Mound Throws","Step Back Mound Throws","Rear Facing Walking Wind Up Mound Throws","Horizontal Step Backwards Mound Throw","Turn and Burn Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","TapX3 Mound Throws"],[1,3,8,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Drive Leg Hop Mound Throws","Hook 'Em Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Bounce Mound Throws","Open Stance Linear Mound Throw","Elevated Slope Mound Throws"],[1,3,9,"","Baseball","","",1,5,85,"","Kikuchi Mound Throw","Kikuchi Mound Throw","Shoulder Dip Throws","Seoul Mound Throws","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Seoul Mound Throws","Throw and Stick"],[1,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[1,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[1,6,1,"8-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[1,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[1,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[1,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[1,6,8,"","Baseball","","",1,15,85,"Accuracy Bullpen","","","","","","","",""],[2,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Drive Leg Hop Baseball Throw","","","","","","","",""],[2,1,2,"","Baseball","","",1,10,65,"Rotational Step Back Baseball Throw","","","","","","","",""],[2,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[2,3,1,"8-Progression B, CPP2, MB2","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[2,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[2,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Drive Leg Hop Mound Throws","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","45 Degree Turn and Burn Mound Throws","Bounce Mound Throws","Glove Side Hand Off Mound Throws","TapX3 Mound Throws"],[2,3,8,"","Baseball","","",1,5,85,"","Kikuchi Mound Throw","Kikuchi Mound Throw","Shoulder Dip Throws","Horizontal Step Forward Mound Throws","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Open Stance Linear Mound Throw","Throw and Stick"],[2,3,9,"","Baseball","","",1,10,90,"Short Slope Throws","","","","","","","",""],[2,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[2,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[2,6,1,"9-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[2,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[2,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[2,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[2,6,8,"","Baseball","","",1,20,90,"Accuracy Bullpen","","","","","","","",""],[3,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[3,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[3,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[3,3,1,"8-Progression B, CPP2, MB3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[3,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[3,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Darvish Mound Throws","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[3,3,8,"","Baseball","","",1,20,90,"Build Up Bullpen","","","","","","","",""],[3,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[3,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[3,6,1,"10-Progression B, LTP1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[3,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[3,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[3,6,8,"","Baseball","","",1,25,95,"Accuracy Bullpen","","","","","","","",""],[4,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[4,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[4,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,1,"7-Progression B, CPP2, MB1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,3,7,"","Baseball","","",1,5,85,"","Lateral Pendulum Mound Throws","Step Back Mound Throws","Rear Facing Walking Wind Up Mound Throws","Horizontal Step Backwards Mound Throw","Turn and Burn Mound Throws","Lateral Pendulum Mound Throws","Glove Side Hand Off Mound Throws","TapX3 Mound Throws"],[4,3,8,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Drive Leg Hop Mound Throws","Hook 'Em Throws","Horizontal Step Forward Mound Throws","45 Degree Turn and Burn Mound Throws","Bounce Mound Throws","Open Stance Linear Mound Throw","Elevated Slope Mound Throws"],[4,3,9,"","Baseball","","",1,5,85,"","Kikuchi Mound Throw","Kikuchi Mound Throw","Shoulder Dip Throws","Seoul Mound Throws","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Seoul Mound Throws","Throw and Stick"],[4,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[4,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[4,6,1,"8-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[4,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[4,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[4,6,8,"","Baseball","","",1,20,85,"Accuracy Bullpen","","","","","","","",""]],"REF":[[1,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Roll In Baseball Throw","","","","","","","",""],[1,1,2,"","Baseball","","",1,10,65,"Walking Backward Baseball Throw","","","","","","","",""],[1,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[1,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"8-Progression B, CPP2, MB3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Kikuchi Mound Throw","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[1,3,8,"","Baseball","","",1,15,85,"Accuracy Bullpen","","","","","","","",""],[1,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[1,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[1,6,1,"10-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[1,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[1,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[1,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[1,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[1,6,8,"","Baseball","","",1,25,95,"Pitch Design Bullpen","","","","","","","",""],[2,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Drive Leg Hop Baseball Throw","","","","","","","",""],[2,1,2,"","Baseball","","",1,10,65,"Rotational Step Back Baseball Throw","","","","","","","",""],[2,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[2,3,1,"8-Progression B, CPP2, Touch and Feel","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[2,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[2,3,7,"","Baseball","","",1,25,80,"Accuracy Bullpen","","","","","","","",""],[2,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[2,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[2,6,1,"10-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[2,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[2,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[2,6,7,"","Baseball","","",1,15,85,"Long Toss Extension","","","","","","","",""],[2,6,8,"","Baseball","","",1,5,95,"Long Toss Compressions","","","","","","","",""],[2,6,9,"","Baseball","","",1,15,100,"Velo Bullpen","","","","","","","",""],[3,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[3,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[3,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[3,3,1,"8-Progression B, CPP2, MB3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[3,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[3,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Kikuchi Mound Throw","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[3,3,8,"","Baseball","","",1,20,90,"Accuracy Bullpen","","","","","","","",""],[3,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[3,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[3,6,1,"10-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[3,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[3,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[3,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[3,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[3,6,8,"","Baseball","","",1,15,90,"Pitch Design Bullpen","","","","","","","",""],[3,6,9,"","Baseball","","",1,15,90,"Pitch Design Bullpen","","","","","","","",""],[4,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[4,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[4,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,1,"8-Progression B, CPP2, Touch and Feel","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,3,7,"","Baseball","","",1,20,80,"Accuracy Bullpen","","","","","","","",""],[4,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[4,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[4,6,1,"10-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Reactive Rebounders","Drive Leg Hop Baseball Throw","Stride Leg Linear Hop Baseball Throw","Rotational Hop Back Rewire Catch","Linear Roll In*Pendulum Throw","Self Toss Roll-In Throws","Walking Backward Baseball Throw","Drop Step Throws"],[4,6,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Run-Stop-Spin Throw","Swing Leg Rotational Step Back","Stride Leg Hop Back Rewire Catch Throw","Rotational Horizontal Step Forward Baseball Throw","Bauer Step Back Throws","Horizontal Walk Backward Cross Body Baseball Throw","Roll In Baseball Throw","Hop Drop Step Throws"],[4,6,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,6,6,"","Baseball","","",1,10,80,"Catch Play (75 ft)","","","","","","","",""],[4,6,7,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[4,6,8,"","Baseball","","",1,5,90,"Long Toss Compressions","","","","","","","",""],[4,6,9,"","Baseball","","",1,20,95,"","Visualisation Bullpen","Visualization Bullpen","Visualisation Bullpen","Visualisation Bullpen","Visualisation Bullpen","Visualisation Bullpen","Visualisation Bullpen","Visualisation Bullpen"]],"ENG":[[1,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Roll In Baseball Throw","","","","","","","",""],[1,1,2,"","Baseball","","",1,10,65,"Walking Backward Baseball Throw","","","","","","","",""],[1,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[1,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[1,3,1,"8-Progression B, CPP2, MB3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[1,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[1,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[1,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[1,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Kikuchi Mound Throw","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[1,3,8,"","Baseball","","",1,15,85,"Accuracy Bullpen","","","","","","","",""],[1,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[1,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[1,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[1,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[1,6,1,"10-Progression A, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[1,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[1,6,3,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[1,6,4,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[1,6,5,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[1,6,6,"","Baseball","","",1,15,90,"Warm Up Live Bullpen","","","","","","","",""],[1,6,7,"","Baseball","","",1,20,100,"Live Bullpen","","","","","","","",""],[2,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Drive Leg Hop Baseball Throw","","","","","","","",""],[2,1,2,"","Baseball","","",1,10,65,"Rotational Step Back Baseball Throw","","","","","","","",""],[2,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[2,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[2,3,1,"8-Progression B, CPP2, Touch and Feel","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[2,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[2,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[2,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[2,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[2,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[2,3,7,"","Baseball","","",1,25,80,"Accuracy Bullpen","","","","","","","",""],[2,5,1,"4-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[2,5,2,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[2,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[2,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[2,6,1,"11-Progression A, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[2,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[2,6,3,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[2,6,4,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[2,6,5,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[2,6,6,"","Baseball","","",1,10,90,"Warm Up Live Bullpen","","","","","","","",""],[2,6,7,"","Baseball","","",1,15,100,"Live Bullpen","","","","","","","",""],[2,6,8,"","Baseball","","",1,15,100,"Live Bullpen","","","","","","","",""],[3,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[3,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[3,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[3,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[3,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[3,3,1,"8-Progression B, CPP2, MB3","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[3,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[3,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[3,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[3,3,5,"","Baseball","","",1,10,75,"Catch Play (60 ft)","","","","","","","",""],[3,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[3,3,7,"","Baseball","","",1,5,85,"","Darvish Mound Throws","Kikuchi Mound Throw","Hook 'Em Throws","Horizontal Step Backwards Mound Throw","Janitor 2 Tap Throws","Hip-Shoulder Tap Throw","Glove Side Hand Off Mound Throws","Throw and Stick"],[3,3,8,"","Baseball","","",1,20,90,"Accuracy Bullpen","","","","","","","",""],[3,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[3,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[3,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[3,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[3,6,1,"12-Progression A, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[3,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[3,6,3,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[3,6,4,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[3,6,5,"","Baseball","","",1,5,85,"Long Toss Extension","","","","","","","",""],[3,6,6,"","Baseball","","",1,10,90,"Warm Up Live Bullpen","","","","","","","",""],[3,6,7,"","Baseball","","",1,20,100,"Live Bullpen","","","","","","","",""],[3,6,8,"","Baseball","","",1,15,100,"Live Bullpen","","","","","","","",""],[4,1,1,"4-Flow, CPP3","Baseball","","",1,10,60,"Horizontal Step Backward Baseball Throw","","","","","","","",""],[4,1,2,"","Baseball","","",1,10,65,"Horizontal Step Forward Baseball Throw","","","","","","","",""],[4,1,3,"","Baseball","","",1,15,60,"Catch Play (60 ft)","","","","","","","",""],[4,1,4,"","Baseball","","",1,15,65,"Catch Play (75 ft)","","","","","","","",""],[4,1,5,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,2,1,"3-Progression A, CPP1","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,2,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,2,3,"","Baseball","","",1,25,70,"Catch Play (60 ft)","","","","","","","",""],[4,3,1,"8-Progression B, CPP2, Touch and Feel","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Anchored Kneeling Throws*Flow","Rocker Figure 8 Throw","Kneeling Pivot Throws*Pendulum","Half Kneeling Lead Leg Block Throw","Kneeling Pivot Throws*Flow","Kneeling Natural Flip Up","Kneeling Natural Throws*Flow","Half Kneeling Lead Leg Block Throw"],[4,3,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","High Step Forward Baseball Throw","Crossover Pendulum Throws","Lateral Walk Backward*Flip Up Throw","Half Kneeling Lateral Lunge Throws","Rocker Figure 8 Throw","Lateral Walk Forward Flip Up Throw","1 Leg Balance Throws","Half Kneeling Lunge to Throw"],[4,3,3,"","8oz or 5oz or Baseball","8oz or 5oz","",1,10,70,"","Run and Round Throw","Kikuchi Throws","Lateral Pendulum Throw","Run and Round Throw","Run Away Stop & Baseball Throw","Linear Roll In*Pendulum Throw","Rotational Hop Back Rewire Catch Throw","Dead Leg Lasso Throw"],[4,3,4,"","8oz or 5oz or Baseball","5oz or 3oz","",1,10,75,"","Jeter Baseball Throw","Walking Forward Kikuchi Throws","Swing Leg Rotational Step Back","Run-Stop-Spin Throw","Rhythm Relay Throws","Fake Turn & Baseball Throw","Glove Side Toss Throws","Rocker Figure 8 Throw"],[4,3,5,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,3,6,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,3,7,"","Baseball","","",1,20,80,"Accuracy Bullpen","","","","","","","",""],[4,5,1,"3-CPP6","Baseball","","",1,10,60,"Catch Play (60 ft)","","","","","","","",""],[4,5,2,"","Baseball","","",1,10,65,"Catch Play (75 ft)","","","","","","","",""],[4,5,3,"","Baseball","","",1,10,70,"Catch Play (90 ft)","","","","","","","",""],[4,5,4,"","Baseball","","",1,15,75,"Flat Ground (Mix in Off-Speed)","","","","","","","",""],[4,6,1,"10-Progression B, CPP2, LT1, Bullpen","8oz or 5oz or Baseball","12oz or 8oz","16oz or 12oz",1,10,60,"","Kneeling Neutral Throws*Tap & Go","Standing Natural Throws*Pendulum","Standing Natural Throws*Flow","Kneeling Natural Throws*Flow","Standing Pivot Throws*Pendulum","Kneeling Natural Flip Up","Kneeling Natural Throws*Pendulum","Dead Leg Lasso Throw"],[4,6,2,"","8oz or 5oz or Baseball","8oz or 5oz","12oz or 8oz",1,10,65,"","Tracer Pick Up Throw","Rotational Rocker Throw","Walking Backward Baseball Throw","Rotational Rocker Throw","Standing Neutral Throws*Flow","Lasso Drop Throws","Standing Neutral Throws*Flow","3 Step Dead Leg Throw"],[4,6,3,"","Baseball","","",1,15,75,"Catch Play (60 ft)","","","","","","","",""],[4,6,4,"","Baseball","","",1,15,80,"Catch Play (75 ft)","","","","","","","",""],[4,6,5,"","Baseball","","",1,10,85,"Long Toss Extension","","","","","","","",""],[4,6,6,"","Baseball","","",1,15,90,"Warm Up Live Bullpen","","","","","","","",""],[4,6,7,"","Baseball","","",1,20,100,"Live Bullpen","","","","","","","",""]],"THR•RTT•32W•UCL REVISION":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,5,1,"","","","",1,15,50,"","","","","","","","",""],[1,5,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,15,50,"","","","","","","","",""],[2,3,2,"","","","",1,15,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,15,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,50,"","","","","","","","",""],[3,1,2,"","","","",1,15,50,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,50,"","","","","","","","",""],[3,5,1,"","","","",1,15,50,"","","","","","","","",""],[3,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,50,"","","","","","","","",""],[4,1,2,"","","","",1,20,50,"","","","","","","","",""],[4,3,1,"","","","",1,15,50,"","","","","","","","",""],[4,3,2,"","","","",1,25,50,"","","","","","","","",""],[4,5,1,"","","","",1,15,50,"","","","","","","","",""],[4,5,2,"","","","",1,20,50,"","","","","","","","",""],[5,1,1,"","","","",1,20,50,"","","","","","","","",""],[5,1,2,"","","","",1,20,50,"","","","","","","","",""],[5,3,1,"","","","",1,15,50,"","","","","","","","",""],[5,3,2,"","","","",1,25,50,"","","","","","","","",""],[5,5,1,"","","","",1,20,50,"","","","","","","","",""],[5,5,2,"","","","",1,20,50,"","","","","","","","",""],[6,1,1,"","","","",1,15,50,"","","","","","","","",""],[6,1,2,"","","","",1,15,50,"","","","","","","","",""],[6,3,1,"","","","",1,15,50,"","","","","","","","",""],[6,3,2,"","","","",1,15,50,"","","","","","","","",""],[6,5,1,"","","","",1,15,50,"","","","","","","","",""],[6,5,2,"","","","",1,15,50,"","","","","","","","",""],[7,1,1,"","","","",1,20,50,"","","","","","","","",""],[7,1,2,"","","","",1,25,50,"","","","","","","","",""],[7,3,1,"","","","",1,20,50,"","","","","","","","",""],[7,3,2,"","","","",1,25,50,"","","","","","","","",""],[7,5,1,"","","","",1,20,50,"","","","","","","","",""],[7,5,2,"","","","",1,25,50,"","","","","","","","",""],[8,1,1,"","","","",1,25,50,"","","","","","","","",""],[8,1,2,"","","","",1,25,50,"","","","","","","","",""],[8,3,1,"","","","",1,20,50,"","","","","","","","",""],[8,3,2,"","","","",1,25,50,"","","","","","","","",""],[8,3,3,"","","","",1,10,50,"","","","","","","","",""],[8,5,1,"","","","",1,25,50,"","","","","","","","",""],[8,5,2,"","","","",1,25,50,"","","","","","","","",""],[9,1,1,"","","","",1,25,50,"","","","","","","","",""],[9,1,2,"","","","",1,25,50,"","","","","","","","",""],[9,1,3,"","","","",1,10,50,"","","","","","","","",""],[9,3,1,"","","","",1,20,50,"","","","","","","","",""],[9,3,2,"","","","",1,25,50,"","","","","","","","",""],[9,3,3,"","","","",1,15,50,"","","","","","","","",""],[9,5,1,"","","","",1,25,50,"","","","","","","","",""],[9,5,2,"","","","",1,25,50,"","","","","","","","",""],[9,5,3,"","","","",1,10,50,"","","","","","","","",""],[10,1,1,"","","","",1,25,50,"","","","","","","","",""],[10,1,2,"","","","",1,25,50,"","","","","","","","",""],[10,1,3,"","","","",1,15,50,"","","","","","","","",""],[10,3,1,"","","","",1,20,50,"","","","","","","","",""],[10,3,2,"","","","",1,25,50,"","","","","","","","",""],[10,3,3,"","","","",1,20,50,"","","","","","","","",""],[10,5,1,"","","","",1,25,50,"","","","","","","","",""],[10,5,2,"","","","",1,25,50,"","","","","","","","",""],[10,5,3,"","","","",1,15,50,"","","","","","","","",""],[11,1,1,"","","","",1,25,50,"","","","","","","","",""],[11,1,2,"","","","",1,25,50,"","","","","","","","",""],[11,1,3,"","","","",1,20,50,"","","","","","","","",""],[11,3,1,"","","","",1,20,50,"","","","","","","","",""],[11,3,2,"","","","",1,25,50,"","","","","","","","",""],[11,3,3,"","","","",1,25,50,"","","","","","","","",""],[11,5,1,"","","","",1,25,50,"","","","","","","","",""],[11,5,2,"","","","",1,25,50,"","","","","","","","",""],[11,5,3,"","","","",1,20,50,"","","","","","","","",""],[12,1,1,"","","","",1,20,50,"","","","","","","","",""],[12,1,2,"","","","",1,20,50,"","","","","","","","",""],[12,1,3,"","","","",1,15,50,"","","","","","","","",""],[12,3,1,"","","","",1,20,50,"","","","","","","","",""],[12,3,2,"","","","",1,20,50,"","","","","","","","",""],[12,3,3,"","","","",1,15,50,"","","","","","","","",""],[12,5,1,"","","","",1,20,50,"","","","","","","","",""],[12,5,2,"","","","",1,20,50,"","","","","","","","",""],[12,5,3,"","","","",1,15,50,"","","","","","","","",""],[13,1,1,"","","","",1,20,50,"","","","","","","","",""],[13,1,2,"","","","",1,25,50,"","","","","","","","",""],[13,1,3,"","","","",1,15,55,"","","","","","","","",""],[13,3,1,"","","","",1,25,50,"","","","","","","","",""],[13,3,2,"","","","",1,20,55,"","","","","","","","",""],[13,3,3,"","","","",1,15,55,"","","","","","","","",""],[13,5,1,"","","","",1,25,50,"","","","","","","","",""],[13,5,2,"","","","",1,20,55,"","","","","","","","",""],[13,5,3,"","","","",1,15,55,"","","","","","","","",""],[14,1,1,"","","","",1,20,50,"","","","","","","","",""],[14,1,2,"","","","",1,15,55,"","","","","","","","",""],[14,1,3,"","","","",1,10,60,"","","","","","","","",""],[14,3,1,"","","","",1,25,55,"","","","","","","","",""],[14,3,2,"","","","",1,20,60,"","","","","","","","",""],[14,3,3,"","","","",1,15,65,"","","","","","","","",""],[14,5,1,"","","","",1,25,50,"","","","","","","","",""],[14,5,2,"","","","",1,20,55,"","","","","","","","",""],[14,5,3,"","","","",1,15,55,"","","","","","","","",""],[15,1,1,"","","","",1,20,55,"","","","","","","","",""],[15,1,2,"","","","",1,15,60,"","","","","","","","",""],[15,1,3,"","","","",1,10,65,"","","","","","","","",""],[15,3,1,"","","","",1,25,55,"","","","","","","","",""],[15,3,2,"","","","",1,20,65,"","","","","","","","",""],[15,3,3,"","","","",1,10,70,"","","","","","","","",""],[15,5,1,"","","","",1,20,50,"","","","","","","","",""],[15,5,2,"","","","",1,20,55,"","","","","","","","",""],[15,5,3,"","","","",1,15,60,"","","","","","","","",""],[16,1,1,"","","","",1,20,60,"","","","","","","","",""],[16,1,2,"","","","",1,15,65,"","","","","","","","",""],[16,1,3,"","","","",1,10,65,"","","","","","","","",""],[16,3,1,"","","","",1,25,55,"","","","","","","","",""],[16,3,2,"","","","",1,20,65,"","","","","","","","",""],[16,3,3,"","","","",1,10,70,"","","","","","","","",""],[16,5,1,"","","","",1,20,55,"","","","","","","","",""],[16,5,2,"","","","",1,20,60,"","","","","","","","",""],[16,5,3,"","","","",1,15,65,"","","","","","","","",""],[17,1,1,"","","","",1,15,55,"","","","","","","","",""],[17,1,2,"","","","",1,15,60,"","","","","","","","",""],[17,1,3,"","","","",1,10,60,"","","","","","","","",""],[17,3,1,"","","","",1,15,55,"","","","","","","","",""],[17,3,2,"","","","",1,15,60,"","","","","","","","",""],[17,3,3,"","","","",1,10,65,"","","","","","","","",""],[17,5,1,"","","","",1,20,55,"","","","","","","","",""],[17,5,2,"","","","",1,15,60,"","","","","","","","",""],[17,5,3,"","","","",1,10,65,"","","","","","","","",""],[18,1,1,"","","","",1,20,60,"","","","","","","","",""],[18,1,2,"","","","",1,15,65,"","","","","","","","",""],[18,1,3,"","","","",1,10,65,"","","","","","","","",""],[18,3,1,"","","","",1,25,55,"","","","","","","","",""],[18,3,2,"","","","",1,20,65,"","","","","","","","",""],[18,3,3,"","","","",1,10,70,"","","","","","","","",""],[18,5,1,"","","","",1,20,55,"","","","","","","","",""],[18,5,2,"","","","",1,20,60,"","","","","","","","",""],[18,5,3,"","","","",1,15,65,"","","","","","","","",""],[19,1,1,"","","","",1,20,60,"","","","","","","","",""],[19,1,2,"","","","",1,15,65,"","","","","","","","",""],[19,1,3,"","","","",1,15,70,"","","","","","","","",""],[19,3,1,"","","","",1,25,55,"","","","","","","","",""],[19,3,2,"","","","",1,20,70,"","","","","","","","",""],[19,3,3,"","","","",1,10,75,"","","","","","","","",""],[19,5,1,"","","","",1,20,55,"","","","","","","","",""],[19,5,2,"","","","",1,20,65,"","","","","","","","",""],[19,5,3,"","","","",1,15,70,"","","","","","","","",""],[20,1,1,"","","","",1,20,60,"","","","","","","","",""],[20,1,2,"","","","",1,15,70,"","","","","","","","",""],[20,1,3,"","","","",1,15,75,"","","","","","","","",""],[20,3,1,"","","","",1,25,60,"","","","","","","","",""],[20,3,2,"","","","",1,20,70,"","","","","","","","",""],[20,3,3,"","","","",1,15,75,"","","","","","","","",""],[20,5,1,"","","","",1,20,60,"","","","","","","","",""],[20,5,2,"","","","",1,20,70,"","","","","","","","",""],[20,5,3,"","","","",1,15,75,"","","","","","","","",""],[21,1,1,"","","","",1,20,60,"","","","","","","","",""],[21,1,2,"","","","",1,15,75,"","","","","","","","",""],[21,1,3,"","","","",1,15,75,"","","","","","","","",""],[21,3,1,"","","","",1,25,65,"","","","","","","","",""],[21,3,2,"","","","",1,20,75,"","","","","","","","",""],[21,3,3,"","","","",1,20,80,"","","","","","","","",""],[21,5,1,"","","","",1,20,60,"","","","","","","","",""],[21,5,2,"","","","",1,20,75,"","","","","","","","",""],[21,5,3,"","","","",1,15,75,"","","","","","","","",""],[22,1,1,"","","","",1,20,60,"","","","","","","","",""],[22,1,2,"","","","",1,15,65,"","","","","","","","",""],[22,1,3,"","","","",1,10,70,"","","","","","","","",""],[22,3,1,"","","","",1,20,55,"","","","","","","","",""],[22,3,2,"","","","",1,15,70,"","","","","","","","",""],[22,3,3,"","","","",1,15,75,"","","","","","","","",""],[22,5,1,"","","","",1,20,55,"","","","","","","","",""],[22,5,2,"","","","",1,15,65,"","","","","","","","",""],[22,5,3,"","","","",1,10,70,"","","","","","","","",""],[23,1,1,"","","","",1,25,50,"","","","","","","","",""],[23,1,2,"","","","",1,20,50,"","","","","","","","",""],[23,3,1,"","","","",1,15,60,"","","","","","","","",""],[23,3,2,"","","","",1,10,65,"","","","","","","","",""],[23,5,1,"","","","",1,20,50,"","","","","","","","",""],[23,5,2,"","","","",1,20,55,"","","","","","","","",""],[23,6,1,"","","","",1,15,55,"","","","","","","","",""],[23,6,2,"","","","",1,15,60,"","","","","","","","",""],[24,1,1,"","","","",1,25,50,"","","","","","","","",""],[24,1,2,"","","","",1,25,55,"","","","","","","","",""],[24,3,1,"","","","",1,15,65,"","","","","","","","",""],[24,3,2,"","","","",1,10,70,"","","","","","","","",""],[24,5,1,"","","","",1,25,55,"","","","","","","","",""],[24,5,2,"","","","",1,20,55,"","","","","","","","",""],[24,6,1,"","","","",1,15,60,"","","","","","","","",""],[24,6,2,"","","","",1,15,65,"","","","","","","","",""],[25,1,1,"","","","",1,25,55,"","","","","","","","",""],[25,1,2,"","","","",1,20,55,"","","","","","","","",""],[25,1,3,"","","","",1,15,55,"","","","","","","","",""],[25,3,1,"","","","",1,15,65,"","","","","","","","",""],[25,3,2,"","","","",1,10,70,"","","","","","","","",""],[25,3,3,"","","","",1,10,75,"","","","","","","","",""],[25,5,1,"","","","",1,25,55,"","","","","","","","",""],[25,5,2,"","","","",1,15,55,"","","","","","","","",""],[25,5,3,"","","","",1,15,60,"","","","","","","","",""],[25,6,1,"","","","",1,20,60,"","","","","","","","",""],[25,6,2,"","","","",1,20,70,"","","","","","","","",""],[26,1,1,"","","","",1,25,55,"","","","","","","","",""],[26,1,2,"","","","",1,20,55,"","","","","","","","",""],[26,1,3,"","","","",1,20,60,"","","","","","","","",""],[26,3,1,"","","","",1,15,65,"","","","","","","","",""],[26,3,2,"","","","",1,15,75,"","","","","","","","",""],[26,3,3,"","","","",1,10,75,"","","","","","","","",""],[26,5,1,"","","","",1,25,55,"","","","","","","","",""],[26,5,2,"","","","",1,20,60,"","","","","","","","",""],[26,5,3,"","","","",1,15,60,"","","","","","","","",""],[26,6,1,"","","","",1,25,65,"","","","","","","","",""],[26,6,2,"","","","",1,20,70,"","","","","","","","",""],[27,1,1,"","","","",1,25,55,"","","","","","","","",""],[27,1,2,"","","","",1,20,55,"","","","","","","","",""],[27,1,3,"","","","",1,10,55,"","","","","","","","",""],[27,3,1,"","","","",1,15,65,"","","","","","","","",""],[27,3,2,"","","","",1,10,65,"","","","","","","","",""],[27,3,3,"","","","",1,10,70,"","","","","","","","",""],[27,5,1,"","","","",1,25,55,"","","","","","","","",""],[27,5,2,"","","","",1,15,55,"","","","","","","","",""],[27,5,3,"","","","",1,10,60,"","","","","","","","",""],[27,6,1,"","","","",1,20,55,"","","","","","","","",""],[27,6,2,"","","","",1,15,65,"","","","","","","","",""],[28,1,1,"","","","",1,25,55,"","","","","","","","",""],[28,1,2,"","","","",1,20,55,"","","","","","","","",""],[28,1,3,"","","","",1,20,60,"","","","","","","","",""],[28,3,1,"","","","",1,15,65,"","","","","","","","",""],[28,3,2,"","","","",1,15,75,"","","","","","","","",""],[28,3,3,"","","","",1,10,75,"","","","","","","","",""],[28,5,1,"","","","",1,25,55,"","","","","","","","",""],[28,5,2,"","","","",1,20,60,"","","","","","","","",""],[28,5,3,"","","","",1,15,60,"","","","","","","","",""],[28,6,1,"","","","",1,25,65,"","","","","","","","",""],[28,6,2,"","","","",1,20,70,"","","","","","","","",""],[29,1,1,"","","","",1,25,55,"","","","","","","","",""],[29,1,2,"","","","",1,25,60,"","","","","","","","",""],[29,1,3,"","","","",1,20,65,"","","","","","","","",""],[29,3,1,"","","","",1,20,65,"","","","","","","","",""],[29,3,2,"","","","",1,15,75,"","","","","","","","",""],[29,3,3,"","","","",1,10,85,"","","","","","","","",""],[29,5,1,"","","","",1,25,60,"","","","","","","","",""],[29,5,2,"","","","",1,20,60,"","","","","","","","",""],[29,5,3,"","","","",1,20,65,"","","","","","","","",""],[29,6,1,"","","","",1,20,65,"","","","","","","","",""],[29,6,2,"","","","",1,20,70,"","","","","","","","",""],[29,6,3,"","","","",1,10,80,"","","","","","","","",""],[30,1,1,"","","","",1,25,60,"","","","","","","","",""],[30,1,2,"","","","",1,25,60,"","","","","","","","",""],[30,1,3,"","","","",1,25,65,"","","","","","","","",""],[30,3,1,"","","","",1,20,65,"","","","","","","","",""],[30,3,2,"","","","",1,15,80,"","","","","","","","",""],[30,3,3,"","","","",1,15,85,"","","","","","","","",""],[30,5,1,"","","","",1,25,60,"","","","","","","","",""],[30,5,2,"","","","",1,25,65,"","","","","","","","",""],[30,5,3,"","","","",1,20,65,"","","","","","","","",""],[30,6,1,"","","","",1,25,65,"","","","","","","","",""],[30,6,2,"","","","",1,20,75,"","","","","","","","",""],[30,6,3,"","","","",1,10,80,"","","","","","","","",""],[31,1,1,"","","","",1,25,65,"","","","","","","","",""],[31,1,2,"","","","",1,25,65,"","","","","","","","",""],[31,1,3,"","","","",1,25,65,"","","","","","","","",""],[31,3,1,"","","","",1,20,65,"","","","","","","","",""],[31,3,2,"","","","",1,15,85,"","","","","","","","",""],[31,3,3,"","","","",1,15,90,"","","","","","","","",""],[31,5,1,"","","","",1,25,65,"","","","","","","","",""],[31,5,2,"","","","",1,25,70,"","","","","","","","",""],[31,5,3,"","","","",1,20,70,"","","","","","","","",""],[31,6,1,"","","","",1,25,65,"","","","","","","","",""],[31,6,2,"","","","",1,20,80,"","","","","","","","",""],[31,6,3,"","","","",1,10,85,"","","","","","","","",""],[32,1,1,"","","","",1,20,55,"","","","","","","","",""],[32,1,2,"","","","",1,20,60,"","","","","","","","",""],[32,1,3,"","","","",1,20,60,"","","","","","","","",""],[32,3,1,"","","","",1,15,65,"","","","","","","","",""],[32,3,2,"","","","",1,15,75,"","","","","","","","",""],[32,3,3,"","","","",1,10,85,"","","","","","","","",""],[32,5,1,"","","","",1,20,60,"","","","","","","","",""],[32,5,2,"","","","",1,20,60,"","","","","","","","",""],[32,5,3,"","","","",1,20,60,"","","","","","","","",""],[32,6,1,"","","","",1,20,65,"","","","","","","","",""],[32,6,2,"","","","",1,20,70,"","","","","","","","",""],[32,6,3,"","","","",1,10,80,"","","","","","","","",""]],"THR•RTT•24W•UCL HYBRID":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,5,1,"","","","",1,15,50,"","","","","","","","",""],[1,5,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,15,50,"","","","","","","","",""],[2,3,2,"","","","",1,15,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,15,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,50,"","","","","","","","",""],[3,1,2,"","","","",1,15,50,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,50,"","","","","","","","",""],[3,5,1,"","","","",1,15,50,"","","","","","","","",""],[3,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,50,"","","","","","","","",""],[4,1,2,"","","","",1,20,50,"","","","","","","","",""],[4,3,1,"","","","",1,15,50,"","","","","","","","",""],[4,3,2,"","","","",1,25,50,"","","","","","","","",""],[4,5,1,"","","","",1,20,50,"","","","","","","","",""],[4,5,2,"","","","",1,20,50,"","","","","","","","",""],[5,1,1,"","","","",1,15,50,"","","","","","","","",""],[5,1,2,"","","","",1,15,50,"","","","","","","","",""],[5,3,1,"","","","",1,15,50,"","","","","","","","",""],[5,3,2,"","","","",1,15,50,"","","","","","","","",""],[5,5,1,"","","","",1,15,50,"","","","","","","","",""],[5,5,2,"","","","",1,15,50,"","","","","","","","",""],[6,1,1,"","","","",1,20,50,"","","","","","","","",""],[6,1,2,"","","","",1,25,50,"","","","","","","","",""],[6,3,1,"","","","",1,20,50,"","","","","","","","",""],[6,3,2,"","","","",1,25,50,"","","","","","","","",""],[6,5,1,"","","","",1,20,50,"","","","","","","","",""],[6,5,2,"","","","",1,20,50,"","","","","","","","",""],[7,1,1,"","","","",1,25,50,"","","","","","","","",""],[7,1,2,"","","","",1,25,50,"","","","","","","","",""],[7,3,1,"","","","",1,20,50,"","","","","","","","",""],[7,3,2,"","","","",1,25,50,"","","","","","","","",""],[7,3,3,"","","","",1,10,50,"","","","","","","","",""],[7,5,1,"","","","",1,20,50,"","","","","","","","",""],[7,5,2,"","","","",1,25,50,"","","","","","","","",""],[8,1,1,"","","","",1,25,50,"","","","","","","","",""],[8,1,2,"","","","",1,25,50,"","","","","","","","",""],[8,1,3,"","","","",1,10,50,"","","","","","","","",""],[8,3,1,"","","","",1,20,50,"","","","","","","","",""],[8,3,2,"","","","",1,25,50,"","","","","","","","",""],[8,3,3,"","","","",1,15,50,"","","","","","","","",""],[8,5,1,"","","","",1,20,50,"","","","","","","","",""],[8,5,2,"","","","",1,25,50,"","","","","","","","",""],[8,5,3,"","","","",1,10,50,"","","","","","","","",""],[9,1,1,"","","","",1,25,50,"","","","","","","","",""],[9,1,2,"","","","",1,25,50,"","","","","","","","",""],[9,1,3,"","","","",1,20,50,"","","","","","","","",""],[9,3,1,"","","","",1,20,50,"","","","","","","","",""],[9,3,2,"","","","",1,25,50,"","","","","","","","",""],[9,3,3,"","","","",1,20,50,"","","","","","","","",""],[9,5,1,"","","","",1,20,50,"","","","","","","","",""],[9,5,2,"","","","",1,25,50,"","","","","","","","",""],[9,5,3,"","","","",1,20,50,"","","","","","","","",""],[10,1,1,"","","","",1,15,50,"","","","","","","","",""],[10,1,2,"","","","",1,20,50,"","","","","","","","",""],[10,1,3,"","","","",1,15,50,"","","","","","","","",""],[10,3,1,"","","","",1,15,50,"","","","","","","","",""],[10,3,2,"","","","",1,20,50,"","","","","","","","",""],[10,3,3,"","","","",1,15,50,"","","","","","","","",""],[10,5,1,"","","","",1,15,50,"","","","","","","","",""],[10,5,2,"","","","",1,20,50,"","","","","","","","",""],[10,5,3,"","","","",1,15,50,"","","","","","","","",""],[11,1,1,"","","","",1,20,50,"","","","","","","","",""],[11,1,2,"","","","",1,15,55,"","","","","","","","",""],[11,1,3,"","","","",1,10,60,"","","","","","","","",""],[11,3,1,"","","","",1,25,55,"","","","","","","","",""],[11,3,2,"","","","",1,20,60,"","","","","","","","",""],[11,3,3,"","","","",1,15,65,"","","","","","","","",""],[11,5,1,"","","","",1,20,50,"","","","","","","","",""],[11,5,2,"","","","",1,20,55,"","","","","","","","",""],[11,5,3,"","","","",1,15,55,"","","","","","","","",""],[12,1,1,"","","","",1,20,55,"","","","","","","","",""],[12,1,2,"","","","",1,15,60,"","","","","","","","",""],[12,1,3,"","","","",1,10,65,"","","","","","","","",""],[12,3,1,"","","","",1,25,55,"","","","","","","","",""],[12,3,2,"","","","",1,20,65,"","","","","","","","",""],[12,3,3,"","","","",1,10,70,"","","","","","","","",""],[12,5,1,"","","","",1,20,50,"","","","","","","","",""],[12,5,2,"","","","",1,20,55,"","","","","","","","",""],[12,5,3,"","","","",1,15,60,"","","","","","","","",""],[13,1,1,"","","","",1,20,60,"","","","","","","","",""],[13,1,2,"","","","",1,15,65,"","","","","","","","",""],[13,1,3,"","","","",1,10,65,"","","","","","","","",""],[13,3,1,"","","","",1,25,55,"","","","","","","","",""],[13,3,2,"","","","",1,20,65,"","","","","","","","",""],[13,3,3,"","","","",1,10,70,"","","","","","","","",""],[13,5,1,"","","","",1,20,55,"","","","","","","","",""],[13,5,2,"","","","",1,20,60,"","","","","","","","",""],[13,5,3,"","","","",1,15,65,"","","","","","","","",""],[14,1,1,"","","","",1,15,55,"","","","","","","","",""],[14,1,2,"","","","",1,15,60,"","","","","","","","",""],[14,1,3,"","","","",1,10,60,"","","","","","","","",""],[14,3,1,"","","","",1,20,55,"","","","","","","","",""],[14,3,2,"","","","",1,15,60,"","","","","","","","",""],[14,3,3,"","","","",1,10,65,"","","","","","","","",""],[14,5,1,"","","","",1,20,55,"","","","","","","","",""],[14,5,2,"","","","",1,15,60,"","","","","","","","",""],[14,5,3,"","","","",1,10,65,"","","","","","","","",""],[15,1,1,"","","","",1,20,60,"","","","","","","","",""],[15,1,2,"","","","",1,15,65,"","","","","","","","",""],[15,1,3,"","","","",1,10,65,"","","","","","","","",""],[15,3,1,"","","","",1,25,55,"","","","","","","","",""],[15,3,2,"","","","",1,20,65,"","","","","","","","",""],[15,3,3,"","","","",1,10,70,"","","","","","","","",""],[15,5,1,"","","","",1,20,55,"","","","","","","","",""],[15,5,2,"","","","",1,20,60,"","","","","","","","",""],[15,5,3,"","","","",1,15,65,"","","","","","","","",""],[16,1,1,"","","","",1,20,60,"","","","","","","","",""],[16,1,2,"","","","",1,15,65,"","","","","","","","",""],[16,1,3,"","","","",1,15,70,"","","","","","","","",""],[16,3,1,"","","","",1,25,55,"","","","","","","","",""],[16,3,2,"","","","",1,20,70,"","","","","","","","",""],[16,3,3,"","","","",1,10,75,"","","","","","","","",""],[16,5,1,"","","","",1,20,55,"","","","","","","","",""],[16,5,2,"","","","",1,20,65,"","","","","","","","",""],[16,5,3,"","","","",1,15,70,"","","","","","","","",""],[17,1,1,"","","","",1,20,60,"","","","","","","","",""],[17,1,2,"","","","",1,15,70,"","","","","","","","",""],[17,1,3,"","","","",1,10,75,"","","","","","","","",""],[17,3,1,"","","","",1,25,60,"","","","","","","","",""],[17,3,2,"","","","",1,20,70,"","","","","","","","",""],[17,3,3,"","","","",1,15,75,"","","","","","","","",""],[17,5,1,"","","","",1,20,60,"","","","","","","","",""],[17,5,2,"","","","",1,20,70,"","","","","","","","",""],[17,5,3,"","","","",1,10,75,"","","","","","","","",""],[18,1,1,"","","","",1,15,60,"","","","","","","","",""],[18,1,2,"","","","",1,15,65,"","","","","","","","",""],[18,1,3,"","","","",1,10,70,"","","","","","","","",""],[18,3,1,"","","","",1,20,55,"","","","","","","","",""],[18,3,2,"","","","",1,15,70,"","","","","","","","",""],[18,3,3,"","","","",1,10,75,"","","","","","","","",""],[18,5,1,"","","","",1,20,55,"","","","","","","","",""],[18,5,2,"","","","",1,15,65,"","","","","","","","",""],[18,5,3,"","","","",1,10,70,"","","","","","","","",""],[19,1,1,"","","","",1,25,50,"","","","","","","","",""],[19,1,2,"","","","",1,20,50,"","","","","","","","",""],[19,3,1,"","","","",1,15,60,"","","","","","","","",""],[19,3,2,"","","","",1,10,65,"","","","","","","","",""],[19,5,1,"","","","",1,20,50,"","","","","","","","",""],[19,5,2,"","","","",1,20,55,"","","","","","","","",""],[19,6,1,"","","","",1,15,55,"","","","","","","","",""],[19,6,2,"","","","",1,15,60,"","","","","","","","",""],[20,1,1,"","","","",1,25,50,"","","","","","","","",""],[20,1,2,"","","","",1,25,55,"","","","","","","","",""],[20,3,1,"","","","",1,15,65,"","","","","","","","",""],[20,3,2,"","","","",1,10,70,"","","","","","","","",""],[20,5,1,"","","","",1,25,55,"","","","","","","","",""],[20,5,2,"","","","",1,20,55,"","","","","","","","",""],[20,6,1,"","","","",1,15,60,"","","","","","","","",""],[20,6,2,"","","","",1,15,65,"","","","","","","","",""],[21,1,1,"","","","",1,25,55,"","","","","","","","",""],[21,1,2,"","","","",1,20,55,"","","","","","","","",""],[21,1,3,"","","","",1,15,55,"","","","","","","","",""],[21,3,1,"","","","",1,15,65,"","","","","","","","",""],[21,3,2,"","","","",1,10,70,"","","","","","","","",""],[21,3,3,"","","","",1,10,75,"","","","","","","","",""],[21,5,1,"","","","",1,25,55,"","","","","","","","",""],[21,5,2,"","","","",1,15,55,"","","","","","","","",""],[21,5,3,"","","","",1,15,60,"","","","","","","","",""],[21,6,1,"","","","",1,20,60,"","","","","","","","",""],[21,6,2,"","","","",1,20,70,"","","","","","","","",""],[22,1,1,"","","","",1,25,55,"","","","","","","","",""],[22,1,2,"","","","",1,20,55,"","","","","","","","",""],[22,1,3,"","","","",1,20,60,"","","","","","","","",""],[22,3,1,"","","","",1,15,65,"","","","","","","","",""],[22,3,2,"","","","",1,15,75,"","","","","","","","",""],[22,3,3,"","","","",1,10,75,"","","","","","","","",""],[22,5,1,"","","","",1,25,55,"","","","","","","","",""],[22,5,2,"","","","",1,20,60,"","","","","","","","",""],[22,5,3,"","","","",1,15,60,"","","","","","","","",""],[22,6,1,"","","","",1,25,65,"","","","","","","","",""],[22,6,2,"","","","",1,20,70,"","","","","","","","",""],[23,1,1,"","","","",1,25,55,"","","","","","","","",""],[23,1,2,"","","","",1,25,60,"","","","","","","","",""],[23,1,3,"","","","",1,20,65,"","","","","","","","",""],[23,3,1,"","","","",1,20,65,"","","","","","","","",""],[23,3,2,"","","","",1,15,75,"","","","","","","","",""],[23,3,3,"","","","",1,10,85,"","","","","","","","",""],[23,5,1,"","","","",1,25,60,"","","","","","","","",""],[23,5,2,"","","","",1,20,60,"","","","","","","","",""],[23,5,3,"","","","",1,20,65,"","","","","","","","",""],[23,6,1,"","","","",1,20,65,"","","","","","","","",""],[23,6,2,"","","","",1,20,70,"","","","","","","","",""],[23,6,3,"","","","",1,10,80,"","","","","","","","",""],[24,1,1,"","","","",1,25,55,"","","","","","","","",""],[24,1,2,"","","","",1,20,55,"","","","","","","","",""],[24,1,3,"","","","",1,15,55,"","","","","","","","",""],[24,3,1,"","","","",1,15,65,"","","","","","","","",""],[24,3,2,"","","","",1,10,65,"","","","","","","","",""],[24,3,3,"","","","",1,10,70,"","","","","","","","",""],[24,5,1,"","","","",1,25,55,"","","","","","","","",""],[24,5,2,"","","","",1,20,55,"","","","","","","","",""],[24,5,3,"","","","",1,15,60,"","","","","","","","",""],[24,6,1,"","","","",1,20,55,"","","","","","","","",""],[24,6,2,"","","","",1,15,60,"","","","","","","","",""]],"THR•RTM•8W•UCL HYBRID":[[1,1,1,"","","","",1,25,60,"","","","","","","","",""],[1,1,2,"","","","",1,20,65,"","","","","","","","",""],[1,1,3,"","","","",1,15,75,"","","","","","","","",""],[1,3,1,"","","","",1,20,65,"","","","","","","","",""],[1,3,2,"","","","",1,15,80,"","","","","","","","",""],[1,3,3,"","","","",1,10,80,"Mound","","","","","","","",""],[1,5,1,"","","","",1,15,60,"","","","","","","","",""],[1,5,2,"","","","",1,15,65,"","","","","","","","",""],[1,5,3,"","","","",1,15,65,"","","","","","","","",""],[1,6,1,"","","","",1,15,65,"","","","","","","","",""],[1,6,2,"","","","",1,15,75,"","","","","","","","",""],[1,6,3,"","","","",1,10,80,"","","","","","","","",""],[2,1,1,"","","","",1,25,60,"","","","","","","","",""],[2,1,2,"","","","",1,15,65,"","","","","","","","",""],[2,1,3,"","","","",1,10,75,"","","","","","","","",""],[2,2,1,"","","","",1,15,60,"","","","","","","","",""],[2,2,2,"","","","",1,10,65,"","","","","","","","",""],[2,2,3,"","","","",1,10,70,"","","","","","","","",""],[2,3,1,"","","","",1,15,65,"","","","","","","","",""],[2,3,2,"","","","",1,15,80,"","","","","","","","",""],[2,3,3,"","","","",1,10,85,"Mound","","","","","","","",""],[2,5,1,"","","","",1,25,60,"","","","","","","","",""],[2,5,2,"","","","",1,20,65,"","","","","","","","",""],[2,6,1,"","","","",1,15,65,"","","","","","","","",""],[2,6,2,"","","","",1,15,75,"","","","","","","","",""],[2,6,3,"","","","",1,10,80,"","","","","","","","",""],[3,1,1,"","","","",1,25,60,"","","","","","","","",""],[3,1,2,"","","","",1,20,65,"","","","","","","","",""],[3,1,3,"","","","",1,10,75,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,3,2,"","","","",1,15,80,"","","","","","","","",""],[3,3,3,"","","","",1,20,85,"Mound","","","","","","","",""],[3,5,1,"","","","",1,25,60,"","","","","","","","",""],[3,5,2,"","","","",1,20,65,"","","","","","","","",""],[3,5,3,"","","","",1,10,65,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,6,2,"","","","",1,15,75,"","","","","","","","",""],[3,6,3,"","","","",1,15,80,"","","","","","","","",""],[4,1,1,"","","","",1,25,60,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,1,3,"","","","",1,10,75,"","","","","","","","",""],[4,2,1,"","","","",1,15,60,"","","","","","","","",""],[4,2,2,"","","","",1,10,65,"","","","","","","","",""],[4,2,3,"","","","",1,10,70,"","","","","","","","",""],[4,3,1,"","","","",1,15,65,"","","","","","","","",""],[4,3,2,"","","","",1,15,80,"","","","","","","","",""],[4,3,3,"","","","",1,25,90,"Mound","","","","","","","",""],[4,5,1,"","","","",1,25,60,"","","","","","","","",""],[4,5,2,"","","","",1,20,65,"","","","","","","","",""],[4,6,1,"","","","",1,15,65,"","","","","","","","",""],[4,6,2,"","","","",1,15,75,"","","","","","","","",""],[4,6,3,"","","","",1,10,80,"","","","","","","","",""],[5,1,1,"","","","",1,25,60,"","","","","","","","",""],[5,1,2,"","","","",1,15,65,"","","","","","","","",""],[5,1,3,"","","","",1,10,75,"","","","","","","","",""],[5,2,1,"","","","",1,15,60,"","","","","","","","",""],[5,2,2,"","","","",1,10,65,"","","","","","","","",""],[5,2,3,"","","","",1,10,70,"","","","","","","","",""],[5,3,1,"","","","",1,15,65,"","","","","","","","",""],[5,3,2,"","","","",1,15,80,"","","","","","","","",""],[5,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[5,5,1,"","","","",1,15,60,"","","","","","","","",""],[5,5,2,"","","","",1,15,65,"","","","","","","","",""],[5,5,3,"","","","",1,10,65,"","","","","","","","",""],[5,6,1,"","","","",1,25,65,"","","","","","","","",""],[5,6,2,"","","","",1,20,75,"","","","","","","","",""],[5,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[6,1,1,"","","","",1,25,60,"","","","","","","","",""],[6,1,2,"","","","",1,15,65,"","","","","","","","",""],[6,1,3,"","","","",1,10,75,"","","","","","","","",""],[6,2,1,"","","","",1,15,60,"","","","","","","","",""],[6,2,2,"","","","",1,10,65,"","","","","","","","",""],[6,2,3,"","","","",1,10,70,"","","","","","","","",""],[6,3,1,"","","","",1,15,65,"","","","","","","","",""],[6,3,2,"","","","",1,15,80,"","","","","","","","",""],[6,3,3,"","","","",1,25,90,"Mound","","","","","","","",""],[6,5,1,"","","","",1,15,60,"","","","","","","","",""],[6,5,2,"","","","",1,15,65,"","","","","","","","",""],[6,5,3,"","","","",1,10,65,"","","","","","","","",""],[6,6,1,"","","","",1,25,65,"","","","","","","","",""],[6,6,2,"","","","",1,20,75,"","","","","","","","",""],[6,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[7,1,1,"","","","",1,25,60,"","","","","","","","",""],[7,1,2,"","","","",1,15,65,"","","","","","","","",""],[7,1,3,"","","","",1,10,75,"","","","","","","","",""],[7,2,1,"","","","",1,15,60,"","","","","","","","",""],[7,2,2,"","","","",1,10,65,"","","","","","","","",""],[7,2,3,"","","","",1,10,70,"","","","","","","","",""],[7,3,1,"","","","",1,15,65,"","","","","","","","",""],[7,3,2,"","","","",1,15,80,"","","","","","","","",""],[7,3,3,"","","","",1,25,95,"Mound","","","","","","","",""],[7,5,1,"","","","",1,15,60,"","","","","","","","",""],[7,5,2,"","","","",1,15,65,"","","","","","","","",""],[7,5,3,"","","","",1,10,65,"","","","","","","","",""],[7,6,1,"","","","",1,25,65,"","","","","","","","",""],[7,6,2,"","","","",1,20,75,"","","","","","","","",""],[7,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[8,1,1,"","","","",1,25,60,"","","","","","","","",""],[8,1,2,"","","","",1,15,65,"","","","","","","","",""],[8,1,3,"","","","",1,10,75,"","","","","","","","",""],[8,2,1,"","","","",1,15,60,"","","","","","","","",""],[8,2,2,"","","","",1,10,65,"","","","","","","","",""],[8,2,3,"","","","",1,10,70,"","","","","","","","",""],[8,3,1,"","","","",1,15,65,"","","","","","","","",""],[8,3,2,"","","","",1,15,80,"","","","","","","","",""],[8,3,3,"","","","",1,25,90,"Mound","","","","","","","",""],[8,5,1,"","","","",1,15,60,"","","","","","","","",""],[8,5,2,"","","","",1,15,65,"","","","","","","","",""],[8,5,3,"","","","",1,10,65,"","","","","","","","",""],[8,6,1,"","","","",1,25,65,"","","","","","","","",""],[8,6,2,"","","","",1,20,75,"","","","","","","","",""],[8,6,3,"","","","",1,20,85,"Mound","","","","","","","",""]],"THR•RTT•18W•UCL REPAIR":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,5,1,"","","","",1,15,50,"","","","","","","","",""],[1,5,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,15,50,"","","","","","","","",""],[2,3,2,"","","","",1,15,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,15,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,50,"","","","","","","","",""],[3,1,2,"","","","",1,15,50,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,50,"","","","","","","","",""],[3,5,1,"","","","",1,15,50,"","","","","","","","",""],[3,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,50,"","","","","","","","",""],[4,1,2,"","","","",1,20,50,"","","","","","","","",""],[4,3,1,"","","","",1,15,50,"","","","","","","","",""],[4,3,2,"","","","",1,25,50,"","","","","","","","",""],[4,5,1,"","","","",1,20,50,"","","","","","","","",""],[4,5,2,"","","","",1,20,50,"","","","","","","","",""],[5,1,1,"","","","",1,20,50,"","","","","","","","",""],[5,1,2,"","","","",1,25,50,"","","","","","","","",""],[5,3,1,"","","","",1,20,50,"","","","","","","","",""],[5,3,2,"","","","",1,25,50,"","","","","","","","",""],[5,5,1,"","","","",1,20,50,"","","","","","","","",""],[5,5,2,"","","","",1,20,50,"","","","","","","","",""],[6,1,1,"","","","",1,25,50,"","","","","","","","",""],[6,1,2,"","","","",1,25,50,"","","","","","","","",""],[6,3,1,"","","","",1,20,50,"","","","","","","","",""],[6,3,2,"","","","",1,25,50,"","","","","","","","",""],[6,3,3,"","","","",1,10,50,"","","","","","","","",""],[6,5,1,"","","","",1,20,50,"","","","","","","","",""],[6,5,2,"","","","",1,25,50,"","","","","","","","",""],[7,1,1,"","","","",1,25,50,"","","","","","","","",""],[7,1,2,"","","","",1,25,50,"","","","","","","","",""],[7,1,3,"","","","",1,10,50,"","","","","","","","",""],[7,3,1,"","","","",1,20,50,"","","","","","","","",""],[7,3,2,"","","","",1,25,50,"","","","","","","","",""],[7,3,3,"","","","",1,15,50,"","","","","","","","",""],[7,5,1,"","","","",1,20,50,"","","","","","","","",""],[7,5,2,"","","","",1,25,50,"","","","","","","","",""],[7,5,3,"","","","",1,10,50,"","","","","","","","",""],[8,1,1,"","","","",1,15,50,"","","","","","","","",""],[8,1,2,"","","","",1,20,50,"","","","","","","","",""],[8,3,1,"","","","",1,15,50,"","","","","","","","",""],[8,3,2,"","","","",1,25,50,"","","","","","","","",""],[8,5,1,"","","","",1,20,50,"","","","","","","","",""],[8,5,2,"","","","",1,20,50,"","","","","","","","",""],[9,1,1,"","","","",1,20,55,"","","","","","","","",""],[9,1,2,"","","","",1,20,55,"","","","","","","","",""],[9,3,1,"","","","",1,20,50,"","","","","","","","",""],[9,3,2,"","","","",1,20,60,"","","","","","","","",""],[9,5,1,"","","","",1,15,55,"","","","","","","","",""],[9,5,2,"","","","",1,20,55,"","","","","","","","",""],[10,1,1,"","","","",1,20,55,"","","","","","","","",""],[10,1,2,"","","","",1,20,60,"","","","","","","","",""],[10,3,1,"","","","",1,20,55,"","","","","","","","",""],[10,3,2,"","","","",1,20,65,"","","","","","","","",""],[10,5,1,"","","","",1,15,55,"","","","","","","","",""],[10,5,2,"","","","",1,20,60,"","","","","","","","",""],[11,1,1,"","","","",1,20,55,"","","","","","","","",""],[11,1,2,"","","","",1,20,65,"","","","","","","","",""],[11,3,1,"","","","",1,15,55,"","","","","","","","",""],[11,3,2,"","","","",1,20,70,"","","","","","","","",""],[11,3,3,"","","","",1,10,75,"","","","","","","","",""],[11,5,1,"","","","",1,15,55,"","","","","","","","",""],[11,5,2,"","","","",1,20,60,"","","","","","","","",""],[12,1,1,"","","","",1,20,55,"","","","","","","","",""],[12,1,2,"","","","",1,20,65,"","","","","","","","",""],[12,1,3,"","","","",1,10,70,"","","","","","","","",""],[12,3,1,"","","","",1,15,55,"","","","","","","","",""],[12,3,2,"","","","",1,20,70,"","","","","","","","",""],[12,3,3,"","","","",1,10,75,"","","","","","","","",""],[12,5,1,"","","","",1,15,55,"","","","","","","","",""],[12,5,2,"","","","",1,20,65,"","","","","","","","",""],[12,5,3,"","","","",1,10,70,"","","","","","","","",""],[13,1,1,"","","","",1,20,60,"","","","","","","","",""],[13,1,2,"","","","",1,20,70,"","","","","","","","",""],[13,1,3,"","","","",1,10,75,"","","","","","","","",""],[13,3,1,"","","","",1,15,55,"","","","","","","","",""],[13,3,2,"","","","",1,20,70,"","","","","","","","",""],[13,3,3,"","","","",1,10,75,"","","","","","","","",""],[13,5,1,"","","","",1,15,60,"","","","","","","","",""],[13,5,2,"","","","",1,20,70,"","","","","","","","",""],[13,5,3,"","","","",1,10,75,"","","","","","","","",""],[14,1,1,"","","","",1,15,60,"","","","","","","","",""],[14,1,2,"","","","",1,15,60,"","","","","","","","",""],[14,1,3,"","","","",1,10,65,"","","","","","","","",""],[14,3,1,"","","","",1,15,60,"","","","","","","","",""],[14,3,2,"","","","",1,15,60,"","","","","","","","",""],[14,3,3,"","","","",1,10,65,"","","","","","","","",""],[14,5,1,"","","","",1,15,60,"","","","","","","","",""],[14,5,2,"","","","",1,15,60,"","","","","","","","",""],[14,5,3,"","","","",1,10,65,"","","","","","","","",""],[15,1,1,"","","","",1,25,50,"","","","","","","","",""],[15,1,2,"","","","",1,20,50,"","","","","","","","",""],[15,3,1,"","","","",1,15,60,"","","","","","","","",""],[15,3,2,"","","","",1,10,65,"","","","","","","","",""],[15,5,1,"","","","",1,20,50,"","","","","","","","",""],[15,5,2,"","","","",1,20,55,"","","","","","","","",""],[15,6,1,"","","","",1,15,55,"","","","","","","","",""],[15,6,2,"","","","",1,15,60,"","","","","","","","",""],[16,1,1,"","","","",1,25,50,"","","","","","","","",""],[16,1,2,"","","","",1,25,55,"","","","","","","","",""],[16,3,1,"","","","",1,15,65,"","","","","","","","",""],[16,3,2,"","","","",1,10,70,"","","","","","","","",""],[16,5,1,"","","","",1,25,55,"","","","","","","","",""],[16,5,2,"","","","",1,20,55,"","","","","","","","",""],[16,6,1,"","","","",1,15,60,"","","","","","","","",""],[16,6,2,"","","","",1,15,65,"","","","","","","","",""],[17,1,1,"","","","",1,25,55,"","","","","","","","",""],[17,1,2,"","","","",1,20,55,"","","","","","","","",""],[17,1,3,"","","","",1,15,55,"","","","","","","","",""],[17,3,1,"","","","",1,15,65,"","","","","","","","",""],[17,3,2,"","","","",1,10,70,"","","","","","","","",""],[17,3,3,"","","","",1,10,75,"","","","","","","","",""],[17,5,1,"","","","",1,25,55,"","","","","","","","",""],[17,5,2,"","","","",1,15,55,"","","","","","","","",""],[17,5,3,"","","","",1,15,60,"","","","","","","","",""],[17,6,1,"","","","",1,20,60,"","","","","","","","",""],[17,6,2,"","","","",1,20,70,"","","","","","","","",""],[18,1,1,"","","","",1,25,55,"","","","","","","","",""],[18,1,2,"","","","",1,20,55,"","","","","","","","",""],[18,1,3,"","","","",1,20,60,"","","","","","","","",""],[18,3,1,"","","","",1,15,65,"","","","","","","","",""],[18,3,2,"","","","",1,15,75,"","","","","","","","",""],[18,3,3,"","","","",1,10,75,"","","","","","","","",""],[18,5,1,"","","","",1,25,55,"","","","","","","","",""],[18,5,2,"","","","",1,20,60,"","","","","","","","",""],[18,5,3,"","","","",1,15,60,"","","","","","","","",""],[18,6,1,"","","","",1,25,65,"","","","","","","","",""],[18,6,2,"","","","",1,20,70,"","","","","","","","",""]],"THR•RTM•6W•UCL REPAIR":[[1,1,1,"","","","",1,25,60,"","","","","","","","",""],[1,1,2,"","","","",1,15,65,"","","","","","","","",""],[1,1,3,"","","","",1,15,75,"","","","","","","","",""],[1,3,1,"","","","",1,20,65,"","","","","","","","",""],[1,3,2,"","","","",1,15,80,"","","","","","","","",""],[1,3,3,"","","","",1,10,80,"Mound","","","","","","","",""],[1,5,1,"","","","",1,15,60,"","","","","","","","",""],[1,5,2,"","","","",1,15,65,"","","","","","","","",""],[1,5,3,"","","","",1,10,65,"","","","","","","","",""],[1,6,1,"","","","",1,20,65,"","","","","","","","",""],[1,6,2,"","","","",1,15,75,"","","","","","","","",""],[1,6,3,"","","","",1,10,80,"","","","","","","","",""],[2,1,1,"","","","",1,25,60,"","","","","","","","",""],[2,1,2,"","","","",1,15,65,"","","","","","","","",""],[2,1,3,"","","","",1,15,75,"","","","","","","","",""],[2,2,1,"","","","",1,10,60,"","","","","","","","",""],[2,2,2,"","","","",1,10,65,"","","","","","","","",""],[2,2,3,"","","","",1,10,70,"","","","","","","","",""],[2,3,1,"","","","",1,15,65,"","","","","","","","",""],[2,3,2,"","","","",1,15,80,"","","","","","","","",""],[2,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[2,5,1,"","","","",1,15,60,"","","","","","","","",""],[2,5,2,"","","","",1,15,65,"","","","","","","","",""],[2,6,1,"","","","",1,15,65,"","","","","","","","",""],[2,6,2,"","","","",1,10,75,"","","","","","","","",""],[2,6,3,"","","","",1,10,80,"","","","","","","","",""],[3,1,1,"","","","",1,25,60,"","","","","","","","",""],[3,1,2,"","","","",1,15,65,"","","","","","","","",""],[3,1,3,"","","","",1,10,75,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,3,2,"","","","",1,15,80,"","","","","","","","",""],[3,3,3,"","","","",1,20,85,"Mound","","","","","","","",""],[3,5,1,"","","","",1,15,60,"","","","","","","","",""],[3,5,2,"","","","",1,15,65,"","","","","","","","",""],[3,5,3,"","","","",1,10,65,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","",1,20,65,"","","","","","","","",""],[3,6,2,"","","","",1,15,75,"","","","","","","","",""],[3,6,3,"","","","",1,10,80,"","","","","","","","",""],[4,1,1,"","","","",1,25,60,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,1,3,"","","","",1,10,75,"","","","","","","","",""],[4,2,1,"","","","",1,10,60,"","","","","","","","",""],[4,2,2,"","","","",1,10,65,"","","","","","","","",""],[4,2,3,"","","","",1,10,70,"","","","","","","","",""],[4,3,1,"","","","",1,15,65,"","","","","","","","",""],[4,3,2,"","","","",1,15,80,"","","","","","","","",""],[4,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[4,5,1,"","","","",1,15,60,"","","","","","","","",""],[4,5,2,"","","","",1,15,65,"","","","","","","","",""],[4,6,1,"","","","",1,15,65,"","","","","","","","",""],[4,6,2,"","","","",1,10,75,"","","","","","","","",""],[4,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[5,1,1,"","","","",1,25,60,"","","","","","","","",""],[5,1,2,"","","","",1,15,65,"","","","","","","","",""],[5,1,3,"","","","",1,10,75,"","","","","","","","",""],[5,2,1,"","","","",1,10,60,"","","","","","","","",""],[5,2,2,"","","","",1,10,65,"","","","","","","","",""],[5,2,3,"","","","",1,10,70,"","","","","","","","",""],[5,3,1,"","","","",1,15,65,"","","","","","","","",""],[5,3,2,"","","","",1,15,80,"","","","","","","","",""],[5,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[5,5,1,"","","","",1,15,60,"","","","","","","","",""],[5,5,2,"","","","",1,15,65,"","","","","","","","",""],[5,5,3,"","","","",1,10,65,"","","","","","","","",""],[5,6,1,"","","","",1,15,65,"","","","","","","","",""],[5,6,2,"","","","",1,10,75,"","","","","","","","",""],[5,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[6,1,1,"","","","",1,25,60,"","","","","","","","",""],[6,1,2,"","","","",1,15,65,"","","","","","","","",""],[6,1,3,"","","","",1,10,75,"","","","","","","","",""],[6,2,1,"","","","",1,15,60,"","","","","","","","",""],[6,2,2,"","","","",1,10,65,"","","","","","","","",""],[6,2,3,"","","","",1,10,70,"","","","","","","","",""],[6,3,1,"","","","",1,15,65,"","","","","","","","",""],[6,3,2,"","","","",1,15,80,"","","","","","","","",""],[6,3,3,"","","","",1,25,85,"Mound","","","","","","","",""],[6,5,1,"","","","",1,15,60,"","","","","","","","",""],[6,5,2,"","","","",1,15,65,"","","","","","","","",""],[6,6,1,"","","","",1,15,65,"","","","","","","","",""],[6,6,2,"","","","",1,10,75,"","","","","","","","",""],[6,6,3,"","","","",1,15,90,"Mound","","","","","","","",""]],"THR•RTT•10W•UCL SPRAIN G2":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,5,1,"","","","",1,15,50,"","","","","","","","",""],[1,5,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,20,50,"","","","","","","","",""],[2,3,2,"","","","",1,15,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,15,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,50,"","","","","","","","",""],[3,1,2,"","","","",1,15,50,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,25,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,50,"","","","","","","","",""],[3,5,1,"","","","",1,15,50,"","","","","","","","",""],[3,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,50,"","","","","","","","",""],[4,1,2,"","","","",1,20,50,"","","","","","","","",""],[4,3,1,"","","","",1,25,50,"","","","","","","","",""],[4,3,2,"","","","",1,25,50,"","","","","","","","",""],[4,5,1,"","","","",1,20,50,"","","","","","","","",""],[4,5,2,"","","","",1,20,50,"","","","","","","","",""],[5,1,1,"","","","",1,15,55,"","","","","","","","",""],[5,1,2,"","","","",1,15,60,"","","","","","","","",""],[5,3,1,"","","","",1,20,50,"","","","","","","","",""],[5,3,2,"","","","",1,20,65,"","","","","","","","",""],[5,5,1,"","","","",1,15,55,"","","","","","","","",""],[5,5,2,"","","","",1,15,55,"","","","","","","","",""],[6,1,1,"","","","",1,15,55,"","","","","","","","",""],[6,1,2,"","","","",1,15,65,"","","","","","","","",""],[6,3,1,"","","","",1,15,60,"","","","","","","","",""],[6,3,2,"","","","",1,20,70,"","","","","","","","",""],[6,5,1,"","","","",1,15,55,"","","","","","","","",""],[6,5,2,"","","","",1,15,60,"","","","","","","","",""],[7,1,1,"","","","",1,20,60,"","","","","","","","",""],[7,1,2,"","","","",1,15,65,"","","","","","","","",""],[7,3,1,"","","","",1,15,65,"","","","","","","","",""],[7,3,2,"","","","",1,20,75,"","","","","","","","",""],[7,5,1,"","","","",1,15,60,"","","","","","","","",""],[7,5,2,"","","","",1,15,65,"","","","","","","","",""],[8,1,1,"","","","",1,15,55,"","","","","","","","",""],[8,1,2,"","","","",1,15,55,"","","","","","","","",""],[8,3,1,"","","","",1,20,55,"","","","","","","","",""],[8,3,2,"","","","",1,15,55,"","","","","","","","",""],[8,5,1,"","","","",1,15,55,"","","","","","","","",""],[8,5,2,"","","","",1,15,55,"","","","","","","","",""],[9,1,1,"","","","",1,20,55,"","","","","","","","",""],[9,1,2,"","","","",1,15,60,"","","","","","","","",""],[9,1,3,"","","","",1,10,65,"","","","","","","","",""],[9,3,1,"","","","",1,10,65,"","","","","","","","",""],[9,3,2,"","","","",1,10,75,"","","","","","","","",""],[9,3,3,"","","","",1,10,85,"","","","","","","","",""],[9,5,1,"","","","",1,15,60,"","","","","","","","",""],[9,5,2,"","","","",1,15,60,"","","","","","","","",""],[9,5,3,"","","","",1,10,65,"","","","","","","","",""],[9,6,1,"","","","",1,15,65,"","","","","","","","",""],[9,6,2,"","","","",1,10,70,"","","","","","","","",""],[9,6,3,"","","","",1,10,80,"","","","","","","","",""],[10,1,1,"","","","",1,20,60,"","","","","","","","",""],[10,1,2,"","","","",1,15,60,"","","","","","","","",""],[10,1,3,"","","","",1,10,65,"","","","","","","","",""],[10,3,1,"","","","",1,10,65,"","","","","","","","",""],[10,3,2,"","","","",1,10,80,"","","","","","","","",""],[10,3,3,"","","","",1,10,85,"","","","","","","","",""],[10,5,1,"","","","",1,15,60,"","","","","","","","",""],[10,5,2,"","","","",1,15,65,"","","","","","","","",""],[10,5,3,"","","","",1,10,65,"","","","","","","","",""],[10,6,1,"","","","",1,15,65,"","","","","","","","",""],[10,6,2,"","","","",1,10,75,"","","","","","","","",""],[10,6,3,"","","","",1,10,80,"","","","","","","","",""]],"THR•RTM•6W•UCL SPRAIN G2":[[1,1,1,"","","","",1,25,60,"","","","","","","","",""],[1,1,2,"","","","",1,15,65,"","","","","","","","",""],[1,1,3,"","","","",1,10,75,"","","","","","","","",""],[1,3,1,"","","","",1,15,65,"","","","","","","","",""],[1,3,2,"","","","",1,15,80,"","","","","","","","",""],[1,3,3,"","","","",1,10,85,"Mound","","","","","","","",""],[1,5,1,"","","","",1,15,60,"","","","","","","","",""],[1,5,2,"","","","",1,15,65,"","","","","","","","",""],[1,5,3,"","","","",1,10,65,"","","","","","","","",""],[1,6,1,"","","","",1,15,65,"","","","","","","","",""],[1,6,2,"","","","",1,10,75,"","","","","","","","",""],[1,6,3,"","","","",1,10,80,"","","","","","","","",""],[2,1,1,"","","","",1,25,60,"","","","","","","","",""],[2,1,2,"","","","",1,15,65,"","","","","","","","",""],[2,1,3,"","","","",1,10,75,"","","","","","","","",""],[2,2,1,"","","","",1,10,60,"","","","","","","","",""],[2,2,2,"","","","",1,10,65,"","","","","","","","",""],[2,2,3,"","","","",1,10,70,"","","","","","","","",""],[2,3,1,"","","","",1,15,65,"","","","","","","","",""],[2,3,2,"","","","",1,15,80,"","","","","","","","",""],[2,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[2,5,1,"","","","",1,15,60,"","","","","","","","",""],[2,5,2,"","","","",1,15,65,"","","","","","","","",""],[2,6,1,"","","","",1,15,65,"","","","","","","","",""],[2,6,2,"","","","",1,10,75,"","","","","","","","",""],[2,6,3,"","","","",1,10,80,"","","","","","","","",""],[3,1,1,"","","","",1,25,60,"","","","","","","","",""],[3,1,2,"","","","",1,15,65,"","","","","","","","",""],[3,1,3,"","","","",1,10,75,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,3,2,"","","","",1,15,80,"","","","","","","","",""],[3,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[3,5,1,"","","","",1,15,60,"","","","","","","","",""],[3,5,2,"","","","",1,15,65,"","","","","","","","",""],[3,5,3,"","","","",1,10,65,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,6,2,"","","","",1,10,75,"","","","","","","","",""],[3,6,3,"","","","",1,10,80,"","","","","","","","",""],[4,1,1,"","","","",1,25,60,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,1,3,"","","","",1,10,75,"","","","","","","","",""],[4,2,1,"","","","",1,10,60,"","","","","","","","",""],[4,2,2,"","","","",1,10,65,"","","","","","","","",""],[4,2,3,"","","","",1,10,70,"","","","","","","","",""],[4,3,1,"","","","",1,15,65,"","","","","","","","",""],[4,3,2,"","","","",1,15,80,"","","","","","","","",""],[4,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[4,5,1,"","","","",1,15,60,"","","","","","","","",""],[4,5,2,"","","","",1,15,65,"","","","","","","","",""],[4,6,1,"","","","",1,15,65,"","","","","","","","",""],[4,6,2,"","","","",1,10,75,"","","","","","","","",""],[4,6,3,"","","","",1,15,80,"","","","","","","","",""],[5,1,1,"","","","",1,25,60,"","","","","","","","",""],[5,1,2,"","","","",1,15,65,"","","","","","","","",""],[5,1,3,"","","","",1,10,75,"","","","","","","","",""],[5,2,1,"","","","",1,10,60,"","","","","","","","",""],[5,2,2,"","","","",1,10,65,"","","","","","","","",""],[5,2,3,"","","","",1,10,70,"","","","","","","","",""],[5,3,1,"","","","",1,15,65,"","","","","","","","",""],[5,3,2,"","","","",1,15,80,"","","","","","","","",""],[5,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[5,5,1,"","","","",1,15,60,"","","","","","","","",""],[5,5,2,"","","","",1,15,65,"","","","","","","","",""],[5,5,3,"","","","",1,10,65,"","","","","","","","",""],[5,6,1,"","","","",1,15,65,"","","","","","","","",""],[5,6,2,"","","","",1,15,75,"","","","","","","","",""],[5,6,3,"","","","",1,15,80,"Mound","","","","","","","",""],[6,1,1,"","","","",1,25,60,"","","","","","","","",""],[6,1,2,"","","","",1,15,65,"","","","","","","","",""],[6,1,3,"","","","",1,10,75,"","","","","","","","",""],[6,2,1,"","","","",1,10,60,"","","","","","","","",""],[6,2,2,"","","","",1,10,65,"","","","","","","","",""],[6,2,3,"","","","",1,10,70,"","","","","","","","",""],[6,3,1,"","","","",1,15,65,"","","","","","","","",""],[6,3,2,"","","","",1,15,80,"","","","","","","","",""],[6,3,3,"","","","",1,25,85,"Mound","","","","","","","",""],[6,5,1,"","","","",1,15,60,"","","","","","","","",""],[6,5,2,"","","","",1,15,65,"","","","","","","","",""],[6,6,1,"","","","",1,15,65,"","","","","","","","",""],[6,6,2,"","","","",1,15,75,"","","","","","","","",""],[6,6,3,"","","","",1,15,90,"Mound","","","","","","","",""]],"THR•RTT•8W•UCL SPRAIN G1":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,4,1,"Off","","","",1,15,50,"","","","","","","","",""],[1,4,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,20,50,"","","","","","","","",""],[2,3,2,"","","","",1,15,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,15,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,50,"","","","","","","","",""],[3,1,2,"","","","",1,15,50,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,25,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,50,"","","","","","","","",""],[3,5,1,"","","","",1,15,50,"","","","","","","","",""],[3,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,55,"","","","","","","","",""],[4,1,2,"","","","",1,15,60,"","","","","","","","",""],[4,3,1,"","","","",1,20,50,"","","","","","","","",""],[4,3,2,"","","","",1,20,65,"","","","","","","","",""],[4,5,1,"","","","",1,15,55,"","","","","","","","",""],[4,5,2,"","","","",1,15,55,"","","","","","","","",""],[5,1,1,"","","","",1,15,55,"","","","","","","","",""],[5,1,2,"","","","",1,15,65,"","","","","","","","",""],[5,3,1,"","","","",1,15,60,"","","","","","","","",""],[5,3,2,"","","","",1,20,70,"","","","","","","","",""],[5,5,1,"","","","",1,15,55,"","","","","","","","",""],[5,5,2,"","","","",1,15,60,"","","","","","","","",""],[6,1,1,"","","","",1,15,55,"","","","","","","","",""],[6,1,2,"","","","",1,15,55,"","","","","","","","",""],[6,3,1,"","","","",1,20,55,"","","","","","","","",""],[6,3,2,"","","","",1,15,55,"","","","","","","","",""],[6,5,1,"","","","",1,15,55,"","","","","","","","",""],[6,5,2,"","","","",1,15,55,"","","","","","","","",""],[7,1,1,"","","","",1,20,55,"","","","","","","","",""],[7,1,2,"","","","",1,15,60,"","","","","","","","",""],[7,1,3,"","","","",1,10,65,"","","","","","","","",""],[7,3,1,"","","","",1,10,65,"","","","","","","","",""],[7,3,2,"","","","",1,10,75,"","","","","","","","",""],[7,3,3,"","","","",1,10,85,"","","","","","","","",""],[7,5,1,"","","","",1,15,60,"","","","","","","","",""],[7,5,2,"","","","",1,15,60,"","","","","","","","",""],[7,5,3,"","","","",1,10,65,"","","","","","","","",""],[7,6,1,"","","","",1,15,65,"","","","","","","","",""],[7,6,2,"","","","",1,10,70,"","","","","","","","",""],[7,6,3,"","","","",1,10,80,"","","","","","","","",""],[8,1,1,"","","","",1,20,60,"","","","","","","","",""],[8,1,2,"","","","",1,15,60,"","","","","","","","",""],[8,1,3,"","","","",1,10,65,"","","","","","","","",""],[8,3,1,"","","","",1,10,65,"","","","","","","","",""],[8,3,2,"","","","",1,10,80,"","","","","","","","",""],[8,3,3,"","","","",1,10,85,"","","","","","","","",""],[8,5,1,"","","","",1,15,60,"","","","","","","","",""],[8,5,2,"","","","",1,15,65,"","","","","","","","",""],[8,5,3,"","","","",1,10,65,"","","","","","","","",""],[8,6,1,"","","","",1,15,65,"","","","","","","","",""],[8,6,2,"","","","",1,10,75,"","","","","","","","",""],[8,6,3,"","","","",1,10,80,"","","","","","","","",""]],"THR•RTM•4W•UCL SPRAIN G1":[[1,1,1,"","","","",1,25,60,"","","","","","","","",""],[1,1,2,"","","","",1,15,65,"","","","","","","","",""],[1,1,3,"","","","",1,10,75,"","","","","","","","",""],[1,3,1,"","","","",1,15,65,"","","","","","","","",""],[1,3,2,"","","","",1,15,80,"","","","","","","","",""],[1,3,3,"","","","",1,10,85,"Mound","","","","","","","",""],[1,5,1,"","","","",1,15,60,"","","","","","","","",""],[1,5,2,"","","","",1,15,65,"","","","","","","","",""],[1,5,3,"","","","",1,10,65,"","","","","","","","",""],[1,6,1,"","","","",1,15,65,"","","","","","","","",""],[1,6,2,"","","","",1,10,75,"","","","","","","","",""],[1,6,3,"","","","",1,10,80,"","","","","","","","",""],[2,1,1,"","","","",1,25,60,"","","","","","","","",""],[2,1,2,"","","","",1,15,65,"","","","","","","","",""],[2,1,3,"","","","",1,10,75,"","","","","","","","",""],[2,2,1,"","","","",1,10,60,"","","","","","","","",""],[2,2,2,"","","","",1,10,65,"","","","","","","","",""],[2,2,3,"","","","",1,10,70,"","","","","","","","",""],[2,3,1,"","","","",1,15,65,"","","","","","","","",""],[2,3,2,"","","","",1,15,80,"","","","","","","","",""],[2,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[2,5,1,"","","","",1,15,60,"","","","","","","","",""],[2,5,2,"","","","",1,15,65,"","","","","","","","",""],[2,6,1,"","","","",1,15,65,"","","","","","","","",""],[2,6,2,"","","","",1,10,75,"","","","","","","","",""],[2,6,3,"","","","",1,10,80,"","","","","","","","",""],[3,1,1,"","","","",1,25,60,"","","","","","","","",""],[3,1,2,"","","","",1,15,65,"","","","","","","","",""],[3,1,3,"","","","",1,10,75,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,3,2,"","","","",1,15,80,"","","","","","","","",""],[3,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[3,5,1,"","","","",1,15,60,"","","","","","","","",""],[3,5,2,"","","","",1,15,65,"","","","","","","","",""],[3,5,3,"","","","",1,10,65,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,6,2,"","","","",1,10,75,"","","","","","","","",""],[3,6,3,"","","","",1,10,80,"Mound","","","","","","","",""],[4,1,1,"","","","",1,25,60,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,1,3,"","","","",1,10,75,"","","","","","","","",""],[4,2,1,"","","","",1,10,60,"","","","","","","","",""],[4,2,2,"","","","",1,10,65,"","","","","","","","",""],[4,2,3,"","","","",1,10,70,"","","","","","","","",""],[4,3,1,"","","","",1,15,65,"","","","","","","","",""],[4,3,2,"","","","",1,15,80,"","","","","","","","",""],[4,3,3,"","","","",1,20,85,"Mound","","","","","","","",""],[4,5,1,"","","","",1,15,60,"","","","","","","","",""],[4,5,2,"","","","",1,15,65,"","","","","","","","",""],[4,6,1,"","","","",1,15,65,"","","","","","","","",""],[4,6,2,"","","","",1,10,75,"","","","","","","","",""],[4,6,3,"","","","",1,15,90,"Mound","","","","","","","",""]],"THR•RTT•6W•ELBOW PAIN":[[1,1,1,"","","","",1,15,50,"","","","","","","","",""],[1,1,2,"","","","",1,10,50,"","","","","","","","",""],[1,3,1,"","","","",1,15,50,"","","","","","","","",""],[1,3,2,"","","","",1,15,50,"","","","","","","","",""],[1,5,1,"","","","",1,15,50,"","","","","","","","",""],[1,5,2,"","","","",1,10,50,"","","","","","","","",""],[2,1,1,"","","","",1,15,50,"","","","","","","","",""],[2,1,2,"","","","",1,15,50,"","","","","","","","",""],[2,3,1,"","","","",1,25,50,"","","","","","","","",""],[2,3,2,"","","","",1,20,50,"","","","","","","","",""],[2,5,1,"","","","",1,15,50,"","","","","","","","",""],[2,5,2,"","","","",1,20,50,"","","","","","","","",""],[3,1,1,"","","","",1,15,55,"","","","","","","","",""],[3,1,2,"","","","",1,15,60,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,20,50,"","","","","","","","",""],[3,3,2,"","","","",1,20,65,"","","","","","","","",""],[3,5,1,"","","","",1,15,55,"","","","","","","","",""],[3,5,2,"","","","",1,15,55,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","","","","","","","","","","","","",""],[4,1,1,"","","","",1,15,55,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,3,1,"","","","",1,15,60,"","","","","","","","",""],[4,3,2,"","","","",1,20,70,"","","","","","","","",""],[4,5,1,"","","","",1,15,55,"","","","","","","","",""],[4,5,2,"","","","",1,15,60,"","","","","","","","",""],[5,1,1,"","","","",1,20,55,"","","","","","","","",""],[5,1,2,"","","","",1,15,60,"","","","","","","","",""],[5,1,3,"","","","",1,10,65,"","","","","","","","",""],[5,3,1,"","","","",1,10,65,"","","","","","","","",""],[5,3,2,"","","","",1,10,75,"","","","","","","","",""],[5,3,3,"","","","",1,10,85,"","","","","","","","",""],[5,5,1,"","","","",1,15,60,"","","","","","","","",""],[5,5,2,"","","","",1,15,60,"","","","","","","","",""],[5,5,3,"","","","",1,10,65,"","","","","","","","",""],[5,6,1,"","","","",1,15,65,"","","","","","","","",""],[5,6,2,"","","","",1,10,70,"","","","","","","","",""],[5,6,3,"","","","",1,10,80,"","","","","","","","",""],[6,1,1,"","","","",1,20,60,"","","","","","","","",""],[6,1,2,"","","","",1,15,60,"","","","","","","","",""],[6,1,3,"","","","",1,10,65,"","","","","","","","",""],[6,3,1,"","","","",1,10,65,"","","","","","","","",""],[6,3,2,"","","","",1,10,80,"","","","","","","","",""],[6,3,3,"","","","",1,10,85,"","","","","","","","",""],[6,5,1,"","","","",1,15,60,"","","","","","","","",""],[6,5,2,"","","","",1,15,65,"","","","","","","","",""],[6,5,3,"","","","",1,10,65,"","","","","","","","",""],[6,6,1,"","","","",1,15,65,"","","","","","","","",""],[6,6,2,"","","","",1,10,75,"","","","","","","","",""],[6,6,3,"","","","",1,10,80,"","","","","","","","",""]],"THR•RTM•4W•ELBOW PAIN":[[1,1,1,"","","","",1,25,60,"","","","","","","","",""],[1,1,2,"","","","",1,15,65,"","","","","","","","",""],[1,1,3,"","","","",1,10,75,"","","","","","","","",""],[1,3,1,"","","","",1,15,65,"","","","","","","","",""],[1,3,2,"","","","",1,15,80,"","","","","","","","",""],[1,3,3,"","","","",1,10,85,"Mound","","","","","","","",""],[1,5,1,"","","","",1,15,60,"","","","","","","","",""],[1,5,2,"","","","",1,15,65,"","","","","","","","",""],[1,5,3,"","","","",1,10,65,"","","","","","","","",""],[1,6,1,"","","","",1,15,65,"","","","","","","","",""],[1,6,2,"","","","",1,10,75,"","","","","","","","",""],[1,6,3,"","","","",1,10,80,"","","","","","","","",""],[2,1,1,"","","","",1,25,60,"","","","","","","","",""],[2,1,2,"","","","",1,15,65,"","","","","","","","",""],[2,1,3,"","","","",1,10,75,"","","","","","","","",""],[2,2,1,"","","","",1,10,60,"","","","","","","","",""],[2,2,2,"","","","",1,10,65,"","","","","","","","",""],[2,2,3,"","","","",1,10,70,"","","","","","","","",""],[2,3,1,"","","","",1,15,65,"","","","","","","","",""],[2,3,2,"","","","",1,15,80,"","","","","","","","",""],[2,3,3,"","","","",1,15,85,"Mound","","","","","","","",""],[2,5,1,"","","","",1,15,60,"","","","","","","","",""],[2,5,2,"","","","",1,15,65,"","","","","","","","",""],[2,6,1,"","","","",1,15,65,"","","","","","","","",""],[2,6,2,"","","","",1,10,75,"","","","","","","","",""],[2,6,3,"","","","",1,10,80,"Mound","","","","","","","",""],[3,1,1,"","","","",1,25,60,"","","","","","","","",""],[3,1,2,"","","","",1,15,65,"","","","","","","","",""],[3,1,3,"","","","",1,10,75,"","","","","","","","",""],[3,3,1,"5-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,3,2,"","","","",1,15,80,"","","","","","","","",""],[3,3,3,"","","","",1,20,90,"Mound","","","","","","","",""],[3,5,1,"","","","",1,15,60,"","","","","","","","",""],[3,5,2,"","","","",1,15,65,"","","","","","","","",""],[3,5,3,"","","","",1,10,65,"","","","","","","","",""],[3,6,1,"6-Progression B, RP4","","","",1,15,65,"","","","","","","","",""],[3,6,2,"","","","",1,10,75,"","","","","","","","",""],[3,6,3,"","","","",1,10,80,"","","","","","","","",""],[4,1,1,"","","","",1,25,60,"","","","","","","","",""],[4,1,2,"","","","",1,15,65,"","","","","","","","",""],[4,1,3,"","","","",1,10,75,"","","","","","","","",""],[4,2,1,"","","","",1,10,60,"","","","","","","","",""],[4,2,2,"","","","",1,10,65,"","","","","","","","",""],[4,2,3,"","","","",1,10,70,"","","","","","","","",""],[4,3,1,"","","","",1,15,65,"","","","","","","","",""],[4,3,2,"","","","",1,15,80,"","","","","","","","",""],[4,3,3,"","","","",1,20,85,"Mound","","","","","","","",""],[4,5,1,"","","","",1,15,60,"","","","","","","","",""],[4,5,2,"","","","",1,15,65,"","","","","","","","",""],[4,6,1,"","","","",1,15,65,"","","","","","","","",""],[4,6,2,"","","","",1,10,75,"","","","","","","","",""],[4,6,3,"","","","",1,15,90,"","","","","","","","",""]]},"programs":[{"name":"Restructure Volume (REVO)","code":"REVO","uses":true,"weeks":4},{"name":"Restructure Intensity (REIN)","code":"REIN","uses":true,"weeks":4},{"name":"Energy Volume (ENVO)","code":"ENVO","uses":true,"weeks":4},{"name":"Energy Intensity (ENIN)","code":"ENIN","uses":true,"weeks":4},{"name":"Wattage (WATT)","code":"WATT","uses":true,"weeks":4},{"name":"Integrate (INT)","code":"INT","uses":true,"weeks":4},{"name":"Refine (REF)","code":"REF","uses":true,"weeks":4},{"name":"Engage (ENG)","code":"ENG","uses":true,"weeks":4},{"name":"THR•RTT•32W•UCL REVISION","code":"THR•RTT•32W•UCL REVISION","uses":false,"weeks":32},{"name":"THR•RTT•24W•UCL HYBRID","code":"THR•RTT•24W•UCL HYBRID","uses":false,"weeks":24},{"name":"THR•RTM•8W•UCL HYBRID","code":"THR•RTM•8W•UCL HYBRID","uses":false,"weeks":8},{"name":"THR•RTT•18W•UCL REPAIR","code":"THR•RTT•18W•UCL REPAIR","uses":false,"weeks":18},{"name":"THR•RTM•6W•UCL REPAIR","code":"THR•RTM•6W•UCL REPAIR","uses":false,"weeks":8},{"name":"THR•RTT•10W•UCL SPRAIN G2","code":"THR•RTT•10W•UCL SPRAIN G2","uses":false,"weeks":10},{"name":"THR•RTM•6W•UCL SPRAIN G2","code":"THR•RTM•6W•UCL SPRAIN G2","uses":false,"weeks":6},{"name":"THR•RTT•8W•UCL SPRAIN G1","code":"THR•RTT•8W•UCL SPRAIN G1","uses":false,"weeks":8},{"name":"THR•RTM•4W•UCL SPRAIN G1","code":"THR•RTM•4W•UCL SPRAIN G1","uses":false,"weeks":4},{"name":"THR•RTT•6W•ELBOW PAIN","code":"THR•RTT•6W•ELBOW PAIN","uses":false,"weeks":6},{"name":"THR•RTM•4W•ELBOW PAIN","code":"THR•RTM•4W•ELBOW PAIN","uses":false,"weeks":4}],"map":{"REVO1":"REVO L1","REVO2":"REVO L1","REVO3":"REVO L1","REIN1":"REIN L1","REIN2":"REIN L1","REIN3":"REIN L1","ENVO1":"ENVO","ENVO2":"ENVO","ENVO3":"ENVO","ENIN1":"ENIN","ENIN2":"ENIN","ENIN3":"ENIN","WATT1":"WATT","WATT2":"WATT","WATT3":"WATT","INT1":"INT","INT2":"INT","INT3":"INT","REF1":"REF","REF2":"REF","REF3":"REF","ENG1":"ENG","ENG2":"ENG","ENG3":"ENG"},"focus":["Global","Vertical Force","Linear Force","Lateral Force","Lower Rotation","Upper Rotation","Upper Deceleration","Lower Deceleration"],"drills":[["Seated Glute Load Throw","Drive Leg Loading Flow : Level 1A"],["Rocker Throw","Drive Leg Loading Flow : Level 1A"],["Rocker Throw w/ Front Foot Lift","Drive Leg Loading Flow : Level 1A"],["Rear Foot Elevated Reverse Drop In Throw","Drive Leg Loading Flow : Level 1A"],["Lateral Pendulum Mound Throw","Global Mound Blend : Level 1"],["Darvish Mound Throws","Global Mound Blend : Level 1"],["Kikuchi Mound Throw","Global Mound Blend : Level 1"],["Kneeling Neutral Tap & Go","Global Progression : Level 1"],["Tracer Pick Up Throw","Global Progression : Level 1"],["Run-Stop-Spin Throw","Global Progression : Level 1"],["Reactive Rebounders","Global Progression : Level 1"],["Hands Over Head Walking Windup","Global Progression : Level 1"],["Lateral Figure 8 Mound Throw","Global Progression : Level 1"],["Anchored Kneeling Throws*Flow","Global Progression : Level 2"],["High Step Forward Baseball Throw","Global Progression : Level 2"],["Run and Round Throw","Global Progression : Level 2"],["Jeter Baseball Throw","Global Progression : Level 2"],["Rotational Horizontal Step Back Baseball Throw","Horizontal Flow : Level 1A"],["Rotational Horizontal Step Forward Baseball Throw","Horizontal Flow : Level 1A"],["Horizontal Step Backward Baseball Throw","Horizontal Flow : Level 1A"],["Horizontal Step Forward Baseball Throw","Horizontal Flow : Level 1A"],["Horizontal Step Backward Football Throw","Horizontal Flow : Level 1B"],["Horizontal Step Forward Football Throw","Horizontal Flow : Level 1B"],["Rotational Horizontal Step Back Football Throw","Horizontal Flow : Level 1B"],["Rotational Horizontal Step Forward Football Throw","Horizontal Flow : Level 1B"],["Horizontal Step Backward Baseball Catch Throw","Horizontal Flow : Level 1C"],["Horizontal Step Forward Baseball Catch Throw","Horizontal Flow : Level 1C"],["Rotational Horizontal Step Back Baseball Catch Throw","Horizontal Flow : Level 1C"],["Rotational Horizontal Step Forward Baseball Catch Throw","Horizontal Flow : Level 1C"],["Horizontal Step Backward Rewire Catch Throw","Horizontal Flow : Level 1D"],["Horizontal Step Forward Rewire Catch Throw","Horizontal Flow : Level 1D"],["Rotational Horizontal Step Back Rewire Catch Throw","Horizontal Flow : Level 1D"],["Rotational Horizontal Step Forward Rewire Catch Throw","Horizontal Flow : Level 1D"],["Horizontal Multi Hop Backward Baseball Throw","Horizontal Flow : Level 2A"],["Horizontal Multi Hop Forward Baseball Throw","Horizontal Flow : Level 2A"],["Rotational Horizontal Multi Hop Backward Baseball Throw","Horizontal Flow : Level 2A"],["Rotational Horizontal Multi Hop Forward Baseball Throw","Horizontal Flow : Level 2A"],["Horizontal Multi Hop Backward Football Throw","Horizontal Flow : Level 2B"],["Horizontal Multi Hop Forward Football Throw","Horizontal Flow : Level 2B"],["Rotational Horizontal Multi Hop Backward Football Throw","Horizontal Flow : Level 2B"],["Rotational Horizontal Multi Hop Forward Football Throw","Horizontal Flow : Level 2B"],["Horizontal Multi Hop Backward Baseball Catch Throw","Horizontal Flow : Level 2C"],["Horizontal Multi Hop Forward Baseball Catch Throw","Horizontal Flow : Level 2C"],["Rotational Horizontal Multi Hop Backward Baseball Catch Throw","Horizontal Flow : Level 2C"],["Rotational Horizontal Multi Hop Forward Baseball Catch Throw","Horizontal Flow : Level 2C"],["Horizontal Multi Hop Backward Rewire Catch Throw","Horizontal Flow : Level 2D"],["Horizontal Multi Hop Forward Rewire Catch Throw","Horizontal Flow : Level 2D"],["Rotational Horizontal Multi Hop Backward Rewire Catch Throw","Horizontal Flow : Level 2D"],["Rotational Horizontal Multi Hop Forward Rewire Catch Throw","Horizontal Flow : Level 2D"],["Horizontal Walk Backward Baseball Throw","Horizontal Flow : Level 3A"],["Horizontal Walk Forward Baseball Throw","Horizontal Flow : Level 3A"],["Horizontal Back Pedal Baseball Throw","Horizontal Flow : Level 3A"],["Horizontal Run Forward Baseball Throw","Horizontal Flow : Level 3A"],["Horizontal Walk Backward Football Throw","Horizontal Flow : Level 3B"],["Horizontal Walk Forward Football Throw","Horizontal Flow : Level 3B"],["Horizontal Back Pedal Football Throw","Horizontal Flow : Level 3B"],["Horizontal Run Forward Football Throw","Horizontal Flow : Level 3B"],["Horizontal Walk Backward Baseball Catch Throw","Horizontal Flow : Level 3C"],["Horizontal Walk Forward Baseball Catch Throw","Horizontal Flow : Level 3C"],["Horizontal Back Pedal Baseball Catch Throw","Horizontal Flow : Level 3C"],["Horizontal Run Forward Baseball Catch Throw","Horizontal Flow : Level 3C"],["Horizontal Walk Backward Rewire Catch Throw","Horizontal Flow : Level 3D"],["Horizontal Walk Forward Rewire Catch Throw","Horizontal Flow : Level 3D"],["Horizontal Back Pedal Rewire Catch Throw","Horizontal Flow : Level 3D"],["Horizontal Run Forward Rewire Catch Throw","Horizontal Flow : Level 3D"],["Forward Shuffle Flow Baseball Throw","Lateral Flow : Level 1A"],["Backward Shuffle Flow Baseball Throw","Lateral Flow : Level 1A"],["Forward Carioca Shuffle Baseball Throw","Lateral Flow : Level 1A"],["Backward Carioca Shuffle Baseball Throw","Lateral Flow : Level 1A"],["Forward Shuffle Flow Football Throw","Lateral Flow : Level 1B"],["Backward Shuffle Flow Football Throw","Lateral Flow : Level 1B"],["Forward Carioca Shuffle Football Throw","Lateral Flow : Level 1B"],["Backward Carioca Shuffle Football Throw","Lateral Flow : Level 1B"],["Forward Shuffle Flow Baseball Catch Throw","Lateral Flow : Level 1C"],["Backward Shuffle Flow Baseball Catch Throw","Lateral Flow : Level 1C"],["Forward Carioca Shuffle Baseball Catch Throw","Lateral Flow : Level 1C"],["Backward Carioca Shuffle Baseball Catch Throw","Lateral Flow : Level 1C"],["Forward Shuffle Flow Rewire Catch Throw","Lateral Flow : Level 1D"],["Backward Shuffle Flow Rewire Catch Throw","Lateral Flow : Level 1D"],["Forward Carioca Shuffle Rewire Catch Throw","Lateral Flow : Level 1D"],["Backward Carioca Shuffle Rewire Catch Throw","Lateral Flow : Level 1D"],["Drive Leg Hop Baseball Throw","Lateral Flow : Level 2A"],["Drive Leg Multi Hop Baseball Throw","Lateral Flow : Level 2A"],["Rotational Step Back Baseball Throw","Lateral Flow : Level 2A"],["Rotational Multi Hop Baseball Throw","Lateral Flow : Level 2A"],["Drive Leg Hop Football Throw","Lateral Flow : Level 2B"],["Drive Leg Multi Hop Football Throw","Lateral Flow : Level 2B"],["Rotational Step Back Football Throw","Lateral Flow : Level 2B"],["Rotational Multi Hop Football Throw","Lateral Flow : Level 2B"],["Drive Leg Hop Baseball Catch Throw","Lateral Flow : Level 2C"],["Drive Leg Multi Hop Baseball Catch Throw","Lateral Flow : Level 2C"],["Rotational Step Back Baseball Catch Throw","Lateral Flow : Level 2C"],["Rotational Multi Hop Baseball Catch Throw","Lateral Flow : Level 2C"],["Drive Leg Hop Rewire Catch Throw","Lateral Flow : Level 2D"],["Drive Leg Multi Hop Rewire Catch Throw","Lateral Flow : Level 2D"],["Rotational Step Back Rewire Catch Throw","Lateral Flow : Level 2D"],["Rotational Multi Hop Rewire Catch Throw","Lateral Flow : Level 2D"],["Horizontal Step Backwards Mound Throws","Lateral Force Mound Blend : Level 1"],["Horizontal Step Forwards Mound Throws","Lateral Force Mound Blend : Level 1"],["Seoul Mound Throws","Lateral Force Mound Blend : Level 1"],["Rotational Rocker Throw","Lateral Force Progression : Level 1"],["Rear Facing Walking Windup Mound Throws","Lateral Force Progression : Level 1"],["Kneeling Natural Throws*Flow","Lateral Force Progression : Level 1"],["Horizontal Drop Back Flow","Lateral Force Progression : Level 1"],["Half Kneeling Lead Leg Block Throw","Lateral Force Progression : Level 2"],["Half Kneeling Lateral Lunge Throws","Lateral Force Progression : Level 2"],["Horizontal Step Forward Mound Throws","Lateral Force Progression : Level 2"],["45 Degree Run and Round Throw","Directional Flow : Level 1A"],["45 Degree Run-Stop-Spin Throw","Directional Flow : Level 1A"],["Half Kneeling Lunge to Throw","Lead Leg Block Flow : Level 1A"],["Dead Leg Lasso Throw","Lead Leg Block Flow : Level 1A"],["Rear Foot Elevated Throw","Lead Leg Block Flow : Level 1A"],["Walking Backward Baseball Throw","Linear Flow : Level 1A"],["Roll In Baseball Throw","Linear Flow : Level 1A"],["Backpedal Baseball Throw","Linear Flow : Level 1A"],["Roll In Football Throw","Linear Flow : Level 1B"],["Walking Backward Football Throw","Linear Flow : Level 1B"],["Backpedal Football Throw","Linear Flow : Level 1B"],["High Step Forward Football Throw","Linear Flow : Level 1B"],["Roll In Baseball Catch Throw","Linear Flow : Level 1C"],["Walking Backward Baseball Catch Throw","Linear Flow : Level 1C"],["Backpedal Baseball Catch Throw","Linear Flow : Level 1C"],["High Step Forward Baseball Catch Throw","Linear Flow : Level 1C"],["Roll In Rewire Catch Throw","Linear Flow : Level 1D"],["Walking Backward Rewire Catch Throw","Linear Flow : Level 1D"],["Backpedal Rewire Catch Throw","Linear Flow : Level 1D"],["High Step Forward Rewire Catch Throw","Linear Flow : Level 1D"],["Drive Leg Linear Hop Baseball Throw","Linear Flow : Level 2A"],["Drive Leg Multi Linear Hop Baseball Throw","Linear Flow : Level 2A"],["Stride Leg Linear Hop Baseball Throw","Linear Flow : Level 2A"],["Stride Leg Linear Multi Hop Baseball Throw","Linear Flow : Level 2A"],["Drive Leg Linear Hop Football Throw","Linear Flow : Level 2B"],["Drive Leg Multi Linear Hop Football Throw","Linear Flow : Level 2B"],["Stride Leg Linear Hop Football Throw","Linear Flow : Level 2B"],["Stride Leg Linear Multi Hop Football Throw","Linear Flow : Level 2B"],["Drive Leg Linear Hop Baseball Catch Throw","Linear Flow : Level 2C"],["Drive Leg Multi Linear Hop Baseball Catch Throw","Linear Flow : Level 2C"],["Stride Leg Linear Hop Baseball Catch Throw","Linear Flow : Level 2C"],["Stride Leg Linear Multi Hop Baseball Catch Throw","Linear Flow : Level 2C"],["Drive Leg Linear Hop Rewire Catch Throw","Linear Flow : Level 2D"],["Drive Leg Multi Linear Hop Rewire Catch Throw","Linear Flow : Level 2D"],["Stride Leg Linear Hop Rewire Catch Throw","Linear Flow : Level 2D"],["Stride Leg Linear Multi Hop Rewire Catch Throw","Linear Flow : Level 2D"],["Shoulder Dip Throws","Linear Force Mound Blend : Level 1"],["Hook 'Em Throws","Linear Force Mound Blend : Level 1"],["Drive Leg Hop Mound Throws","Linear Force Progression : Level 1"],["Standing Natural Throws*Flow","Linear Force Progression : Level 1"],["Linear Stride Leg Hop Throw","Linear Force Progression : Level 1"],["Stide Leg Hop Back Rewire Catch Throw","Linear Force Progression : Level 1"],["Swing Leg Rotational Step Back","Linear Force Progression : Level 2"],["Kneeling Pivot Throws*Pendulum","Linear Force Progression : Level 2"],["Lateral Walk Backward*Flip Up Throw","Linear Force Progression : Level 2"],["Lateral Pendulum Throw","Linear Force Progression : Level 2"],["Elevated Slope Mound Throws","Linear Force Progression : Level 2"],["TapX3 Mound Throws","Linear Force Progression : Level 2"],["Throw and Stick","Lower Deceleration Mound Blend : Level 1"],["Rocker Figure 8 Throw","Lower Deceleration Progression : Level 1"],["Split Stance Blocking Throw","Lower Deceleration Progression : Level 1"],["Throw & Stick Mound Throws","Lower Deceleration Progression : Level 1"],["45 Degree Turn and Burn Mound Throws","Lower Deceleration Progression : Level 2"],["3 Step Dead Leg","Lower Deceleration Progression : Level 2"],["Drop Step Throw","Lower Deceleration Progression : Level 2"],["Hop Drop Step Throw","Lower Deceleration Progression : Level 2"],["Drop Step Mound Throw","Lower Deceleration Progression : Level 2"],["Janitor 2 Tap Throws","Lower Rotation Mound Blend : Level 1"],["Turn & Burn Mound Throws","Lower Rotation Mound Blend : Level 1"],["Standing Pivot Throws*Pendulum","Lower Rotation Progression : Level 1"],["Standing Neutral Throws*Flow","Lower Rotation Progression : Level 1"],["Linear Roll In*Pendulum Throw","Lower Rotation Progression : Level 1"],["Bauer Step Back Throws","Lower Rotation Progression : Level 1"],["Angled Janitor Throw","Lower Rotation Progression : Level 1"],["Kneeling Pivot Throws*Flow","Lower Rotation Progression : Level 2"],["Run Away Stop & Baseball Throw","Lower Rotation Progression : Level 2"],["Rhythm Relay Throws","Lower Rotation Progression : Level 2"],["Rock Back Wind Up Mound Throws","Lower Rotation Progression : Level 2"],["Quick Hands","Reaction Flow : Level 1A"],["Shuffle Reactionary Throws","Reaction Flow : Level 1A"],["Turn & Burn Reactionary Throws","Reaction Flow : Level 1A"],["Fake Turn & Baseball Throw","Triplanar Flow : Level 1A"],["Rear Facing Jump Turn & Baseball Throw","Triplanar Flow : Level 1A"],["Rear Facing Walking Wind Up Baseball Throw","Triplanar Flow : Level 1A"],["Rear Facing Jump Turn & Football Throw","Triplanar Flow : Level 1B"],["Rear Facing Walking Wind Up Football Throw","Triplanar Flow : Level 1B"],["Fake Turn & Football Throw","Triplanar Flow : Level 1B"],["Run Away Stop & Football Throw","Triplanar Flow : Level 1B"],["Rear Facing Jump Turn & Baseball Catch Throw","Triplanar Flow : Level 1C"],["Rear Facing Walking Wind Up Baseball Catch Throw","Triplanar Flow : Level 1C"],["Fake Turn & Baseball Catch Throw","Triplanar Flow : Level 1C"],["Run Away Stop & Baseball Catch Throw","Triplanar Flow : Level 1C"],["Rear Facing Jump Turn & Rewire Catch Throw","Triplanar Flow : Level 1D"],["Rear Facing Walking Wind Up Rewire Catch Throw","Triplanar Flow : Level 1D"],["Fake Turn & Rewire Catch Throw","Triplanar Flow : Level 1D"],["Run Away Stop & Rewire Catch Throw","Triplanar Flow : Level 1D"],["Vertical Jump Baseball Throw","Triplanar Flow : Level 2A"],["Linear Hop Vertical Jump Baseball Throw","Triplanar Flow : Level 2A"],["Horizontal Hop Vertical Jump Baseball Throw","Triplanar Flow : Level 2A"],["Vertical Jump Football Throw","Triplanar Flow : Level 2B"],["Linear Hop Vertical Jump Football Throw","Triplanar Flow : Level 2B"],["Horizontal Hop Vertical Jump Football Throw","Triplanar Flow : Level 2B"],["Jeter Football Throw","Triplanar Flow : Level 2B"],["Vertical Jump Baseball Catch Throw","Triplanar Flow : Level 2C"],["Linear Hop Vertical Jump Baseball Catch Throw","Triplanar Flow : Level 2C"],["Horizontal Hop Vertical Jump Baseball Catch Throw","Triplanar Flow : Level 2C"],["Jeter Baseball Catch Throw","Triplanar Flow : Level 2C"],["Vertical Jump Rewire Catch Throw","Triplanar Flow : Level 2D"],["Linear Hop Vertical Jump Rewire Catch Throw","Triplanar Flow : Level 2D"],["Horizontal Hop Vertical Jump Rewire Catch Throw","Triplanar Flow : Level 2D"],["Jeter Rewire Catch Throw","Triplanar Flow : Level 2D"],["Horizontal Walk Backward Cross Body Baseball Throw","Triplanar Flow : Level 3A"],["Horizontal Walk Forward Cross Body Baseball Throw","Triplanar Flow : Level 3A"],["Horizontal Back Pedal Cross Body Baseball Throw","Triplanar Flow : Level 3A"],["Horizontal Run Forward Cross Body Baseball Throw","Triplanar Flow : Level 3A"],["Horizontal Walk Backward Cross Body Football Throw","Triplanar Flow : Level 3B"],["Horizontal Walk Forward Cross Body Football Throw","Triplanar Flow : Level 3B"],["Horizontal Back Pedal Cross Body Football Throw","Triplanar Flow : Level 3B"],["Horizontal Run Forward Cross Body Football Throw","Triplanar Flow : Level 3B"],["Horizontal Walk Backward Cross Body Baseball Catch Throw","Triplanar Flow : Level 3C"],["Horizontal Walk Forward Cross Body Baseball Catch Throw","Triplanar Flow : Level 3C"],["Horizontal Back Pedal Cross Body Baseball Catch Throw","Triplanar Flow : Level 3C"],["Horizontal Run Forward Cross Body Baseball Catch Throw","Triplanar Flow : Level 3C"],["Horizontal Walk Backward Cross Body Rewire Catch Throw","Triplanar Flow : Level 3D"],["Horizontal Walk Forward Cross Body Rewire Catch Throw","Triplanar Flow : Level 3D"],["Horizontal Back Pedal Cross Body Rewire Catch Throw","Triplanar Flow : Level 3D"],["Horizontal Run Forward Cross Body Rewire Catch Throw","Triplanar Flow : Level 3D"],["Open Stance Linear Mound Throw","Upper Deceleration Mound Blend : Level 1"],["Glove Side Hand Off Mound Throws","Upper Deceleration Mound Blend : Level 1"],["1 Leg Balance Throws","Upper Deceleration Progression : Level 1"],["Rotational Hop Back Rewire Catch","Upper Deceleration Progression : Level 1"],["Glove Side Toss Throws","Upper Deceleration Progression : Level 1"],["Glove Side Hand Off Throw","Upper Deceleration Progression : Level 1"],["Kneeling Natural Throws*Pendulum","Upper Deceleration Progression : Level 2"],["Walking Wind Up Flow","Upper Deceleration Progression : Level 2"],["Tracer Throw","Upper Rotation Flow : Level 1A"],["Open Stance Linear Throw","Upper Rotation Flow : Level 1A"],["Open Stance Linear Hand-Off Throw","Upper Rotation Flow : Level 1A"],["Hip Shoulder Tap Throw","Upper Rotation Flow : Level 2A"],["Hand Cross Throw","Upper Rotation Flow : Level 2A"],["Kershaw Mound Throw","Upper Rotation Flow : Level 2A"],["Split Stance Tracer Throw","Upper Rotation Flow : Level 3A"],["Rocker Tracer Throw","Upper Rotation Flow : Level 3A"],["Pocket Path Stick Seated Box Throw","Upper Rotation Flow : Level 4A"],["Pocket Path Stick Seated Throw","Upper Rotation Flow : Level 4A"],["Pocket Path Stick Kneeling Throw","Upper Rotation Flow : Level 4A"],["Pocket Path Step Behind Throw","Upper Rotation Flow : Level 4A"],["Bounce Mound Throws","Upper Rotation Mound Blend : Level 1"],["Kneeling Natural Flip Up","Upper Rotation Progression : Level 1"],["Lateral Walk Forward Flip Up Throw","Upper Rotation Progression : Level 1"],["Coil and Flip Up Catch Throws","Upper Rotation Progression : Level 1"],["Lasso Drop Throws","Upper Rotation Progression : Level 2"],["Self Toss Roll In Throw","Upper Rotation Progression : Level 2"],["Hover Flip Up Throw","Upper Rotation Progression : Level 2"],["Step Back Mound Throws","Vertical Force Mound Blend : Level 1"],["Standing Natural Throw*Pendulum","Vertical Force Progression : Level 1"],["Over The Block Step Back OH MB Throws","Vertical Force Progression : Level 1"],["Crossover Pendulum Throws","Vertical Force Progression : Level 2"],["Kikuchi Throws","Vertical Force Progression : Level 2"],["Walking Forward Kukuchi Throws","Vertical Force Progression : Level 2"],["Elevated Uphill Mound Throws","Vertical Force Progression : Level 2"],["Standing Natural Throws*Pendulum","Used in base programs"],["Seated Baseball Throws (For Distance)","Used in base programs"],["Reactive Rebounder","Used in base programs"],["Stride Leg Hop Back Rewire Catch Throw","Used in base programs"],["Neutral Kneeling Baseball Throws (For Distance)","Used in base programs"],["3 Step Dead Leg Throw","Used in base programs"],["Drop Step Throws","Used in base programs"],["Hop Drop Step Throws","Used in base programs"],["Natural Kneeling Baseball Throws (For Distance)","Used in base programs"],["Pivot Kneeling Baseball Throws (For Distance)","Used in base programs"],["Walking Forward Kikuchi Throws","Used in base programs"],["Kikucki Throws","Used in base programs"],["Kneeling Neutral Throws*Tap & Go","Used in base programs"],["Kneeling Natural Throws*Tap & Go","Used in base programs"],["Self Toss Roll-In Throws","Used in base programs"],["Catch Play (60 ft)","Used in base programs"],["Kikucki Mound Throws","Used in base programs"],["Rear Facing Walking Wind Up Mound Throws","Used in base programs"],["Hip-Shoulder Tap Throw","Used in base programs"],["Drop Step Mound Throws","Used in base programs"],["Catch Play (75 ft)","Used in base programs"],["Horizontal Step Backwards Mound Throw","Used in base programs"],["Lateral Pendulum Mound Throws","Used in base programs"],["Catch Play (90 ft)","Used in base programs"],["Standing Natural Throws*Tap & Go","Used in base programs"],["Seated Baseball Throw","Used in base programs"],["Neutral Kneeling Baseball Throw","Used in base programs"],["Standing Pivot Baseball Throw","Used in base programs"],["Neutral Standing Baseball Throw","Used in base programs"],["Kneeling Pivot Baseball Throw","Used in base programs"],["Kneeling Natural Baseball Throw","Used in base programs"],["Standing Neutral Baseball Throw","Used in base programs"],["Linear Roll In*Pendulum","Used in base programs"],["Pivot Kneeling Baseball Throw","Used in base programs"],["Natural Kneeling Baseball Throw","Used in base programs"],["Pivot Standing Baseball Throw","Used in base programs"],["Kneeling Natural Throws *Pendelum","Used in base programs"],["Kneeling Natural Throws*Velo","Used in base programs"],["Standing Natural Throws*Velo","Used in base programs"],["Walking Windup Throw","Used in base programs"],["Catch Play","Used in base programs"],["Flat Ground Throws*Velo","Used in base programs"],["Catch Play (120 ft)","Used in base programs"],["Standing Pivot Thows*Pendulum","Used in base programs"],["Lateral Figure 8 Mound Throws","Used in base programs"],["Long Toss Extension","Used in base programs"],["Leg Lift Roll In","Used in base programs"],["Turn and Burn Reactionary Throws","Used in base programs"],["Catch Play Alternating FB&CH (90 feet)","Used in base programs"],["Flat Ground (Mix in Off-Speed)","Used in base programs"],["T/K Football Spiral Flow Throws","Used in base programs"],["Long Toss Compressions","Used in base programs"],["Angled Turn and Throw","Used in base programs"],["Turn and Burn Throw","Used in base programs"],["Rhythm Pull Down","Used in base programs"],["Mound Throws*Plyo Velo","Used in base programs"],["Tornado Throw","Used in base programs"],["Rhythm Pulldown","Used in base programs"],["Backward Carioca Shuffle Throw","Used in base programs"],["Rotational Hop Back Rewire Catch Throw","Used in base programs"],["Turn and Burn Mound Throws","Used in base programs"],["Accuracy Bullpen","Used in base programs"],["Short Slope Throws","Used in base programs"],["Build Up Bullpen","Used in base programs"],["Pitch Design Bullpen","Used in base programs"],["Velo Bullpen","Used in base programs"],["Visualisation Bullpen","Used in base programs"],["Visualization Bullpen","Used in base programs"],["Warm Up Live Bullpen","Used in base programs"],["Live Bullpen","Used in base programs"],["Mound","Used in base programs"]],"ref":[[30,43,45,35,37,37,39,40,42,42,44,39,41,41,43,44,46,45,47,130],[35,47,49,38,40,41,43,44,46,47,49,43,45,45,47,48,50,49,51,145],[40,52,54,42,44,45,47,49,51,51,53,48,50,50,52,53,55,54,56,160],[45,56,58,46,48,49,51,53,55,56,58,52,54,54,56,58,60,59,61,175],[50,61,63,49,51,53,55,57,59,60,62,56,58,58,60,62,64,64,64,190],[55,65,67,53,55,57,59,61,63,65,67,60,62,63,65,67,69,68,70,205],[60,70,72,57,59,61,63,66,68,69,71,64,66,67,69,71,73,73,75,220],[65,73,75,60,62,64,66,69,71,73,75,68,70,71,73,75,77,77,79,230],[70,75,77,61,63,66,68,71,73,74,76,69,71,72,74,77,79,79,81,240],[75,77,79,63,65,68,70,72,74,76,78,71,73,74,76,79,81,81,83,245],[80,79,81,64,66,69,71,74,76,78,80,73,75,76,78,81,83,83,85,250],[85,80,82,66,68,71,73,76,78,80,82,74,76,77,79,83,85,84,86,255],[90,82,84,67,69,72,74,78,80,82,84,76,78,79,81,84,86,86,88,260],[95,84,86,69,71,74,76,79,81,83,85,78,80,81,83,86,88,88,90,270],[100,87,90,71,74,76,79,82,85,86,89,80,83,84,86,89,92,91,94,275]],"refTop":{"v":90,"d":300,"k":74.25}};
const TL='Timeline to competition', TLLABEL='Offseason plan (stacked phases)';
let PH=D.programs.filter(p=>p.uses); const PREP=['REVO','REIN','ENVO','ENIN','WATT'], MOUND=['INT','REF','ENG'];
let FOCUS0=D.focus.includes('Vertical Force')?'Vertical Force':D.focus[0];
const mult=r=>r<60?.5:r<70?.75:r<80?1:r<90?1.25:r<95?1.5:r<100?1.75:2;
const day0=s=>{if(!s)return null;const d=new Date(s+'T12:00:00');return isNaN(d)?null:d};
const fmt=d=>d.toLocaleDateString(undefined,{month:'short',day:'numeric'});
const byCode=c=>D.programs.find(p=>p.code===c);
const numv=x=>{const n=parseFloat(x);return isNaN(n)?null:n};
function suggest(N){
  const o={}; for(const p of PH) o[p.code]=0;
  N=Math.min(N,32);
  const M=Math.min(N,12,Math.max(8,N-10)), P=Math.min(20,N-M);
  for(let i=0;i<M;i++) o[MOUND[i%3]]++;
  for(let i=0;i<P;i++) o[PREP[i%5]]++;
  return PH.filter(p=>o[p.code]>0).map(p=>({code:p.code,weeks:o[p.code]}));
}
function drillPct(n){
  n=n.toLowerCase(); const st=/pivot/.test(n)?0:/neutral/.test(n)?1:/natural/.test(n)?2:-1;
  if(/flat ?ground/.test(n)) return {p:.95};
  if(/seated/.test(n)) return {p:.65};
  if(/kneeling/.test(n)) return {p:[.70,.75,.80][st<0?2:st],kn:true};
  if(/standing/.test(n)&&st>=0) return {p:[.80,.85,.90][st]};
  return {p:1};
}
function refRow(rpe){let o=null;for(const r of D.ref){if(r[0]<=rpe)o=r}return o}

const CSS=`
:host{display:block;--bg:#000;--surface:#0c0e10;--sunk:#15191c;--ink:#fff;--muted:#b8c0c6;--line:#2a3035;--seam:#e10600;--heat:#56b7e6;--swap:#56b7e6;--ok:#88e0c6;
  --mono:'Barlow',system-ui,sans-serif;--body:'Barlow',system-ui,sans-serif;color:var(--ink);font:400 14px/1.4 var(--body)}
*{box-sizing:border-box}
[hidden]{display:none !important}
.aapp{display:none !important}
.wrap{display:flex;flex-direction:column;gap:18px}
button,input,select{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:2px solid var(--seam);outline-offset:2px}
.lab{font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.top{display:flex;flex-wrap:wrap;gap:14px 24px;align-items:flex-end;justify-content:space-between}
.id{display:flex;flex-direction:column;gap:6px;min-width:0}
.prog{font:600 22px/1.15 var(--body);overflow-wrap:anywhere}
.src{font-size:12px;color:var(--muted);overflow-wrap:anywhere}
.stats{display:flex;flex-wrap:wrap;gap:2px;background:var(--line);border:1px solid var(--line)}
.stat{display:flex;flex-direction:column;gap:4px;background:var(--surface);padding:10px 14px;min-width:96px}
.stat b{font:600 20px/1 var(--body);font-variant-numeric:tabular-nums}
.stat span{font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.bar{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.aapp{display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line);padding-top:14px}
.alink{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.alink input{flex:1 1 320px;min-width:0;background:#000;border:1px solid var(--line);padding:7px 10px;color:var(--ink);font:400 12px var(--mono)}
.alog{margin:0 10px 8px;padding:6px 8px;border-left:3px solid var(--line);background:#000;font-size:12px;color:#d4d9dc;display:flex;flex-direction:column;gap:3px}
.alog b{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase}
.alog.done{border-left-color:var(--ok)} .alog.done b{color:var(--ok)}
.alog.partial{border-left-color:#56b7e6} .alog.partial b{color:#56b7e6}
.alog.skipped{border-left-color:var(--seam)} .alog.skipped b{color:#ff8a85}
.alog span{text-wrap:pretty;white-space:pre-wrap}
.alh{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px}
.alh h3{margin:0}.alh .note{flex:1 1 200px}
.alstats{display:flex;flex-wrap:wrap;gap:10px 28px;padding:4px 0}
.alstats div{display:flex;flex-direction:column;gap:4px}
.alstats b{font:600 20px/1 var(--body);font-variant-numeric:tabular-nums}
.alstats span{font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.altbl{display:flex;flex-direction:column}
.alr{display:grid;grid-template-columns:110px minmax(120px,170px) 96px 120px minmax(160px,1fr);gap:4px 12px;padding:9px 0;border-top:1px solid var(--line);font-size:13px;align-items:baseline}
.alr.h{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:0;padding-top:0}
.alr .st{font:600 11px var(--mono);letter-spacing:.06em;text-transform:uppercase}
.st.done{color:var(--ok)}.st.partial{color:#56b7e6}.st.skipped{color:#ff8a85}.st.none{color:var(--muted)}
.alr .unread{display:inline-block;margin-right:6px;font:700 9px/1 var(--mono);background:var(--seam);color:#fff;padding:3px 5px;letter-spacing:.06em}
.ck{font:500 12px var(--mono)}.ck.flag{color:#ff8a85;font-weight:700}
.dck{margin:0 10px 8px;font:500 11px/1.3 var(--mono);color:var(--muted)}.dck.flag{color:#ff8a85;font-weight:700}
.dtest{margin:0 8px 8px;padding:7px 8px;border:1px solid #2c4a5a;background:#17140a;display:flex;flex-direction:column;gap:3px;font-size:12px;color:#ffffff}
.dtest b{font:700 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:#56b7e6}
.rtbl{display:flex;flex-direction:column;min-width:980px}
.rr{display:grid;grid-template-columns:minmax(150px,1.3fr) minmax(150px,1.2fr) 86px 70px minmax(130px,1fr) 70px minmax(120px,1fr) minmax(130px,1fr);gap:4px 12px;padding:10px 8px;border-top:1px solid var(--line);font-size:13px;align-items:baseline;text-align:left;background:none;color:var(--ink);font-family:inherit;width:100%}
button.rr{cursor:pointer;border-left:0;border-right:0;border-bottom:0}
button.rr:hover{background:var(--sunk)}
.rr.h{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:0}
.rr b{font-weight:600}.rr .n{font-family:var(--mono);font-variant-numeric:tabular-nums}
.rr .bad{color:#ff8a85;font-weight:700}.rr .mut{color:var(--muted)}
.wrap.rv>*:not(#roster){display:none !important}
.wrap.rv>#roster{display:flex !important}
.strc{display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line);padding-top:14px}
.dstr{margin:0 8px 8px;padding:7px 8px;border:1px solid #2c4a5a;background:#08141a;color:#d4e6ee;text-align:left;font:inherit;cursor:pointer;display:flex;flex-direction:column;gap:3px;min-height:40px}
.dstr:hover,.dstr.sel{border-color:var(--heat)}
.dstr.sel{background:#0d2430}
.dstr b{font:700 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--heat)}
.dstr span{font-size:12px;line-height:1.3;overflow-wrap:anywhere}
.dstr small{font:400 11px/1.2 var(--mono);color:var(--muted)}
.strtag{font:600 10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;padding:5px 8px;background:#0d2430;color:var(--heat);border:1px solid #2c4a5a}
.sses{border:1px solid #2c4a5a;background:#071016;padding:14px;display:flex;flex-direction:column;gap:12px}
.sses .shd{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 14px}
.sses h3{margin:0;color:#fff}
.sses .shd .note{flex:1 1 200px}
.stbl{display:flex;flex-direction:column}
.str_{display:grid;grid-template-columns:36px minmax(160px,1.4fr) minmax(160px,1.6fr) 96px;gap:4px 12px;padding:7px 0;border-top:1px solid #1d3540;font-size:13px;align-items:baseline}
.str_.h{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:0;padding-top:0}
.str_ .c{font:600 11px var(--mono);color:var(--heat)}
.str_ .m{font-size:12px;color:var(--muted);line-height:1.35}
.str_ .ds{font:600 14px var(--mono);text-align:right;color:#fff;white-space:nowrap}
.str_.t2 .ex::after{content:' \u00b7 accessory';font:400 11px var(--mono);color:var(--muted)}
.lhd{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 14px}
.lhd .note{flex:1 1 260px}
.lscroll{overflow-x:auto}
.ltl{display:grid;grid-template-columns:96px minmax(0,1fr);gap:6px 10px;min-width:640px;align-items:center}
.ltl .ll{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.ltl .lt{position:relative;height:34px;background:#07090a;border:1px solid var(--line)}
.ltl .lt.ax{height:18px;background:none;border:0}
.ltl .lt.ax span{position:absolute;top:2px;font:400 10px var(--mono);color:var(--muted);white-space:nowrap;transform:translateX(-50%)}
.ltl .bk{position:absolute;top:3px;bottom:3px;display:flex;align-items:center;padding:0 7px;overflow:hidden;white-space:nowrap;font:600 11px/1 var(--mono);color:#fff;border-left:3px solid;min-width:4px}
.ltl .bk.thr{background:#2a0b0a;border-color:var(--seam)} .ltl .bk.thr.off{background:#151819;border-color:#3a4246;color:var(--muted)}
.ltl .bk.pat{background:#0d2430;border-color:#56b7e6}
.ltl .bk.str{background:#0d2430;border-color:var(--heat)}
.ltl .bk.auto{opacity:.65;border-left-style:dashed}
.ltl .now{position:absolute;top:-2px;bottom:-2px;border-left:2px solid #fff;z-index:2}
.lane{display:flex;flex-direction:column;gap:6px;border-top:1px solid var(--line);padding-top:12px;margin-top:6px}
.lnh{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center}
.lnh .note{flex:1 1 200px}
.lnr{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--line)}
.lnr input[type=date]{width:150px}.lnr input[type=number]{width:64px}
.lnr .bn{font:600 11px var(--mono);color:var(--muted);min-width:18px}
.lnr .bsn{flex:1 0 100%;font:400 11px/1.3 var(--mono);color:var(--muted)}
.lnr .bsn.warn{color:#56b7e6}
.lrows{overflow-x:auto}
.lrows table{border-collapse:collapse;font:400 12px var(--mono);min-width:720px;width:100%}
.lrows th{font:600 10px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);text-align:left;padding:4px 8px;border-bottom:1px solid var(--line)}
.lrows td{padding:5px 8px;border-bottom:1px solid #1a1f22;white-space:nowrap}
.dstr.pat{border-color:#2c4a5a;background:#15110a;color:#efe2c4}
.dstr.pat b{color:#56b7e6}
.dstr.pat:hover,.dstr.pat.sel{border-color:#56b7e6}
.dstr.pat.sel{background:#0d2430}
.strtag.pat{background:#0d2430;color:#56b7e6;border-color:#2c4a5a}
.sses.pat{border-color:#2c4a5a;background:#100c06}
.sses.pat .sgrp{color:#56b7e6}
.plst{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.plst li{display:flex;gap:12px;align-items:baseline;padding:7px 0;border-top:1px solid #2e2614;font-size:13px}
.plst li .c{font:600 11px var(--mono);color:#56b7e6;min-width:16px}
.plst li .pds{margin-left:auto;font:600 13px var(--mono);color:#fff;white-space:nowrap}
.plst li a{color:#fff;text-decoration:underline;text-decoration-color:#56b7e6;text-underline-offset:3px}
.sgrp{font:700 10px/1.2 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--heat);padding:6px 0 2px}
@media (max-width:640px){.str_{grid-template-columns:30px 1fr 80px}.str_ .m{grid-column:2/4}}
.filebtn{display:inline-flex;align-items:center;cursor:pointer}
.wrap.hv>*:not(#hist):not(#lanes){display:none !important}
.wrap.sv>*:not(#sview){display:none !important}
.wrap.sv>#sview{display:flex !important}
.wrap.sv>#sview[hidden]{display:none !important}
.wrap.dv>*:not(#cal):not(#dvbar){display:none !important}
.wrap.dv .days,.dvdays{display:grid !important;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr)) !important;gap:10px !important;align-items:start}
.dvbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px}
.dvbar .dvt{display:flex;flex-direction:column;gap:2px;flex:1 1 280px;min-width:0}
.dvbar .dvt b{font:600 12px/1.2 var(--mono);letter-spacing:.1em;text-transform:uppercase}
.dvbar .dvt span{font-size:13px;color:var(--muted);overflow-wrap:anywhere}
.dvbar .acts2{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.dvsec{display:flex;flex-direction:column;border-top:1px solid var(--line);margin:0 10px 6px;padding-top:2px}
.dvh{font:600 10px/1.2 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--heat);padding:3px 0 1px}
.dvg{font:600 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding:6px 0 2px}
.dvr{display:flex;gap:8px;align-items:baseline;padding:2px 0;border-top:1px solid #1d2428;font-size:12px;line-height:1.25}
.dvr .dvn{flex:1 1 auto;min-width:0;overflow-wrap:anywhere}
.dvr .dvn a{color:#fff;text-decoration:underline;text-decoration-color:var(--heat);text-underline-offset:3px}
.dvr .dvd{flex:none;font:600 12px var(--mono);color:#fff;max-width:45%;text-align:right;overflow-wrap:anywhere}
.dvr.chg .dvn::after{content:' \u00b7 edited';color:var(--heat);font-size:11px}
.dvr.added .dvn::after{content:' \u00b7 added';color:var(--ok);font-size:11px}
.dvr.info .dvd{color:var(--muted);font-weight:400}
.dvtt{padding:0 10px 3px;font:600 12px/1.25 var(--body);color:#fff}
.dvmeta{padding:0 10px 8px;font:500 11px/1.3 var(--mono);color:var(--muted)}
.wrap.dv:not(.editing) .drills,.wrap.dv:not(.editing) .dfoot,.wrap.dv:not(.editing) .offlabel,.wrap.dv:not(.editing) .dsum.off,.wrap.dv:not(.editing) .score,.wrap.dv:not(.editing) .dvg{display:none}
.wrap.dv:not(.editing) .dh{padding:6px 10px 2px}
.wrap.dv:not(.editing) .dn{display:flex;gap:8px;align-items:baseline}
.wrap.dv:not(.editing) .dn small{display:inline;margin:0}
.wrap.dv:not(.editing) .dsum{padding:0 10px 3px;font-size:11px}
.dvrest{color:var(--muted);font-style:italic}
.ldays{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:12px;align-items:stretch}
.lbox{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--line);min-height:0;min-width:0}
.lbox.today{border-color:var(--seam);box-shadow:inset 0 3px 0 var(--seam)}
.lbox.lover{border-color:var(--heat);box-shadow:inset 0 0 0 2px var(--heat)}
.lbox.ldrag,.lrow.ldrag{opacity:.35}
.ldh{padding:8px 10px 0;user-select:none}
.lbox.lediting .ldh{cursor:grab;touch-action:none}
.lh1{font:600 11px/1.2 var(--mono);letter-spacing:.08em;color:var(--muted)}
.lh2{font:700 14.5px/1.2 var(--body);color:#fff;margin:3px 0 7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lrow.linfo{display:flex;justify-content:space-between;gap:10px;font-size:11.5px;padding:2px 0}
.lrow.linfo b{font:600 11.5px var(--mono);text-align:right;overflow-wrap:anywhere}
.lgiant{display:flex;flex-direction:column;gap:14px;border:1px solid var(--line);background:#0a0c0e;padding:14px}
.lsec{border:1px solid #2f383e;background:rgba(255,255,255,.015)}
.lsh{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;background:none;border:0;padding:11px 14px;color:#fff;text-align:left}
.lsh:hover{background:rgba(255,255,255,.03)}
.lst{display:flex;flex-direction:column;gap:2px;min-width:0}
.lst b{font:600 12px/1.2 var(--mono);letter-spacing:.12em;text-transform:uppercase}
.lst span{font-size:12px;color:var(--muted);overflow-wrap:anywhere}
.lch{color:var(--muted);font-size:13px}
.lsec .ldays{padding:2px 14px 14px}
.lgrid{display:grid;gap:8px;align-items:stretch}
.ldcell{background:#101417;border:1px solid var(--line);border-top:3px solid #3a444a;padding:8px 10px;font:700 16px/1.2 var(--body);letter-spacing:.04em;color:#fff;text-align:center;user-select:none}
.ldcell.today{border-top-color:var(--seam)}
.ldcell.lediting{cursor:grab;touch-action:none}
.lbox .lh1{font:600 10.5px/1.2 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--heat)}
.lgrid .lbox.today{border-color:var(--line);box-shadow:none}
.lh2.off{color:var(--muted);font-weight:600}
.lline{border-top:1px solid rgba(255,255,255,.09);margin:0 10px}
.lexp{display:flex;align-items:center;justify-content:space-between;background:none;border:0;padding:4px 10px;color:var(--muted);font:600 10px var(--mono);letter-spacing:.06em;text-transform:uppercase;text-align:left;width:100%}
.lexp:hover{color:#fff}
.lrws{display:flex;flex-direction:column;padding:0 10px 6px}
.lrow{display:grid;gap:5px;align-items:center;padding:2px 0;border-top:1px solid #1d2428;font-size:11.5px;line-height:1.2}
.lrow.newblk{margin-top:3px;border-top-color:#3a444a}
.lrow.lhead{font:600 9.5px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:0}
.lrow .sl{font:600 10.5px var(--mono);color:var(--heat)}
.lrow .nm2{overflow-wrap:anywhere}
.lrow .n{font:600 11px var(--mono);text-align:right;overflow-wrap:anywhere}
.lrow.lbefore{box-shadow:0 -2px 0 var(--heat)}
.lrow.lafter{box-shadow:0 2px 0 var(--heat)}
.lin{width:100%;min-width:0;background:#000;border:1px solid var(--line);padding:3px 4px;font:600 12px var(--mono);color:#fff;text-align:right}
.lin.nmi{font:500 12.5px var(--body);text-align:left}
.lg{cursor:grab;touch-action:none;background:none;border:0;padding:2px;color:var(--muted);display:flex;user-select:none}
.lact{display:flex;gap:2px;justify-content:flex-end}
.lib{background:none;border:0;padding:3px;color:var(--muted);cursor:pointer;display:flex}
.lib:hover{color:#fff}
.lib.del:hover{color:#ff8a85}
.lghost{background:var(--surface);border:1px solid var(--heat);box-shadow:0 8px 30px rgba(0,0,0,.6)}
.lcor{display:flex;flex-direction:column;margin-top:8px;border-top:1px solid #3a444a;padding-top:4px}
.lh3{font:600 9.5px/1.2 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--heat);padding:3px 0}
.lcr{display:flex;justify-content:space-between;gap:10px;font-size:12px;padding:2px 0}
.lcr b{font:600 11.5px var(--mono);text-align:right;overflow-wrap:anywhere}
.lbar{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
.lflag{box-shadow:inset 2px 0 0 #ffb347}
.lwarn{color:#ffb347;font-weight:700}
.bk.tst{background:#3a2f12;border-color:#ffb347;color:#ffd48a}
.wrap.bv>*:not(#bview):not(#coach):not(.bar){display:none !important}
.wrap.bv:not(.adv) #boardBtn,.wrap.bv:not(.adv) #pdfBtn,.wrap.bv:not(.adv) #expBtn,.wrap.bv:not(.adv) .filebtn{display:none}
.wrap.nv>*:not(#nview){display:none !important}
.wrap.mv>*:not(.top):not(#mapbar):not(#timeline):not(#lanes):not(#mcal){display:none !important}
.wrap.mv.cal #timeline,.wrap.mv.cal #lanes{display:none !important}
.wrap.mv:not(.cal) #mcal{display:none !important}
.mapbar{display:flex;align-items:center;gap:12px;margin:4px 0 2px}
.mapbar[hidden]{display:none !important}
.seg{display:inline-flex;border:1px solid var(--line)}
.segb{background:transparent;border:0;color:var(--muted);font:600 13px var(--body);padding:9px 18px;cursor:pointer}
.segb+.segb{border-left:1px solid var(--line)}
.segb:hover{color:#fff}
.segb.on{background:rgba(86,183,230,.14);color:#fff;box-shadow:inset 0 -2px 0 #56b7e6}
#mcal{display:flex;flex-direction:column;gap:12px}
#mcal[hidden]{display:none !important}
.mch{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.mct{font:600 17px var(--body);color:#fff;min-width:150px;text-align:center}
.mcnb{width:34px;height:34px;background:transparent;border:1px solid var(--line);color:#fff;font:600 18px/1 var(--body);cursor:pointer}
.mcnb:hover:not(:disabled){border-color:#56b7e6}
.mcnb:disabled{opacity:.3;cursor:default}
.mcg{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}
.mcwd{font:500 10px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);text-align:center;padding:2px 0}
.mcd{display:flex;flex-direction:column;gap:3px;min-height:104px;padding:6px 6px 5px;text-align:left;background:transparent;border:1px solid #1d2428;border-top:3px solid #1d2428;color:#d4d9dc;cursor:pointer;min-width:0}
.mcd.build{background:#0d1013;border-color:#1d2428;border-top-color:#56b7e6}
.mcd.mound{background:#0d1013;border-color:#1d2428;border-top-color:#e10600}
.mcd.off{background:#0d1013;border-color:#1d2428;border-top-color:#5b6770}
.mcd.xp{opacity:.5}
.mcd.om{opacity:.45}
.mcd:hover{border-color:#56b7e6}
.mcd.sel{outline:2px solid #fff;outline-offset:-2px}
.mcd.tst{box-shadow:inset 0 -3px 0 #ffb347}
.mcd.comp{box-shadow:inset 0 0 0 2px #ffd48a}
.mcdt{display:flex;align-items:center;justify-content:space-between;gap:4px}
.mcn1{font:600 13px var(--body);color:#fff;min-width:22px;height:22px;line-height:22px;text-align:center}
.mcd.today .mcn1{background:#e10600;border-radius:50%}
.mcwk{font:500 9.5px var(--mono);color:var(--muted);letter-spacing:.04em}
.mctg{display:block;font:600 10px/1.25 var(--body);padding:1px 4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-left:2px solid #56b7e6;background:rgba(0,0,0,.25)}
.mcd.mound .mctg.thr{border-left-color:#e10600}
.mcd.off .mctg.thr{border-left-color:#5b6770}
.mctg.str{border-left-color:#88e0c6;color:#bfeee0}
.mcb{display:flex;flex-wrap:wrap;gap:3px;align-items:center;margin-top:auto}
.mcm{flex:1 1 auto;display:flex;align-items:center;justify-content:center;min-height:34px}
.mcm .mcsc{font:700 21px/1 var(--mono);padding:7px 13px;min-width:44px;text-align:center}
.mcsc{font:600 10px var(--mono);padding:1px 5px;color:#fff;background:rgba(86,183,230,calc(.15 + var(--h,0)*.55))}
.mcsc.hot{background:rgba(225,6,0,calc(.35 + var(--h,0)*.5))}
.mcfl{font:700 9.5px var(--body);letter-spacing:.04em;text-transform:uppercase;padding:1px 5px}
.mcfl.tst{background:#3a2f12;color:#ffd48a}
.mcfl.dls{background:#0f2a1f;color:#88e0c6}
.mcfl.comp{background:#ffd48a;color:#000}
.mcl{display:flex;flex-wrap:wrap;gap:6px 16px;font:500 11px var(--body);color:var(--muted)}
.mcli{display:inline-flex;align-items:center;gap:6px}
.mcli .sw{display:inline-block;width:14px;height:12px;border:1px solid #2a3034}
.mcli .sw.build{background:#0d1013;border-top:3px solid #56b7e6}
.mcli .sw.mound{background:#0d1013;border-top:3px solid #e10600}
.mcli .sw.off{background:#0d1013;border-top:3px solid #5b6770}
.mcli .sw.tst{border-bottom:3px solid #ffb347}
.mcli .sw.dls{background:#0f2a1f}
.mcli .sw.comp{background:#ffd48a}
.mcli .sw.today{background:#e10600;border-radius:50%;width:12px}
.mcli .sw.sc{background:rgba(86,183,230,.55);border:0}
.mcli .sw.hot{background:rgba(225,6,0,.75);border:0}
.mcdet{border:1px solid var(--line);background:var(--surface);padding:12px 14px;display:flex;flex-direction:column;gap:8px}
.mcdh{display:flex;align-items:center;flex-wrap:wrap;gap:8px}
.mcdh b{font:600 15px var(--body);color:#fff;margin-right:4px}
.mcdc{font:600 10.5px var(--mono);letter-spacing:.05em;text-transform:uppercase;padding:2px 8px;border:1px solid var(--line);color:#aeb6ba}
.mcdc.tst{border-color:#ffb347;color:#ffd48a}
.mcdc.dl{border-color:#56b7e6;color:#9ed4f0}
.mcdc.dls{border-color:#88e0c6;color:#88e0c6}
.mcdc.comp{background:#ffd48a;border-color:#ffd48a;color:#000}
.mcdg{display:grid;grid-template-columns:110px minmax(0,1fr);gap:5px 12px;font-size:13px;line-height:1.35}
.mcdk{font:500 10.5px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding-top:2px}
.mcdv{color:#e6eaec;overflow-wrap:anywhere}
@media (max-width:640px){.mcm{min-height:22px}.mcm .mcsc{font-size:12px;padding:3px 6px;min-width:22px}.mcd{min-height:64px;padding:3px}.mctg,.mcwk,.mcfl{display:none}.mcb{gap:2px}.mcsc{padding:0 3px}.mcn1{font-size:12px;min-width:18px;height:18px;line-height:18px}.mcdg{grid-template-columns:90px minmax(0,1fr)}.mct{min-width:0;flex:1}}
.mch .seg{margin-left:auto}
.seg.sm .segb{padding:6px 12px;font-size:12px}
.mcd.lf{background:#0d1013;border-color:#1d2428;border-top-color:#88e0c6}
.mcd.nl{background:transparent;border-color:#1d2428;border-top-color:#2a3034}
.mcsc.lf{display:block;flex:1 0 100%;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font:600 10px var(--body);letter-spacing:.01em;color:#88e0c6;background:#000;border:1px solid rgba(136,224,198,.7);padding:1px 5px}
.mcli .sw.lf{background:#000;border:1px solid #88e0c6}
.mcli .sw.lfd{background:#0d1013;border-top:3px solid #88e0c6}
@media (max-width:640px){.mcsc.lf{flex:none;display:inline-block;width:8px;height:8px;min-width:8px;padding:0;font-size:0;border:0;border-radius:50%;background:#88e0c6}.mch .seg{margin-left:0;width:100%}.mch .seg .segb{flex:1}}
.wrap.mv #lnEd{display:none !important}
#bview,#nview{display:flex;flex-direction:column;gap:12px;border:0;padding:0;background:none}
#bview[hidden],#nview[hidden]{display:none !important}
.qc{border:1px solid var(--line);background:var(--surface);padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.qh{font:600 15px/1.3 var(--body);color:#fff}
.qhr{display:flex;justify-content:space-between;align-items:center;gap:8px}
.bgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:start}
.bknown,.bqbox{aspect-ratio:1/.88;min-height:400px;max-height:450px;width:100%;box-sizing:border-box}
.bknown{gap:8px;padding:12px 16px;overflow:auto}
.bknown .qhr .btn{padding:3px 10px;font-size:12px;min-height:0}
.bqbox{gap:14px;padding:18px 22px;position:relative}
.kg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px 10px}
.kg .k{display:flex;flex-direction:column;gap:2px;min-width:0}
.kg .k.w{grid-column:1/-1}
.kg .k.h{grid-column:span 2}
.kg .k span{font:500 9.5px var(--mono);letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
.kg .k b{font:600 13px/1.25 var(--body);overflow-wrap:anywhere}
.kg .k b.clamp{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.qbh{display:flex;align-items:center;justify-content:space-between;gap:10px}
.qprog{font:500 10.5px var(--mono);letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
.qtt{font:600 20px/1.3 var(--body);color:#fff}
.qbody{display:flex;flex-direction:column;gap:12px}
.qbody.scroll{flex:1 1 auto;min-height:0;overflow-y:auto;padding-right:4px}
.qtri{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1.3fr);gap:10px;align-items:end}
.qduo{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:start}
.qduo .qf{min-width:0}
.qduo .qsel{width:100%;min-width:0}
.qtri .qf{min-width:0}
.qtri .qfl{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:10px;letter-spacing:.02em}
.qtri .qsel{width:100%;min-width:0;padding:8px 4px 8px 6px;font-size:12px}
.kans{display:flex;flex-direction:column;gap:5px;padding-top:8px;border-top:1px solid #1d2428}
.kansh{font:500 9.5px var(--mono);letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
.qfoot{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto}
.qchips{display:flex;flex-wrap:wrap;gap:5px}
.qchip{background:transparent;border:1px solid var(--line);color:#9aa3a8;font:500 10.5px var(--body);padding:2px 7px;cursor:pointer}
.qchip b{color:#fff;font-weight:600}
.qchip:hover{border-color:#56b7e6}
.qchip.on{border-color:#56b7e6;background:rgba(86,183,230,.1)}
.qback:disabled{opacity:.35;cursor:default}
@media (max-width:760px){.kg{grid-template-columns:repeat(2,minmax(0,1fr))}.kg .k.h{grid-column:span 1}.bgrid{grid-template-columns:1fr}.bknown,.bqbox{aspect-ratio:auto;min-height:0;max-height:none}.bknown{overflow:visible}.bqbox{order:-1}.qtri,.qduo{grid-template-columns:1fr}.qopts.g3{grid-template-columns:repeat(2,minmax(0,1fr))}.qbody.scroll{overflow:visible}}
.qh2{font:600 11px/1.2 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--heat);margin-top:6px}
.qs{font-size:12px;line-height:1.4;color:var(--muted)}
.qopts{display:flex;flex-wrap:wrap;gap:8px}
.qopts.g1,.qopts.g2,.qopts.g3{display:grid;gap:8px}
.qopts.g1{grid-template-columns:minmax(0,1fr)}
.qopts.g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.qopts.g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.qopts.g1 .qo,.qopts.g2 .qo,.qopts.g3 .qo{width:100%;min-width:0;display:flex;flex-direction:column;justify-content:center}
.qopts.g2,.qopts.g3{grid-auto-rows:1fr}
.qopts.g3 .qo{padding:8px 10px;font-size:12.5px}
.qo{background:transparent;border:1px solid var(--line);color:#d4d9dc;padding:8px 12px;font:600 13px var(--body);cursor:pointer;text-align:left}
.qo:hover{border-color:#4a5258;color:#fff}
.qo.on{border-color:var(--seam);background:rgba(225,6,0,.14);color:#fff}
.qo small{display:block;font:400 11px/1.3 var(--body);color:var(--muted);margin-top:2px;max-width:240px}
.qrow{display:flex;flex-wrap:wrap;gap:10px 16px;align-items:flex-end}
.qf{display:flex;flex-direction:column;gap:4px;min-width:150px}
.qfl{font:500 11px var(--mono);letter-spacing:.04em;color:var(--muted)}
.dp{position:relative;display:inline-block}
.dpb{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0 14px;background:#000;border:1px solid var(--line);color:#fff;font:600 15px var(--body);cursor:pointer;text-align:left}
.dpb:hover:not(:disabled){border-color:#56b7e6}
.dpb:disabled{opacity:.4;cursor:default}
.dpb.empty .dpt{color:var(--muted);font-weight:500}
.dpb svg{flex:none;color:#56b7e6}
.dpp{position:absolute;top:calc(100% + 4px);left:0;z-index:40;width:292px;max-width:calc(100vw - 32px);box-sizing:border-box;padding:12px;background:#0b0d0e;border:1px solid #56b7e6;box-shadow:0 10px 28px rgba(0,0,0,.7)}
.dpp[hidden]{display:none}
.dph{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.dpm{font:600 14px var(--body);color:#fff}
.dpn{width:34px;height:34px;background:transparent;border:1px solid var(--line);color:#fff;font:600 18px/1 var(--body);cursor:pointer}
.dpn:hover{border-color:#56b7e6}
.dpw,.dpg{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
.dpw span{text-align:center;font:500 10px var(--mono);letter-spacing:.06em;color:var(--muted);padding:4px 0}
.dpd{height:34px;background:transparent;border:1px solid transparent;color:#fff;font:500 13px var(--body);cursor:pointer;padding:0}
.dpd:hover:not(:disabled){border-color:#56b7e6}
.dpd.out{color:#5b6770}
.dpd.today{border-color:#5b6770}
.dpd.sel{background:#e10600;border-color:#e10600;color:#fff;font-weight:700}
.dpd:disabled{opacity:.25;cursor:default}
.dpf{display:flex;gap:8px;margin-top:8px;padding-top:8px;border-top:1px solid var(--line)}
.dpl{background:transparent;border:1px solid var(--line);color:#d4d9dc;font:600 12px var(--body);padding:6px 12px;cursor:pointer}
.dpl:hover:not(:disabled){border-color:#56b7e6;color:#fff}
.dpl:disabled{opacity:.3;cursor:default}
.qdate,.qsel,.nta{background:#000;border:1px solid var(--line);padding:8px 10px;color:#fff;font:500 14px var(--body);min-height:40px}
.nta{width:100%;resize:vertical;font-weight:400;line-height:1.4}
.qchks{display:flex;flex-direction:column;gap:6px}
.qchk{display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.35;color:#e6eaec}
.qchk input{margin-top:2px}
.qmsg{border-left:3px solid var(--heat);background:#0a1418;padding:10px 12px;font-size:13px;line-height:1.45;color:#dfe7ea}
.qmsg.qwarn{border-left-color:#ffb347;background:#171108}
.qknown{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.qk{background:var(--surface);padding:9px 12px;display:flex;flex-direction:column;gap:3px;min-width:0}
.qk span{font:500 10px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.qk b{font:600 13.5px/1.3 var(--body);overflow-wrap:anywhere}
.qsug{border-color:var(--seam)}
.qtbl{display:flex;flex-direction:column}
.qtr{display:grid;grid-template-columns:110px minmax(0,1fr) 150px;gap:8px;padding:6px 0;border-top:1px solid #1d2428;font-size:13px}
.qt1{font:600 11px var(--mono);color:var(--muted)}
.qt3{font:500 12px var(--mono);color:var(--muted);text-align:right}
.qlifts{display:flex;flex-direction:column;gap:6px}
.qlift{display:flex;flex-direction:column;gap:2px;text-align:left;background:transparent;border:1px solid var(--line);padding:9px 12px;color:#d4d9dc;cursor:pointer}
.qlift b{font:600 13px var(--body);color:#fff}
.qlift span{font-size:11px;color:var(--muted)}
.qlift.on{border-color:var(--seam);background:rgba(225,6,0,.12)}
.qwhy{margin:0;padding-left:18px;display:flex;flex-direction:column;gap:4px;font-size:12.5px;line-height:1.4;color:#dfe7ea}
.nh{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.wrap.av>*:not(#aview){display:none !important}
#aview{border:0;padding:0;background:none}
#aview[hidden]{display:none !important}
.av{max-width:620px;margin:0 auto;display:flex;flex-direction:column;gap:12px;padding:4px 0 48px}
.avwho{display:flex;flex-direction:column;gap:2px}
.avwho b{font:700 12px/1.2 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--heat)}
.avwho span{font-size:12px;color:var(--muted)}
.avdn{display:flex;align-items:center;gap:8px}
.avdt{flex:1;min-width:0;text-align:center;font:700 20px/1.2 var(--body);color:#fff}
.avnb{min-width:44px;height:44px;background:transparent;border:1px solid var(--line);color:#fff;font:600 20px/1 var(--body);cursor:pointer;padding:0 12px}
.avnb:hover:not(:disabled){border-color:#4a5258}
.avnb:disabled{opacity:.35;cursor:default}
.avsub{font:600 12px/1.3 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.avpr{display:flex;align-items:center;gap:10px}
.avbar{flex:1;height:8px;background:#1a2024;border-radius:4px;overflow:hidden}
.avbar i{display:block;height:100%;width:0;background:var(--heat);transition:width .25s}
.avpr.alld .avbar i{background:var(--ok)}
.avprt{font:600 12px var(--mono);color:var(--muted);min-width:92px;text-align:right}
.avcoach{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:8px 10px;border:1px dashed #2a3a44;background:#0a0f12}
.avmsg{margin:0;padding:10px 0;color:var(--muted);font-size:14px;line-height:1.45}
.avrules{border:1px solid #6b2a28;background:rgba(225,6,0,.08);padding:12px 14px}
.avrules b{font:700 13px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:#ff8a85}
.avrules ul{margin:8px 0 0;padding-left:18px;font-size:14px;line-height:1.45;color:#e6eaed}
.avl{display:flex;flex-direction:column;gap:10px;margin-top:6px}
.avlh{display:flex;flex-direction:column;gap:2px;padding:6px 0 4px;border-bottom:1px solid var(--line)}
.avlh b{font:700 12px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--heat)}
.avlh span{font:700 18px/1.25 var(--body);color:#fff}
.avx{border:1px solid var(--line);background:var(--surface);padding:12px;display:flex;flex-direction:column;gap:9px;min-width:0}
.avx.done{border-color:#2f5a4a;background:#0b1512}
.avx.skip{opacity:.6}
.avx.ac{border-left:3px solid var(--seam)}
.avx.avi .avxh{align-items:center}
.avss{border-left:4px solid var(--heat);padding-left:10px;display:flex;flex-direction:column;gap:8px}
.avssh{display:flex;flex-direction:column;gap:2px}
.avssh b{font:700 12px var(--mono);letter-spacing:.12em;color:var(--heat)}
.avssh span{font-size:12px;color:var(--muted)}
.avxh{display:flex;gap:10px;align-items:flex-start}
.avslot{flex:none;min-width:30px;text-align:center;font:700 13px var(--mono);color:var(--heat);padding-top:3px}
.avname{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.avname b{font:700 17px/1.25 var(--body);color:#fff;overflow-wrap:anywhere}
.avname span{font-size:12px;color:var(--muted)}
.avname .avsw{color:#9ed4f0}
.avvid{flex:none;min-height:40px;padding:0 12px;background:rgba(86,183,230,.14);border:1px solid #56b7e6;color:#fff;font:700 13px var(--body);cursor:pointer;white-space:nowrap}
.avvid.none{border-color:var(--line);background:none;color:var(--muted)}
.avrx{display:flex;flex-wrap:wrap;gap:6px}
.avchip{padding:4px 8px;border:1px solid #3a444a;font:700 12px/1.2 var(--mono);color:#e6eaed;background:#101417}
.avchip.main{border-color:#fff;color:#fff}
.avchip.speed{border-color:#56b7e6;color:#9ed4f0;background:rgba(86,183,230,.12)}
.avchip.tempo{border-color:#88e0c6;color:#88e0c6}
.avchip.ac{border-color:var(--seam);color:#ff8a85;background:rgba(225,6,0,.1)}
.avchip.adj{border-color:#ffb347;color:#ffb347}
.avcue{margin:0;font-size:13px;line-height:1.45;color:#cdd3d7}
.avsets{display:flex;flex-direction:column;gap:6px}
.avset{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.avset.bonus{border-top:1px dashed #3a444a;padding-top:6px}
.avset.locked{opacity:.45}
.avlock{font:600 12px var(--body);color:#ffb347}
.avsn{flex:none;width:28px;font:700 14px var(--mono);color:var(--muted);text-align:center}
.avin{flex:1 1 70px;min-width:62px;height:44px;background:#000;border:1px solid var(--line);color:#fff;font:600 18px var(--mono);padding:0 8px;text-align:center}
.avin:focus{border-color:#56b7e6;outline:none}
.avin.auto{color:#8fa0aa}
.avin.need,.avsp.need{border-color:var(--seam);animation:avshake .3s}
.avin.avwide{width:100%;text-align:left}
@keyframes avshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.avsp{display:flex;gap:4px;flex:1 1 auto}
.avres{flex:1;min-height:44px;padding:0 10px;background:none;border:1px solid var(--line);color:var(--muted);font:700 13px var(--body);cursor:pointer;white-space:nowrap}
.avres.on{background:rgba(136,224,198,.16);border-color:var(--ok);color:var(--ok)}
.avres.low.on{background:rgba(225,6,0,.16);border-color:var(--seam);color:#ff8a85}
.avck{flex:none;width:44px;height:44px;border:2px solid #4a5258;background:none;color:transparent;font:700 22px/1 var(--body);cursor:pointer;border-radius:50%;padding:0}
.avck.on{background:var(--ok);border-color:var(--ok);color:#000}
.avset.ok .avin{color:#fff;border-color:#2f5a4a}
.avact{display:flex;flex-wrap:wrap;gap:6px 14px}
.avab{background:none;border:0;padding:6px 0;color:var(--muted);font:600 13px var(--body);cursor:pointer;text-decoration:underline;text-underline-offset:3px;min-height:32px}
.avab:hover{color:#fff}
.avnote{margin:0;padding:8px 10px;background:#101417;border-left:3px solid #4a5258;font-size:13px;color:#dfe5e8;white-space:pre-wrap}
.avfin{min-height:52px;font-size:16px}
.avfin.on{background:var(--ok);border-color:var(--ok);color:#000}
.avov{position:fixed;inset:0;z-index:600;background:rgba(0,0,0,.74);display:flex;align-items:flex-end;justify-content:center}
.avpn{width:min(620px,100%);max-height:92vh;display:flex;flex-direction:column;background:#0b0d0e;border:1px solid #3a444a;border-top:3px solid var(--heat)}
.avph{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--line)}
.avph b{font:700 16px/1.25 var(--body);color:#fff;min-width:0;overflow-wrap:anywhere}
.avpb{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px;min-height:0}
.avfr{width:100%;aspect-ratio:16/9;border:0;background:#000}
.avcap{margin:0;font-size:13px;color:#ffb347}
.avlink{color:#9ed4f0;font-size:14px}
.avsrch{width:100%;min-height:48px;background:#000;border:1px solid var(--line);color:#fff;font:500 16px var(--body);padding:0 12px}
.avsrch:focus{border-color:#56b7e6;outline:none}
.avres2{display:flex;flex-direction:column;overflow:auto;max-height:52vh}
.avhd{padding:6px 2px;font:500 11px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.avit{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;padding:10px 8px;border:0;border-bottom:1px solid #151a1d;background:none;color:#d4d9dc;font:500 15px/1.3 var(--body);text-align:left;cursor:pointer}
.avit:hover{background:rgba(86,183,230,.16)}
.avit b{color:#fff;font-weight:700}
.avit small{font:400 12px var(--body);color:var(--muted)}
.avit.use{color:#9ed4f0}
.avfld{display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--muted)}
.avchk{display:flex;align-items:center;gap:10px;font-size:15px;color:#fff;min-height:40px}
.avchk input{width:22px;height:22px}
.avta{width:100%;background:#000;border:1px solid var(--line);color:#fff;font:500 16px/1.4 var(--body);padding:10px}
.avbtns{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
.avbtns .btn{flex:1 1 140px;min-height:48px}
.avrv{display:flex;flex-direction:column}
.avrvr{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #151a1d}
.avrvr.sim{box-shadow:inset 3px 0 0 #ffb347;padding-left:8px}
.avrvr.none{box-shadow:inset 3px 0 0 var(--seam);padding-left:8px}
.avrvn{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.avrvn b{font:600 14px/1.3 var(--body);color:#fff;overflow-wrap:anywhere}
.avrvn small{font-size:12px;color:var(--muted)}
@media (min-width:700px){.avov{align-items:center}.avpn{max-height:86vh}}
.avsets.inl{flex-direction:row;flex-wrap:wrap;gap:10px}
.avsets.inl .avset{gap:0}
.avsets.inl .avck{width:48px;height:48px;font:700 17px var(--mono);color:#e6eaed}
.avsets.inl .avck.on{color:#000}
.ldcell{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0}
.ldcell.pick{border-top-color:var(--heat);background:#14202a}
.ldcell .ldt{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lgrid.lgn .ldcell{font-size:13.5px;letter-spacing:.02em;padding:7px 4px}
.ldsc{font:700 12px/1 var(--mono);min-width:26px;text-align:center;padding:3px 6px;border:1px solid var(--heat);background:rgba(86,183,230,.16);color:#fff}
.ldsc.hot{background:var(--seam);border-color:var(--seam)}
.ldact{display:flex;flex-wrap:wrap;gap:2px 12px;justify-content:center}
.ldb{background:none;border:0;padding:1px 0;color:var(--muted);font:600 10px/1.3 var(--mono);letter-spacing:.06em;text-transform:uppercase;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.ldb:hover{color:#fff}
.lbox.lnarrow .lh2{white-space:normal;display:block;max-height:calc(2.4em + 2px);overflow:hidden;font-size:13px;line-height:1.2;min-height:2.4em}
.lrow.lnar{display:grid;gap:4px;align-items:start;padding:3px 0}
.lrow.lnar .lnb{min-width:0}
.lrow.lnar .sl{padding-top:1px}
.ldose{font:500 10.5px/1.3 var(--mono);color:var(--muted);overflow-wrap:anywhere}
.mr .mc i.mdq{cursor:pointer}
.mr .mc i.mdq:hover,.mr .mc i.mdon{outline:2px solid #fff;outline-offset:-2px}
.mdp,.mdw{position:fixed;z-index:500;display:flex;flex-direction:column;background:#0b0d0e;border:1px solid #3a444a;border-top:3px solid var(--heat);box-shadow:0 20px 50px rgba(0,0,0,.85);min-height:0}
.mdp{width:760px;max-width:calc(100vw - 16px)}
.mdw{width:min(1900px,calc(100vw - 24px))}
.mdk{position:fixed;inset:0;z-index:499;background:rgba(0,0,0,.62)}
.mdh{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--line);flex:none}
.mdt{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}
.mdt b{font:700 16px/1.2 var(--body);color:#fff}
.mdt span{font:500 11.5px/1.3 var(--body);color:var(--muted);overflow-wrap:anywhere}
.mdsc{flex:none;min-width:30px;text-align:center;font:700 14px/1 var(--mono);padding:7px 8px;border:1px solid var(--heat);background:rgba(86,183,230,.16);color:#fff}
.mdsc.hot{background:var(--seam);border-color:var(--seam)}
.mdx{flex:none;width:34px;height:34px;background:none;border:1px solid var(--line);color:var(--muted);font-size:14px;cursor:pointer}
.mdx:hover{color:#fff;border-color:#4a5258}
.mdb{flex:1 1 auto;min-height:0;overflow:auto;padding:10px 12px;display:flex;flex-direction:column;gap:14px;overscroll-behavior:contain}
.mdb>.lgrid{flex:none}
.mdf{flex:none;display:flex;gap:10px;justify-content:space-between;align-items:center;padding:6px 12px;border-top:1px solid var(--line);font:500 11px/1.3 var(--body);color:var(--muted)}
.mdp .lgrid{gap:6px}
.lgrid.lgm{display:block;column-gap:12px}
.lgrid.lgm .lbox{break-inside:avoid;margin-bottom:8px}
.mdgo{white-space:nowrap}
.mdh .btn{flex:none}
.mdp .lbox{background:transparent}
.mdp .ldh{display:flex;align-items:baseline;gap:8px;padding-bottom:0}
.mdp .lh2{margin:0 0 6px;flex:1 1 auto;min-width:0}
.mdtl{flex:none;display:flex;flex-wrap:nowrap;align-items:center;gap:6px;padding:8px 12px 0;overflow-x:auto;-webkit-overflow-scrolling:touch}
.mdtl .seg,.mdtl .note{flex:none}
.lbox.lcn .lr2{padding-left:0;gap:4px}
.lbox.lcn .lr1{grid-template-columns:16px 24px minmax(0,1fr) auto;gap:4px}
.mcde{margin-left:auto}
.ldv{display:inline-block;margin-left:5px;padding:0 5px;font:700 11px/1.2 var(--mono);color:#fff;border:1px solid var(--heat);background:rgba(86,183,230,.16);white-space:nowrap}
.ldv.hot{background:var(--seam);border-color:var(--seam)}
@media (pointer:coarse){.lin,.lin.nmi,.lbox .lr2 .lin{font-size:16px}.mr .mc i.mdq{height:28px;line-height:28px}}
.mdk{touch-action:none}
.expop{position:fixed;z-index:9999;background:#0b0d0e;border:1px solid #56b7e6;box-shadow:0 14px 34px rgba(0,0,0,.75);overflow:auto;display:flex;flex-direction:column;max-width:calc(100vw - 16px)}
.exph{position:sticky;top:0;padding:7px 10px;background:#0b0d0e;border-bottom:1px solid var(--line);font:500 10px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);z-index:1}
.exi{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;padding:7px 10px;border:0;border-bottom:1px solid #151a1d;background:transparent;color:#d4d9dc;font:500 13px/1.3 var(--body);text-align:left;cursor:pointer}
.exi.on,.exi:hover{background:rgba(86,183,230,.16)}
.exi .exn{overflow-wrap:anywhere}
.exi b{color:#fff;font-weight:700}
.exi small{font:400 11px var(--body);color:var(--muted)}
.exi.exu{color:#9ed4f0;border-bottom:0}
.exe{padding:12px;font-size:12.5px;color:var(--muted);line-height:1.4}
.lin.nmi:focus{border-color:#56b7e6;outline:none}
.qh2r{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:6px}
.qh2r .qh2{margin-top:0}
.qtbl.ed .qtr{grid-template-columns:110px minmax(0,1fr) auto 140px;align-items:center}
.qctl{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.qstep{display:inline-flex;align-items:center;border:1px solid var(--line)}
.qstep button{width:30px;height:30px;background:transparent;border:0;color:#fff;font:600 16px/1 var(--body);cursor:pointer}
.qstep button:hover:not(:disabled){background:rgba(86,183,230,.14)}
.qstep button:disabled{opacity:.3;cursor:default}
.qstep b{min-width:30px;text-align:center;font:700 14px var(--mono)}
.qslide{background:#000;border:1px solid var(--line);color:#fff;font:500 12px var(--body);padding:5px 6px;min-height:30px}
.qslid{color:var(--muted);font-weight:500}
.qtool{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:10px 12px;border:1px dashed #2a3a44;background:#0a0f12}
.qlo{display:flex;gap:8px;align-items:stretch}
.qlo .qlift{flex:1;min-width:0}
.qedit{align-self:center}
.qled{border:1px solid #2a3a44;background:#0a0f12;padding:12px;display:flex;flex-direction:column;gap:8px;margin:-2px 0 4px}
.qlr{display:grid;grid-template-columns:92px minmax(0,1.5fr) 74px 84px auto;gap:8px;align-items:center}
.qlr .qsel{min-width:0;width:100%;min-height:34px;padding:5px 8px}
.qlf{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.qs.warn{color:#ffb347}
@media (max-width:640px){.qtbl.ed .qtr{grid-template-columns:1fr}.qlr{grid-template-columns:1fr 1fr}.qlr .qt1{grid-column:1/-1}}
.qtbl.ed .qprog{width:100%;min-width:0;min-height:34px;padding:5px 8px;font-size:13px;text-transform:none;letter-spacing:0;font-weight:500}
.nh h3{margin:0}
.ncard{border:1px solid var(--line);background:var(--surface);padding:12px 14px;display:flex;flex-direction:column;gap:8px}
.nm{font:500 11px var(--mono);color:var(--muted)}
.nm b{color:#fff}
.nt{white-space:pre-wrap;font-size:14px;line-height:1.5}
.nact{display:flex;gap:8px}
@media (max-width:640px){.qtr{grid-template-columns:1fr}.qt3{text-align:left}}
.lgrp{font:600 9.5px/1.2 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--heat);padding:8px 0 2px}
.lsub{font:400 10px var(--mono);color:var(--muted)}
.lrow.ledit{display:flex;flex-direction:column;align-items:stretch;gap:4px;padding:6px 0}
.lr1{display:grid;grid-template-columns:18px 26px minmax(0,1fr) auto;gap:6px;align-items:center}
.lr2{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;padding-left:50px}
.lr2 .lin{text-align:left;font-size:11.5px}
.wrap.dv.editing .dvbrief{display:none}
.wrap.tv #lanes,.wrap.tv .dstr:not(.pat),.wrap.tv .sses:not(.pat),.wrap.tv .strtag:not(.pat),.wrap.tv .bst,.wrap.tv .brow.h span:last-child{display:none !important}
.wrap.tv .brow{display:flex;flex-wrap:nowrap;gap:6px;align-items:center;padding:6px 0;overflow-x:auto}
.wrap.tv .brow select{flex:1 1 0 !important;min-width:96px !important;width:auto !important}
.wrap.tv .brow input[type=number]{flex:none !important;width:52px !important}
.wrap.tv .brow .btn.sm{flex:none;padding-left:8px;padding-right:8px}
.wrap.tv .brow .bn,.wrap.tv .brow .note{flex:none}
.wrap.tv .brow.h{display:none !important}
.brow.th2{display:none}
.wrap.tv .brow.th2{display:flex !important;padding:0 0 2px;border-bottom:0;font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.wrap.tv .brow.th2 .c{flex:1 1 0;min-width:96px}
.wrap.tv .brow.th2 .bn{flex:none}
.wrap.tv .brow.th2 .wk{flex:none;width:76px}
.wrap.tv .brow.th2 .bx{flex:none;width:120px}
.wrap.tv .bth{display:contents}
#sview{flex-direction:column;gap:14px}
.svhead{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px 24px;align-items:flex-start}
.svhead h2{margin:0;font:700 26px/1.1 var(--body);color:#fff}
.svhead .note{margin:6px 0 0}
.svm2{margin:4px 0 10px;padding:10px;border:1px solid var(--line);background:#07090a}
.svstats{display:flex;flex-wrap:wrap;gap:0;border:1px solid var(--line)}
.svstats div{display:flex;flex-direction:column;gap:4px;padding:10px 14px;border-left:1px solid var(--line);min-width:96px}
.svstats div:first-child{border-left:0}
.brow.sth2{display:flex;gap:6px;border:0;padding:0 0 2px;font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.brow.sth2 .c{flex:1 1 0;min-width:96px}.brow.sth2 .bn{flex:none;min-width:18px}.brow.sth2 .wk{flex:none;width:84px}.brow.sth2 .bx{flex:none;width:120px}
.svrow{flex-wrap:nowrap !important;gap:6px !important;overflow-x:auto}
.svrow select{flex:1 1 0;min-width:96px}
.svrow .bsn{display:none}
.smap{display:flex;flex-direction:column;min-width:640px;margin-top:10px}
.smr{display:grid;grid-template-columns:44px 120px minmax(150px,1fr) 70px 196px 60px;gap:10px;align-items:center;padding:6px 0;border-top:1px solid var(--line);font-size:13px}
.smr.h{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:0}
.smr .n{font:700 15px var(--mono);color:#fff}
.smr .pg b{display:block;font:700 12px var(--mono);letter-spacing:.04em;text-transform:uppercase}
.smr .pg span{font-size:11px;color:var(--muted)}
.smr .sq{display:grid;grid-template-columns:repeat(7,24px);gap:4px}
.smr .sq i{height:22px;display:flex;align-items:center;justify-content:center;font:600 10px var(--mono);font-style:normal;background:#111416;color:var(--muted)}
.smr .sq i.l{background:#0d2430;color:var(--heat)}.smr .sq i.p{background:#151819;color:#cfd4d8}
.smr .r{text-align:right;font:600 13px var(--mono)}
.smr.cur{background:#0b1215}
.smr.on{outline:1px solid var(--heat);outline-offset:-1px}
.smr{cursor:pointer}
.svpg{justify-content:space-between}
.svpg .pager{display:flex;align-items:center;gap:8px}
.svdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
.svd{border:1px solid var(--line);background:#0c0e10;padding:8px;display:flex;flex-direction:column;gap:6px;min-height:150px;min-width:0;overflow:hidden;text-align:left;font:inherit;color:inherit;cursor:pointer}
.svd.on{border-color:var(--heat)}
.svd.none{border-style:dashed;background:none;cursor:default}
.svd .dd1{display:flex;flex-direction:column;gap:2px}
.svd .dd1 b{font:700 14px var(--body);text-transform:uppercase;color:#fff}
.svd .dd1 span{font:400 11px var(--mono);color:var(--muted)}
.svd .tt{font:700 11px/1.25 var(--mono);letter-spacing:.04em;text-transform:uppercase;color:var(--heat)}
.svd ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:3px}
.svd li{display:flex;flex-direction:column;gap:1px;font-size:11.5px;line-height:1.25;border-top:1px solid #1a1f22;padding-top:3px}
.svd li b{font:600 11px var(--mono);white-space:normal;overflow-wrap:anywhere;color:#fff}
.svd li span{overflow-wrap:anywhere}
.svd .sgl{font:700 9.5px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-top:2px}
.svd .more{font:400 11px var(--mono);color:var(--muted)}
@media (max-width:900px){.svdays{grid-template-columns:repeat(2,minmax(0,1fr))}}
.svstats{display:flex;flex-wrap:wrap;gap:10px 28px}
.svstats div{display:flex;flex-direction:column;gap:4px}
.svstats b{font:600 20px/1 var(--body);font-variant-numeric:tabular-nums;color:#fff}
.svstats span{font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.svstats .warn b{color:#56b7e6}
.ltl .bk.f-ML{background:#1d1a2e;border-color:#9a8cff}.ltl .bk.f-TL{background:#0d2430;border-color:var(--heat)}.ltl .bk.f-FC{background:#0f2a1f;border-color:#88e0c6}.ltl .bk.f-AC{background:#2a210c;border-color:#56b7e6}.ltl .bk.f-AP{background:#2a0b0a;border-color:#ff8a85}.ltl .bk.f-none{background:#151819;border-color:#3a4246;color:var(--muted)}
.ltl .comp{position:absolute;top:-4px;bottom:-4px;border-left:2px dashed #ff8a85;z-index:2}
.ltl .bk.wkc{border-left-color:#3a4246;background:#0b0d0e;color:var(--muted);font-weight:400}
.ltl .bk.wkc.cur{color:#fff;border-left-color:#fff}
.svrow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:7px 0;border-bottom:1px solid var(--line)}
.svrow .bn{font:600 11px var(--mono);color:var(--muted);min-width:18px}
.svrow input[type=number]{width:64px}
.svrow .bsn{flex:1 0 100%;font:400 11px/1.3 var(--mono);color:var(--muted)}

.hl{display:flex;flex-direction:column}
.he{display:flex;flex-wrap:wrap;gap:10px 24px;align-items:center;padding:14px 0;border-top:1px solid var(--line)}
.he:first-child{border-top:0;padding-top:0}
.he .hd{display:flex;flex-direction:column;gap:4px;min-width:180px;flex:1 1 220px}
.he .hd b{font-size:15px;color:var(--ink)}
.he .hd span{font:400 12px var(--mono);color:var(--muted)}
.he .hph{display:flex;flex-wrap:wrap;gap:4px;flex:2 1 260px}
.he .hs{display:flex;gap:18px;flex-wrap:wrap}
.he .hs div{display:flex;flex-direction:column;gap:3px}
.he .hs b{font:600 15px/1 var(--body);font-variant-numeric:tabular-nums;color:var(--ink)}
.he .hs span{font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.he .ha{display:flex;gap:8px;flex-wrap:wrap}
.btn{background:transparent;border:1px solid var(--line);padding:7px 12px;min-height:36px;color:#d4d9dc;font-weight:600;font-size:13px}
.btn:hover{border-color:#4a5258;color:#fff}
.btn.primary{background:var(--seam);border-color:var(--seam);color:#fff}
.btn.danger{color:#ff8a85}
.btn.sm{padding:5px 10px;min-width:36px;min-height:32px}
.btn:disabled{opacity:.35;cursor:default}
.note{font-size:12px;color:var(--muted)}
.note.warn,.warn{color:var(--swap)}
.ok{color:var(--ok)}
.pager{display:flex;gap:6px;align-items:center;margin-left:auto}
.flags{display:flex;flex-direction:column;gap:8px;background:var(--surface);border:1px solid var(--seam);padding:12px 14px}
.flag{display:flex;gap:10px;align-items:baseline;font-size:13px;color:#d4d9dc}
.flag b{flex:none;font:600 10px/1 var(--mono);letter-spacing:.08em;background:var(--seam);color:#fff;padding:4px 6px}
.panel{background:var(--surface);border:1px solid var(--line);padding:16px 18px;display:flex;flex-direction:column;gap:14px}
h3{font:600 11px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0}
.form{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}
.form label{display:flex;flex-direction:column;gap:5px;font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);min-width:0}
.form input,.form select,.brow select,.brow input,.svrow select,.svrow input,dialog input{background:#000;border:1px solid var(--line);padding:8px 10px;min-height:36px;width:100%;font:400 14px var(--body);letter-spacing:0;text-transform:none;color:var(--ink);color-scheme:dark}
.form input::placeholder{color:#7d868c}
.swaps{display:flex;flex-wrap:wrap;gap:8px}
.chip{display:inline-flex;gap:8px;align-items:center;background:#000;border:1px solid var(--line);padding:4px 6px 4px 12px;font-size:12px;max-width:100%}
.chip span{overflow-wrap:anywhere}
.chip button{border:0;background:var(--sunk);width:24px;height:24px;line-height:1}
.week{display:flex;flex-direction:column;gap:10px}
.wkhead{display:flex;flex-wrap:wrap;gap:6px 18px;align-items:baseline}
.wkhead h2{font:700 22px/1 var(--body);margin:0}
.wkhead .m{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}
.wkhead .m b{color:var(--ink);font-weight:600}
.days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px;align-items:stretch}
.day{background:var(--surface);border:1px solid var(--line);min-width:0;display:flex;flex-direction:column}
.day.off{background:transparent;border-style:dashed}
.day.today{border-color:var(--seam);box-shadow:inset 0 3px 0 var(--seam)}
.dh{display:flex;justify-content:space-between;gap:8px;align-items:flex-start;padding:9px 10px 7px}
.dn{font:600 13px/1.1 var(--body);text-transform:uppercase;letter-spacing:.04em}
.dn small{display:block;font:400 11px/1.2 var(--mono);letter-spacing:0;text-transform:none;color:var(--muted);margin-top:3px}
.score{flex:none;min-width:32px;text-align:center;font:600 15px/1 var(--mono);padding:6px 5px;font-variant-numeric:tabular-nums;
  background:color-mix(in oklab,var(--heat) calc(var(--h)*100%),var(--sunk));color:var(--ink)}
.score.hot{color:#000}
.plan{padding:0 10px 7px;font-size:11px;color:var(--muted);overflow-wrap:anywhere}
.dsum{padding:0 10px 8px;font:600 12px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:#ff8a85}
.dsum.off{color:var(--muted)}
.dtog{margin:0 8px 8px;background:var(--sunk);border:1px solid var(--line);color:var(--ink);font:500 11px/1.2 var(--mono);padding:7px 6px;min-height:32px;cursor:pointer;text-align:center}
.dtog:hover{border-color:#fff}
.day.cmp .addbtn{margin-top:0}
.day.xp{outline:1px solid #4a5258}
.dmv{display:flex;align-items:center;justify-content:space-between;gap:3px;padding:0 8px 8px}
.dmv .mvb{flex:1 1 0;min-width:0}
.dgrip{cursor:grab;font:700 12px/1 var(--mono);color:var(--muted);letter-spacing:-2px;padding:4px 2px;user-select:none;touch-action:none}
.dgrip:hover{color:#fff}
.day.dragging{opacity:.45}
.day.dayover{border-color:var(--seam);box-shadow:inset 0 0 0 2px var(--seam)}
.cmpbar{display:flex;gap:6px;margin-left:auto}
.btn.on{border-color:var(--seam)}
.offlabel{padding:0 10px 10px;font-size:12px;color:var(--muted)}
ol.drills{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
ol.drills li{border-top:1px solid var(--line)}
.dr{display:block;width:100%;text-align:left;background:none;border:0;padding:7px 10px;min-width:0}
button.dr:hover{background:var(--sunk)}
.dr .nm{display:block;font-weight:500;font-size:13px;line-height:1.25;overflow-wrap:anywhere}
.dr.swapped .nm{color:var(--swap)}
.dr.swapped .nm::after{content:" (swapped)";font-weight:400;font-size:11px}
.dr .mt{display:block;font:400 11px/1.4 var(--mono);color:var(--muted);overflow-wrap:anywhere}
.dr .vid{font:600 11px/1 var(--mono);color:var(--heat);text-decoration:none;white-space:nowrap;margin-left:2px}
.dr .vid:hover{color:#fff;text-decoration:underline}
.spec{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1px;margin-top:7px;background:var(--line);border:1px solid var(--line)}
.sc{display:flex;flex-direction:column;gap:3px;background:#000;padding:5px 7px;min-width:0}
.sc.ball{grid-column:1 / -1}
.sc.tgt{grid-column:1 / -1}
.sk{font:500 9px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.sv{font:600 12px/1.25 var(--mono);color:var(--ink);overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
.sc.tgt .sv{color:var(--ok)}
.sc.chg{box-shadow:inset 2px 0 0 var(--swap)}
.sc.chg .sv,.sc.chg .sk{color:var(--swap)}
.ein{width:100%;min-width:0;background:var(--sunk);border:1px solid #3a4248;color:var(--ink);font:600 12px/1.2 var(--mono);padding:4px 5px;min-height:28px;color-scheme:dark}
.ein:hover{border-color:#5a646a}
.ewrap{display:flex;align-items:center;gap:4px}
.eun{font:500 11px var(--mono);color:var(--muted);flex:none}
.enote{font-size:11px;color:var(--muted);line-height:1.35}
.dragbar{display:flex;align-items:center;gap:4px;margin:-2px 0 5px}
.dragh{cursor:grab;font:700 13px/1 var(--mono);color:var(--muted);padding:4px 4px 4px 0;letter-spacing:-2px;user-select:none;touch-action:none}
.dragh:hover{color:#fff}
.dragt{font:500 9px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:#6b747a;flex:1}
.mvb{min-width:26px;min-height:24px;padding:2px 6px;font-size:11px}
li.dragging{opacity:.4}
li.dropb{box-shadow:inset 0 2px 0 var(--seam)}
li.dropa{box-shadow:inset 0 -2px 0 var(--seam)}
.libn{background:none;border:0;padding:0;color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.libn:hover{text-decoration:underline}
.addbtn{margin:auto 8px 8px;background:none;border:1px dashed #4a5258;color:var(--muted);font:600 11px/1 var(--mono);letter-spacing:.06em;text-transform:uppercase;padding:8px;min-height:32px}
.addbtn:hover{border-color:var(--seam);color:#fff}
.dfoot+.dragbar{display:flex;align-items:center;gap:4px;margin:-2px 0 5px}
.dragh{cursor:grab;font:700 13px/1 var(--mono);color:var(--muted);padding:4px 4px 4px 0;letter-spacing:-2px;user-select:none;touch-action:none}
.dragh:hover{color:#fff}
.dragt{font:500 9px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:#6b747a;flex:1}
.mvb{min-width:26px;min-height:24px;padding:2px 6px;font-size:11px}
li.dragging{opacity:.4}
li.dropb{box-shadow:inset 0 2px 0 var(--seam)}
li.dropa{box-shadow:inset 0 -2px 0 var(--seam)}
.libn{background:none;border:0;padding:0;color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.libn:hover{text-decoration:underline}
.addbtn{margin-top:8px}
.day.off .dragbar{display:flex;align-items:center;gap:4px;margin:-2px 0 5px}
.dragh{cursor:grab;font:700 13px/1 var(--mono);color:var(--muted);padding:4px 4px 4px 0;letter-spacing:-2px;user-select:none;touch-action:none}
.dragh:hover{color:#fff}
.dragt{font:500 9px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:#6b747a;flex:1}
.mvb{min-width:26px;min-height:24px;padding:2px 6px;font-size:11px}
li.dragging{opacity:.4}
li.dropb{box-shadow:inset 0 2px 0 var(--seam)}
li.dropa{box-shadow:inset 0 -2px 0 var(--seam)}
.libn{background:none;border:0;padding:0;color:var(--ink);font:inherit;text-align:left;cursor:pointer}
.libn:hover{text-decoration:underline}
.addbtn{margin-top:4px}
.addtag{display:inline-block;margin-top:3px;font:600 9px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--heat)}
.dr.added{box-shadow:inset 2px 0 0 var(--heat)}
.addrm{margin-top:6px;font-size:11px;color:#ff8a85;min-height:28px}
.addgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:10px}
.addgrid input{background:#000;border:1px solid var(--line);padding:6px 8px;min-height:34px;color:var(--ink);font:400 13px var(--body);width:100%;color-scheme:dark}
.nmb{background:none;border:0;padding:0;text-align:left;cursor:pointer;color:inherit}
.nmb:hover{text-decoration:underline;text-decoration-color:var(--seam)}
.dr.hi .sc.int .sv{color:#ff8a85}
.dr .tg{display:inline-block;margin-top:2px;font:600 12px/1.2 var(--mono);color:var(--ok)}

.dfoot{margin-top:auto;padding:6px 10px 8px;border-top:1px solid var(--line);font:400 11px var(--mono);color:var(--muted)}
dialog{background:var(--surface);color:var(--ink);border:1px solid var(--line);padding:20px;width:min(480px,calc(100vw - 32px))}
dialog::backdrop{background:rgb(0 0 0 / .65)}
dialog h4{font:600 18px/1.1 var(--body);margin:0 0 4px}
dialog .col{display:flex;flex-direction:column;gap:12px}
dialog .acts{display:flex;flex-wrap:wrap;gap:8px}
.tag{font:600 10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;padding:5px 8px;background:var(--sunk);color:var(--ink)}
.tag.mound{background:var(--seam);color:#fff}
.barscroll{overflow-x:auto;padding-bottom:4px}
.bars{display:flex;gap:10px;align-items:flex-start;width:100%;min-width:min-content}
.pg{display:flex;flex-direction:column;gap:5px;flex:1 1 0;min-width:0}
.pgbars{display:flex;gap:4px;width:100%;align-items:flex-end;height:168px;border-bottom:1px solid #4a5258}
.pglab{font:500 10px/1 var(--mono);letter-spacing:.06em;color:var(--muted);white-space:nowrap}
.pg.mound .pglab{color:#ff8a85}
.wb{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:2px;flex:1 1 0;min-width:22px;height:100%;padding:0;border:0;background:none;font-variant-numeric:tabular-nums}
.wb .trk{flex:1 1 auto;min-height:0;width:100%;display:flex;align-items:flex-end}
.wb .stk,.wb .wn{flex-shrink:0}
.wb .stk{display:flex;flex-direction:column;align-items:center;gap:1px;margin-bottom:2px}
.wb .tot{font:600 10px/1.2 var(--mono);color:var(--ink)}
.wb .bas{font:400 10px/1.2 var(--mono);color:var(--muted)}
.wb .val{font:600 10px/1.2 var(--mono);color:#88e0c6}
.wb .val.pos{color:#56b7e6}
.mapkey{display:flex;flex-wrap:wrap;gap:14px;font:500 10px/1 var(--mono);letter-spacing:.06em;color:var(--muted);margin-bottom:8px}
.mapkey b{font-weight:600}
.wb .fill{display:block;width:100%;background:var(--heat);opacity:.45}
.pg.mound .wb .fill{background:var(--seam)}
.wb.on .fill,.wb:hover .fill{opacity:1}
.wb.now .wn{color:var(--seam)}
.wb .wn{font:400 10px var(--mono);color:var(--muted);line-height:1.6}
.wb.on .wn{color:var(--ink);font-weight:600}
.tlsum{font-size:13px;color:#d4d9dc}
.tmk{display:flex;flex-direction:column;gap:5px;align-self:stretch;flex:none}
.tml{height:120px;width:0;border-left:2px dashed #4a5258;margin-left:1px}
.tmk.cp .tml{border-left:2px solid var(--seam)}
.tmlab{display:flex;flex-direction:column;gap:3px;white-space:nowrap}
.tmk1{font:600 10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.tmk.cp .tmk1{color:#ff8a85}
.tmk2{font:600 12px/1.1 var(--body);color:var(--ink)}
.desc{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:2px;background:var(--line);border:1px solid var(--line)}
.dsr{display:flex;flex-direction:column;gap:6px;background:var(--surface);padding:12px 14px}
.dsk{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.dsv{font-size:13px;line-height:1.5;color:#d4d9dc;text-wrap:pretty}
.dlsugt{color:var(--ok)} .dlont{color:var(--heat)}
.mr .mp small.dlsug{color:var(--ok);font-weight:600}
.mr .mp small.dlon{color:var(--heat);font-weight:600}
.wb.dlsug .wn{color:#000;background:var(--ok);font-weight:600}
.wb.dlon .wn{color:#000;background:var(--heat);font-weight:600}
.dlbox{display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center;background:var(--surface);border:1px solid var(--ok);padding:10px 14px}
.dltag{font:600 10px/1 var(--mono);letter-spacing:.08em;background:var(--ok);color:#000;padding:5px 7px}
.dltx{font-size:13px;color:#d4d9dc;flex:1 1 320px;text-wrap:pretty}
.dlact{display:flex;flex-wrap:wrap;gap:8px;align-items:flex-end}
.dlsel{display:flex;flex-direction:column;gap:4px;font:500 10px/1.2 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.dlsel select{background:#000;border:1px solid var(--line);padding:6px 8px;min-height:34px;color:var(--ink);font:400 13px var(--body);color-scheme:dark}
.dlmk{align-self:flex-start}
.legend{display:flex;flex-wrap:wrap;gap:14px;font-size:11px;color:var(--muted)}
.legend i{display:inline-block;width:10px;height:10px;margin-right:6px;background:var(--heat);vertical-align:-1px}
.legend i.m{background:var(--seam)}
.brow{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:8px 16px;align-items:center;padding:8px 0;border-bottom:1px solid var(--line)}
.brow.h{font:600 10px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:0 0 4px}
.brow.h span:last-child{color:var(--heat)}
.bth,.bst{display:flex;flex-wrap:wrap;gap:8px;align-items:center;min-width:0}
.bth select.pfs{border-color:#2c4a5a !important}
.bst{border-left:2px solid #2c4a5a;padding-left:12px}
.bst select{flex:1 1 120px !important;border-color:#2c4a5a !important}
.bst .bsn{flex:1 0 100%;font:400 11px/1.3 var(--mono);color:var(--muted)}
@media (max-width:820px){.brow{grid-template-columns:1fr}.bst{border-left:0;border-top:1px dashed #2c4a5a;padding:8px 0 0}.brow.h{display:none}}
.brow .bn{font:500 12px var(--mono);width:20px;color:var(--muted)}
.brow select{flex:1 1 220px;min-width:0;width:auto}
.brow select.fsel{flex:1 1 170px}
.brow select.ssel{flex:1 1 150px}
.brow input{width:70px}
.map{display:flex;flex-direction:column;min-width:720px;font-variant-numeric:tabular-nums}
.mr{display:grid;grid-template-columns:44px 130px minmax(140px,1fr) 196px 48px 60px 60px 52px;gap:10px;align-items:center;padding:3px 8px;border:0;background:none;text-align:left;font-size:12px;width:100%}
.mr.mh{font:500 10px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding-bottom:6px}
button.mr:hover{background:var(--sunk)}
.mr.on{background:var(--sunk);box-shadow:inset 3px 0 0 var(--seam)}
.mr.first{margin-top:6px}
.mr .mw{font:600 13px/1 var(--mono)}
.mr .md{color:var(--muted)}
.mr .mp{font:600 12px/1.2 var(--body);letter-spacing:.04em;text-transform:uppercase;overflow-wrap:anywhere}
.mr .mp small{display:block;font:400 11px/1.3 var(--body);letter-spacing:0;text-transform:none;color:var(--muted)}
.mr .mp.mound{color:#ff8a85}
.mr .mc{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.mr .mc i{font-style:normal;text-align:center;font:500 11px/22px var(--mono);height:22px;background:color-mix(in oklab,var(--heat) calc(var(--h,0)*100%),var(--sunk));color:var(--ink)}
.mr .mc i.hot{color:#000}
.mr.mh .mc i{background:none;color:var(--muted)}
.mr .mt2{text-align:right;font-family:var(--mono)}
.neg{color:#ff8a85 !important}
.bin{width:64px;display:inline-block;margin-left:4px}
@media (max-width:1099px){
  .days{grid-template-columns:1fr}
  .day.off:not(.coach){display:none}
  ol.drills{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
}`;

const HTML=`<div class="wrap">
  <header class="top">
    <div class="id"><span class="lab">Velo University throwing program</span><div class="prog" id="pname"></div><div class="src" id="src"></div></div>
    <div class="stats" id="stats"></div>
  </header>
  <div class="flags" id="flags" hidden></div>
  <div class="bar">
    <button class="btn primary" id="coachBtn" type="button">Coach tools</button>
    <button class="btn" id="boardBtn" type="button">Load from Program Board</button>
    <button class="btn" id="pdfBtn" type="button">Download athlete plan (PDF)</button>
    <button class="btn" id="expBtn" type="button">Export plan file</button>
    <label class="btn filebtn">Import plan file<input type="file" id="impIn" accept=".json,application/json" hidden></label>
    <span class="note" id="status"></span>
  </div>
  <section class="panel" id="coach" hidden>
    <h3>Coach tools</h3>
    <div class="form">
      <label>Program<select id="fProg"></select></label>
      <label>Level<select id="fLevel"></select></label>
      <label>Focus<select id="fFocus"></select></label>
      <label>Start date<input id="fDate" type="date"></label>
      <label id="compWrap">Competition date<input id="fComp" type="date"></label>
      <label>Slide training days (default)<select id="fShift">
        <option value="-3">3 days earlier</option><option value="-2">2 days earlier</option><option value="-1">1 day earlier (day 3 moves to day 2)</option>
        <option value="0">As written</option>
        <option value="1">1 day later (day 3 moves to day 4)</option><option value="2">2 days later</option><option value="3">3 days later</option></select></label>
      <label>Top bullpen velocity (mph)<input id="fVelo" type="number" min="30" max="110" step="0.1" inputmode="decimal"></label>
      <label>Top kneeling velocity (mph)<input id="fKneel" type="number" min="30" max="110" step="0.1" inputmode="decimal"></label>
      <label>Top long toss distance (ft)<input id="fLT" type="number" min="60" max="450" step="5" inputmode="numeric"></label>
    </div>
    <div class="note">Leave velocity and distance fields empty to use the athlete's latest numbers from TrackMan and the Program Board.</div>
    <div id="phases" hidden style="display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line);padding-top:14px">
      <h3>Phase stack, in order</h3>
      <div id="phaseRows"></div>
      <div class="bar"><button class="btn" id="addBlk" type="button">Add block</button><button class="btn" id="sugBtn" type="button">Use suggested stack</button><span class="note" id="phaseNote"></span></div>
    </div>
    <div class="note">Select a drill name in the week to swap it or remove it from that day, use + Add drill on any day, or drag drills by the ⋮⋮ handle to reorder them. Ball, reps and intensity can be edited right in each drill; throws and scores update with every change. Sets, reps and intensity stay locked to the phase structure.</div>
    <div class="swaps" id="swaps"></div>
    <div style="display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line);padding-top:14px">
      <h3>Custom drills</h3>
      <div class="swaps" id="libList"></div>
      <div class="bar"><button class="btn" id="newDrill" type="button">Create new drill</button><span class="note">Custom drills appear in drill search for every athlete.</span></div>
    </div>
    <div class="strc">
      <h3>Patterning</h3>
      <div class="form">
        <label>Patterning<select id="pOn"><option value="1">Include patterning</option><option value="0">No patterning</option></select></label>
        <label>Patterning focus<select id="pFoc"></select></label>
      </div>
    </div>
    <div class="aapp">
      <h3>Athlete app</h3>
      <div class="form">
        <label>Apps Script web app URL<input id="aUrl" type="url" placeholder="https://script.google.com/macros/s/…/exec" autocomplete="off"></label>
        <label>Coach key<input id="aKey" type="password" placeholder="Set in Script Properties" autocomplete="off"></label>
      </div>
      <div class="bar"><button class="btn" id="aSave" type="button">Save connection</button><span class="note" id="aConn"></span></div>
      <div class="bar"><button class="btn primary" id="aPub" type="button">Publish to athlete</button><button class="btn" id="aPrev" type="button">Preview athlete view</button><button class="btn" id="aStop" type="button" hidden>Stop sharing</button><span class="note" id="aPubSt"></span></div>
      <div class="alink" id="aLinkRow" hidden><input id="aLink" type="text" readonly aria-label="Athlete link"><button class="btn sm" id="aCopy" type="button">Copy link</button></div>
      <p class="note">Once connected, plans and history save to the team sheet so every coach and device sees the same plan. The athlete opens their private link to see only their plan, check in before throwing, log each day and enter test results. Republish after you change the plan.</p>
    </div>
    <div class="bar">
      <button class="btn" id="clearBtn" type="button">Clear all swaps, edits and removals</button>
      <button class="btn danger" id="delBtn" type="button">Reset plan</button>
    </div>
  </section>
  <div class="mapbar" id="mapbar" hidden></div>
  <section class="panel" id="timeline" hidden>
    <h3>Offseason map</h3>
    <div class="mapkey"><span>Above each bar, top to bottom:</span><span><b style="color:var(--ink)">Weekly total</b></span><span><b>Rolling baseline</b></span><span><b style="color:#88e0c6">Rolling score</b> (amber above zero, red below)</span></div>
    <div class="barscroll"><div class="bars" id="bars"></div></div>
    <div class="legend"><span><i></i>Build phases</span><span><i class="m"></i>Mound phases</span><span><i style="background:var(--ok)"></i>Suggested deload</span><span><i></i>Deload applied (week number highlighted)</span><span>Plyo-ball days are named by focus plus a load grade from the day score (volume \u00d7 intensity): A under 3, B 3\u20135, C 5\u20137, D 7+. Bar height is weekly volume (weighted throws / 12); the number above is the rolling week score. Rolling score adds each pair of back-to-back day scores and subtracts the week baseline, carrying day 7 into the next week's day 1. Baseline is set from the programmed week so the rolling score sits near zero, so it climbs with the program as volume, intensity and frequency build and eases down no more than 5% in a lighter programmed week. A positive score means the week is loading faster than the baseline; a negative score (deloads, removed drills) means it is lighter. Coaches can override the baseline in the week view. Squares are day scores for days 1 to 7. Rest the pointer on a square to see that day, click it to keep it open, then use Edit day to change it.</span></div>
    <div class="tlsum" id="tlSum"></div>
    <div class="barscroll"><div class="map" id="map"></div></div>
  </section>
  <section class="panel" id="alogp" hidden>
    <div class="alh"><h3>Athlete log</h3><span class="note" id="alSt"></span><button class="btn sm" id="alRead" type="button" hidden>Mark notes read</button><button class="btn sm" id="alRef" type="button">Refresh</button></div>
    <div class="alstats" id="alStats"></div>
    <div class="altbl" id="alList"></div>
    <div id="alTests"></div>
  </section>
  <section class="panel" id="roster" hidden>
    <div class="alh"><h3>Roster</h3><span class="note" id="rSt"></span><button class="btn sm" id="rRef" type="button">Refresh</button></div>
    <div class="barscroll"><div class="rtbl" id="rTbl"></div></div>
    <p class="note">Completion and streak count planned training days logged Done or Partly. Check-ins flag arm soreness of 5 or more, or shoulder or elbow pain. Arm Score and injury are as of the last time the plan was saved. Select an athlete to open their plan.</p>
  </section>
  <div id="sview" class="svwrap" hidden>
    <header class="svhead"><div><h2 id="svTitle">Performance Plan</h2><p class="note" id="svSub"></p></div><div class="svstats" id="svStats"></div></header>
    <div class="bar"><button class="btn primary" id="svCoach" type="button">Coach tools</button><span class="note" id="svSt"></span></div>
    <section class="panel" id="svCoachP" hidden>
      <h3>Coach tools</h3>
      <div class="form" hidden><select id="sOn" hidden><option value="1">Include strength</option></select><label>Strength program<select id="sFam"></select></label><label>Strength phase<select id="sPh"></select></label></div>
      <p class="note" id="sNote" hidden></p>
      <div class="lane" style="border-top:1px solid var(--line);padding-top:14px"><h3>Strength phase stack, in order</h3>
        <div class="lscroll svm2"><div class="ltl" id="svMap2"></div></div><span class="note" id="lnStrN"></span>
        <div class="brow sth2"><span class="bn"></span><span class="c">Family</span><span class="c">Phase</span><span class="c">Length</span><span class="c">Split</span><span class="bx"></span></div>
        <div id="lnStr"></div>
        <div class="bar"><button class="btn" type="button" id="lnStrAdd">Add block</button><button class="btn" type="button" id="lnStrCopy">Match throwing phases</button><button class="btn" type="button" id="svSug">Use suggested progression</button></div>
      </div>
    </section>
    <section class="panel">
      <h3>Offseason map</h3>
      <div class="lscroll"><div class="ltl" id="svMap"></div></div>
      <div class="lscroll"><div class="smap" id="svTbl"></div></div>
    </section>
    <div class="bar svpg"><span class="lab">Week view</span><span class="note" id="svMeta"></span><div class="pager"><button class="btn sm" id="svPrev" type="button" aria-label="Previous week">\u2190</button><b id="svWk"></b><button class="btn sm" id="svNext" type="button" aria-label="Next week">\u2192</button></div></div>
    <div class="svdays" id="svDays"></div>
    <div id="svSes"></div>
  </div>
  <section class="panel" id="lanes">
    <div class="lhd"><h3>How the programs blend</h3><span class="note" id="lnNote"></span></div>
    <div class="lscroll"><div class="ltl" id="lnTl"></div></div>
    <div id="lnEd" hidden>
      <div class="form">
        <label>Throwing coach<input id="lnC1" type="text" placeholder="Coach name" autocomplete="off"></label>
        <label>Strength coach<input id="lnC2" type="text" placeholder="Coach name" autocomplete="off"></label>
      </div>
      <div class="lane"><div class="lnh"><b>Sheet rows</b><span class="note">One row per block in each lane.</span><button class="btn sm" type="button" id="lnCopyRows">Copy rows</button><button class="btn sm primary" type="button" id="lnWrite">Write to sheet</button><span class="note" id="lnWSt"></span></div><div class="lrows" id="lnRows"></div></div>
    </div>
  </section>
  <section class="panel" id="hist" hidden>
    <h3>Completed programs</h3>
    <p class="note">A plan moves here automatically the day after its competition date (or its last week, if no competition date is set). When the athlete app is connected, history is shared with every coach through the team sheet. Otherwise it is saved in this browser; export a file to back it up.</p>
    <div class="hl" id="histList"></div>
    <div class="bar"><button class="btn" id="hExp" type="button">Export plan and history file</button><label class="btn filebtn">Import file<input type="file" id="hImp" accept=".json,application/json" hidden></label><span class="note" id="hStatus"></span></div>
  </section>
  <div class="bar" id="pager" hidden>
    <span class="lab">Week view</span>
    <div class="pager">
      <button class="btn sm" id="prevW" type="button" aria-label="Previous week">&larr;</button>
      <span class="note" id="pagerLbl"></span>
      <button class="btn sm" id="nextW" type="button" aria-label="Next week">&rarr;</button>
    </div>
  </div>
  <section class="panel" id="bview" hidden></section>
  <section class="panel" id="nview" hidden></section>
  <section class="panel" id="aview" hidden></section>
  <section class="panel" id="mcal" hidden></section>
  <div class="dvbar" id="dvbar" hidden></div>
  <main id="cal"></main>
</div>
<dialog id="dlg">
  <form method="dialog" class="col" id="dlgForm">
    <div><h4>Swap drill</h4><div class="note" id="dlgFrom"></div></div>
    <label class="note" for="dlgTo">Replace with (type to search, or enter a new drill)</label>
    <input id="dlgTo" list="drillList" autocomplete="off">
    <div class="note">A name that isn't in the library is used as typed. To give a new drill default values or a video link, use Create new drill in Coach tools.</div>
    <datalist id="drillList"></datalist>
    <div class="acts">
      <button class="btn primary" type="button" id="dlgAll">Swap every use</button>
      <button class="btn" type="button" id="dlgOne">This day only</button>
      <button class="btn" type="button" id="dlgReset">Reset to base</button>
      <button class="btn danger" type="button" id="dlgDel">Remove from this day</button>
      <button class="btn" type="button" id="dlgCancel">Cancel</button>
    </div>
  </form>
</dialog>
<dialog id="dlgAdd">
  <form method="dialog" class="col" id="addForm">
    <div><h4>Add drill</h4><div class="note" id="addFrom"></div></div>
    <label class="note" for="addName">Drill (type to search, or enter a new drill)</label>
    <input id="addName" list="drillList" autocomplete="off">
    <div class="note warn" id="addNew" hidden>New drill. It will be saved to the drill library so it can be picked again for any athlete.</div>
    <label class="note" for="addVid">Video link (optional)</label>
    <input id="addVid" type="url" placeholder="https://youtu.be/..." autocomplete="off">
    <div class="addgrid">
      <label class="dlsel">Ball<select id="addBall"></select></label>
      <label class="dlsel">Sets<input id="addSets" type="number" min="1" max="10" value="1"></label>
      <label class="dlsel">Reps<input id="addReps" type="number" min="1" max="100" value="10"></label>
      <label class="dlsel">Intensity %<input id="addRpe" type="number" min="40" max="110" step="5" value="70"></label>
    </div>
    <div class="acts">
      <button class="btn primary" type="button" id="addOk">Add to this day</button>
      <button class="btn danger" type="button" id="addDelLib" hidden>Delete from library</button>
      <button class="btn" type="button" id="addCancel">Cancel</button>
    </div>
  </form>
</dialog>
<dialog id="dlgE">
  <form method="dialog" class="col" id="edForm">
    <div><h4 id="edTitle">Edit exercise</h4><div class="note" id="edFrom"></div></div>
    <label class="note" id="edGrpL">Section<select id="edGrp"></select></label>
    <label class="note" for="edName">Exercise (type to search, or enter a new one)</label>
    <input id="edName" list="edList" autocomplete="off">
    <datalist id="edList"></datalist>
    <label class="note" for="edDose">Sets and reps, or dose</label>
    <input id="edDose" type="text" autocomplete="off" placeholder="e.g. 3x5 @ 75%">
    <div class="acts">
      <button class="btn primary" type="button" id="edOk">Save</button>
      <button class="btn" type="button" id="edReset">Reset to program</button>
      <button class="btn danger" type="button" id="edDel">Remove</button>
      <button class="btn" type="button" id="edCancel">Cancel</button>
    </div>
  </form>
</dialog>`;

let BALLS=(()=>{const s=new Set(['Baseball','Football','3oz','5oz','8oz','12oz','16oz']); for(const k in D.S) for(const r of D.S[k]) for(const i of [4,5,6]) if(r[i]) s.add(String(r[i])); return [...s]})();
const PDESC={"REVO":"Rebuilds throwing capacity after the end-of-season deload. Constraint-led seated and kneeling throws matched to the focus. Goal: raise kneeling throw velocity.","REIN":"Raises session intensity and frequency now that drill packages are familiar. Adds more complex drills and standing throws. Goal: raise kneeling and standing velocity.","ENVO":"Keeps building volume with flow drills that add freedom of movement and momentum for coordination and athleticism. Goal: increase long toss distance.","ENIN":"Pushes intensity through long toss extension and compression so the athlete self-organizes timing and intent. Goal: hold earlier gains and raise compression velocity.","WATT":"A demanding adaptation phase: higher momentum throws and underweight mound testing. Goal: raise plyoball mound velocity while holding kneeling, standing and momentum velocities.","INT":"Moves new patterns onto the slope with the first bullpens, mostly fastballs at varied intent. Goal: transfer patterns to the mound with more velocity and better command.","REF":"Makes earlier adaptations stick while developing velocity, command and pitch movement. Goal: build mound capacity for live at-bats and in-game strategies.","ENG":"Competition preparation. Drill work is secondary and competition is used as often as possible. Goal: win, or build strategies to improve in game situations.","INS":"Fatigue management and skill work. Games carry most of the volume and intensity; drill work is supplemental and optional by need.","OFF":"No throwing this week."}, FDESC={"Global":"Builds overall coordination and balance with a variety of movements that sharpen the core principles of the throw.","Vertical Force":"Builds the ability to load into the drive leg and turn that vertical force into powerful rotation, keeping the body centered and stacked.","Linear Force":"Builds momentum down the mound by driving off the back leg, staying level through the pelvis and shoulders and moving the body toward the target.","Lateral Force":"Builds a stable drive leg and a consistent landing so energy moves straight toward the target and turns into rotation.","Lower Rotation":"Builds the ability to turn the hips ahead of the torso, creating separation and timing it for more energy into the throw.","Upper Rotation":"Builds a fluid, well-timed arm path and upper torso so the arm carries the energy the body creates. Coaches will fine-tune this to each athlete.","Upper Deceleration":"Builds a strong glove-side brace that matches the throwing arm, helping the body rotate fully through the target.","Lower Deceleration":"Builds a firm lead leg block that stops the body’s momentum and transfers it up the chain into the throw."}, LDESC={"1":"Level 1: roughly 60–75 mph.","2":"Level 2: roughly 75–85 mph.","3":"Level 3: roughly 85–95 mph."};
const CKEY='velou.drills.custom', LIBV={}, MOUNTS=new Set();
const loadCustom=()=>{try{return JSON.parse(localStorage.getItem(CKEY)||'[]')||[]}catch(e){return []}};
const saveCustom=l=>{try{localStorage.setItem(CKEY,JSON.stringify(l))}catch(e){}};
const libHas=n=>{const k=String(n).trim().toLowerCase(); return D.drills.some(d=>String(d[0]).trim().toLowerCase()===k)||loadCustom().some(d=>d.name.toLowerCase()===k)};
// ---- Plan Build logic (pure functions, no DOM) ----
const PBL=(()=>{
  const SEQ=['REVO','REIN','ENVO','ENIN','WATT','INT','REF','ENG'];
  const num=x=>{const n=parseFloat(String(x==null?'':x).replace(/[,%\s]/g,''));return isNaN(n)?null:n};
  const iso=ms=>new Date(ms).toISOString().slice(0,10);
  const ms=s=>Date.parse(s+'T12:00:00Z');
  const addDays=(s,n)=>iso(ms(s)+n*864e5);
  const weeksBetween=(a,b)=>Math.floor((ms(b)-ms(a))/(7*864e5));
  // levels
  const xferLevel=s=>{s=num(s); return s==null?null:s<77.5?1:s<87.5?2:3};
  const prodLevel=s=>{s=num(s); return s==null?null:s<77.5?1:s<=87.5?2:3};
  // training theory: level 1 Movement Literacy, level 2 Tension Literacy, level 3 by the concentric:eccentric impulse ratio
  const theoryOf=(lvl,ratio)=>{ if(lvl==null) return null; if(lvl===1) return 'ML'; if(lvl===2) return 'TL'; const r=num(ratio); if(r==null) return 'FC'; return r>3.1?'FC':r>=2.9?'AP':'AC'};
  const ratioNote=r=>{r=num(r); if(r==null) return ''; if(r>3.1&&r<=3.2) return 'Ratio '+r.toFixed(2)+' is in the 3.1 to 3.2 transition zone, so Force Control stays until it settles into 2.9 to 3.1.'; if(r>=2.8&&r<2.9) return 'Ratio '+r.toFixed(2)+' is in the 2.8 to 2.9 transition zone, treated as a concentric deficit (Acceleration) until it reaches 2.9.'; return ''};
  const daysFor=playLevel=>/college|pro/i.test(playLevel||'')?5:6;
  const isPitcher=pos=>/pitcher|2-?way/i.test(pos||'');
  // where the standard 32 week timeline sits when this many weeks remain before competition
  const wbcIdx=w=>w>28?0:w>24?1:w>20?2:w>16?3:w>12?4:w>8?5:w>4?6:7;
  function season(N){
    if(N==null) return 'Off-season (no competition date)';
    if(N<=0) return 'Competition date has passed';
    if(N<=4) return 'Competition';
    if(N<=12) return 'Pre-season';
    if(N<=20) return 'Late off-season';
    return 'Off-season';
  }
  function merge(blocks){const o=[]; for(const b of blocks){const l=o[o.length-1]; if(l&&l.code===b.code&&!b.deload&&!l.deload&&b.pw0==null&&l.pw0==null) l.weeks+=b.weeks; else o.push(Object.assign({},b))} return o}
  // throwing phases for the weeks left after any deload or return to throw
  function phases(o){
    const lens=[]; let R=o.R; while(R>0){const l=Math.min(4,R); lens.push(l); R-=l}
    const maxIdx=o.maxIdx==null?7:o.maxIdx, why=[], idxs=[];
    const far=o.N==null||(o.N-o.t0)>32;
    lens.forEach((l,k)=>{ if(far) idxs.push(Math.min(k,maxIdx)); else idxs.push(Math.min(wbcIdx(o.N-(o.t0+lens.slice(0,k).reduce((a,b)=>a+b,0))),maxIdx)) });
    if(far) why.push(o.N==null?'No competition date, so the plan starts at the beginning of the off-season sequence.':'Competition is more than 32 weeks after this block, so the first phases of the off-season sequence are used.');
    else why.push('Phases are placed on the standard timeline so Integrate, Refine and Engage land in the final 12 weeks before competition.');
    if(o.onramp&&idxs.length&&idxs[0]>0){ idxs[0]=0; why.push('On-ramp: the first phase is Restructure Volume. The later phases catch up to the timeline, so earlier phases are skipped.') }
    if(o.maxIdx!=null&&o.maxIdx<7) why.push(o.maxIdx===0?'Standing throws are restricted, so only Restructure Volume (seated and kneeling work) is used.':'No mound access, so the mound phases (Integrate, Refine, Engage) are not used.');
    const blocks=merge(lens.map((l,k)=>({code:SEQ[idxs[k]],weeks:l})));
    return {blocks,why};
  }
  // lifting block patterns for a window
  function liftPatterns(W){
    if(W>=12) return [[8,4],[4,4,4],[4,8],[2,2,8]];
    if(W===8) return [[4,4],[8]];
    const o=[]; let r=W; while(r>=4){o.push(4); r-=4} if(r>=2) o.push(r); else if(r>0){ if(o.length) o[o.length-1]+=r; else o.push(r) }
    return [o];
  }
  function phaseLabels(pat,startP,kind){
    // a new training theory starts at P1 and moves to P2; a continuing one starts where it left off
    return pat.map((w,i)=>{
      if(kind==='1,1,2') return Math.min(3,startP+(i>=2?1:0));
      if(kind==='1,2,2') return Math.min(3,startP+(i>=1?1:0));
      return Math.min(3,startP+(i>=1?1:0));
    });
  }
  function lifting(o){
    const pats=liftPatterns(o.W), opts=[];
    for(const pat of pats){
      const key=pat.join('+'), kind=key==='2+2+8'?'1,1,2':key==='4+4+4'?'1,2,2':'1,2';
      const ph=phaseLabels(pat,o.startP,kind);
      opts.push({key,pat,blocks:pat.map((w,i)=>({weeks:w,fam:o.fam,ph:String(ph[i])}))});
    }
    // choose
    let rec=0; const why=[];
    const mound=o.blocks.some(b=>['INT','REF','ENG'].includes(b.code));
    const idx=k=>Math.max(0,opts.findIndex(x=>x.key===k));
    if(o.W<12){ rec=0; why.push(o.W<8?'A short window runs as one block per four weeks, ending on competition.':'The window is shorter than 12 weeks, so blocks run four weeks each.') }
    else if(o.rtt||o.restricted){ rec=idx('2+2+8'); why.push('Return to throw or lifting restrictions: two short blocks first so the plan can be re-checked as restrictions clear, then an eight week block.') }
    else if(mound||(o.N!=null&&o.N<=12)){ rec=idx('4+4+4'); why.push('Throwing intensity climbs into the mound phases, so lifting is re-diagnosed every four weeks.') }
    else if(o.liftLevel!=null&&o.liftLevel<=2){ rec=idx('8+4'); why.push('Throwing load is still building and the athlete needs accumulation, so the first block runs eight weeks, then four.') }
    else { rec=idx('4+8'); why.push('Throwing load is still building. Four weeks to establish the theory, then an eight week block at P2.') }
    return {options:opts,rec,why};
  }
  function build(I){
    const why=[], out={warn:[]};
    const N0=I.comp?weeksBetween(I.start,I.comp):null;
    let N=N0; if(N!=null&&N<=0){ out.warn.push('The competition date is on or before the start date, so it was ignored.'); N=null }
    const W=(N!=null&&N<12)?Math.max(1,N):12;
    out.N=N; out.W=W; out.season=season(N0); out.end=addDays(I.start,W*7-1);
    let blocks=[], t=0;
    const maxIdx=I.maxIdx==null?(I.mound===false?4:7):I.maxIdx;
    const status=I.status;
    if(status==='rtt'&&I.rtt){
      const pre=Math.max(0,Math.min(W,Math.round((ms(I.rtt.startDate||I.start)-ms(I.start))/(7*864e5))));
      if(pre>0){ blocks.push({code:'OFF',weeks:pre,deload:1,pcode:'REVO'}); why.push('The return to throw begins in week '+(pre+1)+'. Until then the athlete is off throwing, with patterning only.') }
      const left=Math.max(0,I.rtt.weeks-(I.rtt.startWeek-1)), take=Math.min(left,W-pre);
      if(take>0){ blocks.push({code:I.rtt.code,weeks:take,pw0:I.rtt.startWeek-1}); why.push('Return to throw: '+I.rtt.label+' from week '+I.rtt.startWeek+' of '+I.rtt.weeks+'.') }
      t=pre+take;
      const rem=W-t;
      if(rem>0){ const p=phases({R:rem,N:null,t0:0,maxIdx,onramp:false}); blocks=blocks.concat(p.blocks); why.push('After the return to throw the athlete restarts the off-season sequence at Restructure Volume.') }
    } else {
      let d=0;
      if(status==='deload'){ d=Math.max(1,Math.min(4,Number(I.deloadWeeks)||1)); d=Math.min(d,W); blocks.push({code:'OFF',weeks:d,deload:1,pcode:'REVO'}); why.push('Deload: '+d+' week'+(d>1?'s':'')+' of patterning only, no throwing.') }
      const p=phases({R:W-d,N,t0:d,maxIdx,onramp:status==='onramp'}); blocks=blocks.concat(p.blocks); why.push(...p.why);
    }
    out.blocks=merge(blocks); out.throwWhy=why;
    out.base={W,codes:out.blocks.map(b=>b.code),weeks:out.blocks.map(b=>b.weeks)};
    let Wt=W; const E=I.edit;
    // the coach can swap the program of a phase and change its weeks; the window, the lifting options and the retests follow
    if(E&&Array.isArray(E.codes)&&E.codes.length===out.blocks.length){
      const src=out.blocks; let chc=false;
      out.blocks=src.map((b,i)=>{const c=E.codes[i]; if(!c||c===b.code) return b; chc=true;
        if(c==='OFF'){const nx=src.map((x,j)=>E.codes[j]||x.code).slice(i+1).find(x=>SEQ.includes(x)); return {code:'OFF',weeks:b.weeks,deload:1,pcode:nx||'REVO'}}
        const pw=E.progWeeks&&E.progWeeks[c]; if(pw) return {code:c,weeks:Math.min(b.weeks,pw),pw0:0};
        return {code:c,weeks:b.weeks}});
      if(chc) out.edited=true;
    }
    if(E&&Array.isArray(E.weeks)&&E.weeks.length===out.blocks.length){
      out.blocks.forEach((b,i)=>{const w=Math.round(Number(E.weeks[i])), pw=E.progWeeks&&E.progWeeks[b.code], mx=pw?Math.max(1,pw-(Number(b.pw0)||0)):16; if(w>=1&&w<=mx&&w!==b.weeks){b.weeks=w; out.edited=true}});
    }
    if(out.edited){ Wt=out.blocks.reduce((a,b)=>a+b.weeks,0); out.W=Wt; out.end=addDays(I.start,Wt*7-1); out.throwWhy=why.concat(['You adjusted the phases, so the plan runs '+Wt+' weeks.']) }
    // lifting
    const startP=I.cont?Math.max(1,Math.min(3,I.cont.ph+(I.cont.advance?1:0))):1;
    const L=lifting({W:Wt,fam:I.theory,startP,blocks:out.blocks,rtt:status==='rtt',restricted:!!I.restricted,liftLevel:I.liftLevel,N});
    out.lift=L;
    out.liftWhy=L.why.slice();
    if(I.cont) out.liftWhy.push('Continuing '+I.theory+' from P'+I.cont.ph+': '+(I.cont.advance?'advancing to P'+startP:'holding at P'+startP)+'.'); else out.liftWhy.push('A new training theory starts at P1 and moves to P2.');
    out.tests=[]; for(let w=4;w<=Wt;w+=4) out.tests.push(w);
    if(!out.tests.length||out.tests[out.tests.length-1]!==Wt) out.tests.push(Wt);
    return out;
  }
  return {SEQ,num,xferLevel,prodLevel,theoryOf,ratioNote,daysFor,isPitcher,wbcIdx,season,build,addDays,weeksBetween,liftPatterns};
})();

function mount(host){
const root=host.shadowRoot;
const $=id=>root.getElementById(id);
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const fz=()=>{const f=String(host.dataset.focus||'').trim().toLowerCase(); return D.focus.find(x=>x.toLowerCase()===f)||FOCUS0};
const blank=()=>({program:TL,level:'',focus:fz(),startDate:'',compDate:'',phaseWeeks:null,blocks:null,shift:0,velo:'',kneel:'',lt:'',swaps:{},rowSwaps:{},removed:{},rowEdits:{},added:{},order:{},baseline:{},dayMove:{},str:{on:1,fam:'',ph:''},pat:{on:1},patBlocks:[],strBlocks:[],coach1:'',coach2:'',deload:{},dlVol:60,dlInt:10,strEd:{},patEd:{},laneDays:{}});
let A=blank(), cur='', viewWeek=1, coachOpen=false, saved=false, compact=(()=>{try{return localStorage.getItem('velou.plan.compact')==='1'}catch(e){return false}})(), openDays=new Set();
const L=()=>{const ds=host.dataset, m=String(ds.level||'').match(/[1-3]/); return {athlete:ds.athlete||'',level:m?Number(m[0]):null,levelRaw:ds.level||'',velo:numv(ds.velo),kneel:numv(ds.kneel),lt:numv(ds.lt),arm:numv(ds.armscore),injury:(ds.injury||'').trim()}};
const VNK=s => String(s).toLowerCase().replace(/&/g,' and ').replace(/kikucki|kukuchi/g,'kikuchi').replace(/\bstide\b/g,'stride').replace(/\bthows\b/g,'throws').replace(/pendelum/g,'pendulum').replace(/hip-shoulder/g,'hip shoulder').replace(/roll-in/g,'roll in').replace(/windup/g,'wind up').split(/[^a-z0-9]+/).filter(Boolean).map(w => w === 'forwards' ? 'forward' : w).map(w => w.length > 3 && w.endsWith('s') ? w.slice(0,-1) : w).filter(w => w !== 'throw').join(' ');
const VBASE={"seated glute load":"https://youtu.be/b6pOVDl-itw","rocker":"https://youtu.be/C6ywpsasDsY","rocker w front foot lift":"https://youtu.be/eP_3642xYT0","rear foot elevated reverse drop in":"https://youtu.be/wMzA-hP1Zo4","lateral pendulum mound":"https://youtu.be/8CRAZFiD4YM","darvish mound":"https://youtu.be/jSyvbbRyqEs","kikuchi mound":"https://youtu.be/LdIPdaqBwGU","tracer pick up":"https://youtu.be/yIKf40vE88I","run stop spin":"https://youtu.be/EEMq7-8SZ9E","reactive rebounder":"https://youtu.be/2PA24mb5M88","hand over head walking wind up":"https://youtu.be/JVXm2sOkLiE","lateral figure 8 mound":"https://youtu.be/zJQ6_0diSPQ","anchored kneeling flow":"https://youtu.be/JFSgPi0fGtY","high step forward baseball":"https://youtu.be/7LiiEmWbdS0","run and round":"https://youtu.be/EqlGyYU59qo","jeter baseball":"https://youtu.be/5t03S_MK7mk","rotational horizontal step back baseball":"https://youtu.be/SmORr5-a1Ls","rotational horizontal step forward baseball":"https://youtu.be/Kujft4hvsEI","horizontal step backward baseball":"https://youtu.be/UDj3MwcK0PQ","horizontal step forward baseball":"https://youtu.be/ZG9fifvG1Vw","horizontal step backward football":"https://youtu.be/ejF0ZLK1I4Q","rotational horizontal step back football":"https://youtu.be/p0UW-XY-56A","rotational horizontal step forward football":"https://youtu.be/7t9q6tMTyEk","horizontal step backward baseball catch":"https://youtu.be/SX_qFrevptM","horizontal step forward baseball catch":"https://youtu.be/0aEht7KZFFM","rotational horizontal step back baseball catch":"https://youtu.be/93zpwq50lpQ","rotational horizontal step forward baseball catch":"https://youtu.be/18ZorggnY9U","horizontal step backward rewire catch":"https://youtu.be/ys8gKXBTkOc","rotational horizontal step back rewire catch":"https://youtu.be/2VEic6Jr2ks","horizontal multi hop backward baseball":"https://youtu.be/5suoBN7p8D0","horizontal multi hop forward baseball":"https://youtu.be/YB182v5AuVk","rotational horizontal multi hop backward baseball":"https://youtu.be/l-KjSWmh3ws","rotational horizontal multi hop forward baseball":"https://youtu.be/L1AdRp36ht0","horizontal multi hop backward football":"https://youtu.be/jLl5LvHJfv0","horizontal multi hop forward football":"https://youtu.be/-QEHOSfjHek","rotational horizontal multi hop backward football":"https://youtu.be/6sDX-qbc5sA","rotational horizontal multi hop forward football":"https://youtu.be/9IWqwleN0zc","horizontal multi hop backward baseball catch":"https://youtu.be/bh1Skmyivwo","horizontal multi hop forward baseball catch":"https://youtu.be/TtT3U3YuPvE","rotational horizontal multi hop backward baseball catch":"https://youtu.be/pUItg9EPTq0","rotational horizontal multi hop forward baseball catch":"https://youtu.be/M4dmJ4F8mDs","horizontal multi hop backward rewire catch":"https://youtu.be/Uxuy__lysNQ","horizontal multi hop forward rewire catch":"https://youtu.be/vfN06tuKjLg","rotational horizontal multi hop backward rewire catch":"https://vimeo.com/859147518","rotational horizontal multi hop forward rewire catch":"https://youtu.be/deNZbOcB9dw","horizontal walk backward baseball":"https://youtu.be/Xari0Zs0uq8","horizontal walk forward baseball":"https://youtu.be/_P-5u7Be204","horizontal back pedal baseball":"https://youtu.be/jnBLpQjnWIg","horizontal run forward baseball":"https://youtu.be/4KKduo_bC5w","horizontal walk backward football":"https://youtu.be/pBLLYohBh_M","horizontal walk forward football":"https://youtu.be/JcLSDPpqI0Q","horizontal back pedal football":"https://youtu.be/LtlNtLOz5Ng","horizontal run forward football":"https://youtu.be/PA9zebERllw","horizontal walk backward baseball catch":"https://youtu.be/rK1-_z_AwQU","horizontal back pedal baseball catch":"https://youtu.be/nYKqEk5i9uQ","horizontal run forward baseball catch":"https://youtu.be/E6T68HfmSSQ","horizontal walk backward rewire catch":"https://youtu.be/rOVQJ75a_uw","horizontal back pedal rewire catch":"https://youtu.be/y0bWvqAvIiA","horizontal run forward rewire catch":"https://youtu.be/CologE4gu1M","forward shuffle flow baseball":"https://youtu.be/W-TUfaSguKU","backward shuffle flow baseball":"https://youtu.be/GvFYjEshi80","forward carioca shuffle baseball":"https://youtu.be/IKvFRNBfGkw","backward carioca shuffle baseball":"https://youtu.be/9kGhubj328Y","forward shuffle flow football":"https://youtu.be/avm1q30Wyx4","backward shuffle flow football":"https://youtu.be/ixDjEM8oE1s","forward carioca shuffle football":"https://youtu.be/pBjQTX2wsb4","backward carioca shuffle football":"https://youtu.be/Y846aSCAF4E","forward shuffle flow baseball catch":"https://youtu.be/40DkD2rIxkg","backward shuffle flow baseball catch":"https://youtu.be/033w6N1cKCk","forward carioca shuffle baseball catch":"https://youtu.be/UiepOxdPpic","backward carioca shuffle baseball catch":"https://youtu.be/pYUfI6JAaOM","forward shuffle flow rewire catch":"https://youtu.be/RMyWosZCDdA","backward shuffle flow rewire catch":"https://youtu.be/z7DjzwkO2uc","forward carioca shuffle rewire catch":"https://youtu.be/WuUASIKtdqM","backward carioca shuffle rewire catch":"https://youtu.be/0RuR9ZMLoeA","drive leg hop baseball":"https://youtu.be/By7H21FFmEc","drive leg multi hop baseball":"https://youtu.be/By7H21FFmEc","rotational step back baseball":"https://youtu.be/JJvzTSHNqzw","rotational multi hop baseball":"https://youtu.be/p9QySA7DW6g","drive leg hop football":"https://youtu.be/WAHSEei_1Iw","drive leg multi hop football":"https://youtu.be/SXeTccDu4rw","rotational step back football":"https://youtu.be/SoQx2vqPTQI","rotational multi hop football":"https://youtu.be/3uas9Ud18PM","drive leg multi hop baseball catch":"https://youtu.be/PX4phX_iUGM","rotational step back baseball catch":"https://youtu.be/CEGCZePd0tY","rotational multi hop baseball catch":"https://youtu.be/7MCZdqFgkPk","drive leg hop rewire catch":"https://youtu.be/TYVyuONqdcs","drive leg multi hop rewire catch":"https://youtu.be/Pca3r8JHkAY","rotational step back rewire catch":"https://youtu.be/SmORr5-a1Ls","rotational multi hop rewire catch":"https://youtu.be/m39qlxkRd7c","horizontal step backward mound":"https://youtu.be/ny3nJtZ5FD4","horizontal step forward mound":"https://youtu.be/XziHerH8w3Q","seoul mound":"https://youtu.be/oM3uGwtxSPg","rotational rocker":"https://youtu.be/3e2eZTbfrfM","rear facing walking wind up mound":"https://youtu.be/QlqmOYJl3rU","half kneeling lead leg block":"https://youtu.be/EISwAAhrLNE","half kneeling lateral lunge":"https://youtu.be/cokVzKixECE","45 degree run and round":"https://youtu.be/idUk0qGo8-I","45 degree run stop spin":"https://youtu.be/VIdCTQGdXL0","half kneeling lunge to":"https://youtu.be/JH0IOhu-sUg","dead leg lasso":"https://youtu.be/XbtLWq1mjq0","rear foot elevated":"https://youtu.be/FCtELp9yQ1g","roll in baseball":"https://youtu.be/TDl0RgYvsEU","backpedal baseball":"https://youtu.be/DnOUrzt1qwU","roll in football":"https://youtu.be/TDl0RgYvsEU","walking backward football":"https://youtu.be/bNgP-zJ6cIU","backpedal football":"https://youtu.be/DnOUrzt1qwU","high step forward football":"https://youtu.be/d57R6UhxGMM","roll in baseball catch":"https://youtu.be/XK9OgKqmRb8","walking backward baseball catch":"https://youtu.be/b0MARNjnIIo","backpedal baseball catch":"https://youtu.be/oByGYEMEUPA","high step forward baseball catch":"https://youtu.be/eGWCPkoKBVs","roll in rewire catch":"https://youtu.be/J7ljL4X9e7M","walking backward rewire catch":"https://youtu.be/DcMQYzpoMNY","backpedal rewire catch":"https://youtu.be/u16SRz1-bzA","high step forward rewire catch":"https://youtu.be/XRWcpk64C_A","drive leg linear hop baseball":"https://youtu.be/F1P0BQtS-8k","drive leg multi linear hop baseball":"https://youtu.be/clLm79x1oYE","stride leg linear hop baseball":"https://youtu.be/sE0FCHAgtk4","stride leg linear multi hop baseball":"https://youtu.be/zTo_nYF-4uw","drive leg linear hop football":"https://youtu.be/oyg6-8vGQ0c","drive leg multi linear hop football":"https://youtu.be/RFpcxTs7YWs","stride leg linear hop football":"https://youtu.be/6G4__oh_dkQ","stride leg linear multi hop football":"https://youtu.be/GMCXgh_VF_8","drive leg linear hop baseball catch":"https://youtu.be/cj8o_3w7xr8","drive leg multi linear hop baseball catch":"https://youtu.be/cj8o_3w7xr8","stride leg linear hop baseball catch":"https://youtu.be/N75OHVldKtY","stride leg linear multi hop baseball catch":"https://youtu.be/no-tESqEThw","drive leg linear hop rewire catch":"https://youtu.be/QEFhPL7AzxY","drive leg multi linear hop rewire catch":"https://youtu.be/djvLj1Spgj8","stride leg linear hop rewire catch":"https://youtu.be/s0bKt-RMNCY","stride leg linear multi hop rewire catch":"https://youtu.be/s0bKt-RMNCY","shoulder dip":"https://youtu.be/FiToOb5psuE","hook em":"https://youtu.be/XO06GIVyQNU","drive leg hop mound":"https://youtu.be/63qHw2KBw4s","linear stride leg hop":"https://youtu.be/sE0FCHAgtk4","stride leg hop back rewire catch":"https://youtu.be/KkRyK6d2mrQ","swing leg rotational step back":"https://youtu.be/Revhb5Jb1gU","kneeling pivot pendulum":"https://youtu.be/Q7qC2jwP_jc","lateral walk backward flip up":"https://youtu.be/kqRQpfJaNvc","lateral pendulum":"https://youtu.be/-omNJVBcgrY","elevated slope mound":"https://youtu.be/bWucieiO_RE","tapx3 mound":"https://youtu.be/smbuKyDEE38","and stick":"https://youtu.be/xAR-Fp8SJ6k","rocker figure 8":"https://youtu.be/Bz6SXejplrg","split stance blocking":"https://youtu.be/h322oNwAon0","and stick mound":"https://youtu.be/qMOvGsX5lgA","45 degree turn and burn mound":"https://youtu.be/4-i0UNdpG4U","3 step dead leg":"https://youtu.be/LhPpM9XA5Jg","drop step":"https://youtu.be/dEX_rDuQY6s","hop drop step":"https://youtu.be/_pusI35y48U","drop step mound":"https://youtu.be/gcqWarjVJAM","janitor 2 tap":"https://youtu.be/aWeTy3ra6lo","turn and burn mound":"https://youtu.be/rH1qzLqYa6w","linear roll in pendulum":"https://youtu.be/_Hp7NDU9laI","bauer step back":"https://youtu.be/9XEM5IDEP6w","angled janitor":"https://youtu.be/XRqQMxT8qVo","rhythm relay":"https://youtu.be/TWP0Faci3iI","rock back wind up mound":"https://youtu.be/84wgmhq6ZRs","quick hand":"https://youtu.be/KjvDEaNPjWg","shuffle reactionary":"https://youtu.be/h46pJleAD2s","turn and burn reactionary":"https://youtu.be/xqJWRPera9M","fake turn and baseball":"https://youtu.be/Y8ioXW0zuOQ","rear facing jump turn and baseball":"https://youtu.be/9g0r8NrnSos","rear facing walking wind up baseball":"https://youtu.be/3KY4J7Mhj2s","rear facing jump turn and baseball catch":"https://youtu.be/Im0_xO2AzfU","rear facing walking wind up baseball catch":"https://youtu.be/rfTiWejxbzQ","fake turn and baseball catch":"https://youtu.be/E5GTB7WPfL8","run away stop and baseball catch":"https://youtu.be/_TZ35BS9heU","rear facing jump turn and rewire catch":"https://youtu.be/JmNnsM0XCxg","rear facing walking wind up rewire catch":"https://youtu.be/CiJIP8Iz4qo","fake turn and rewire catch":"https://youtu.be/GRS2iSHdG5Q","run away stop and rewire catch":"https://youtu.be/LKn9cmSapAY","linear hop vertical jump baseball":"https://youtu.be/59iALpTewIs","horizontal hop vertical jump baseball":"https://youtu.be/x0-udJpoYAE","vertical jump baseball catch":"https://youtu.be/Crcj12AbKss","linear hop vertical jump baseball catch":"https://youtu.be/AFb-d96OWXc","horizontal hop vertical jump baseball catch":"https://youtu.be/SJF2wbspgHQ","jeter baseball catch":"https://youtu.be/C03wQcjDnOk","vertical jump rewire catch":"https://youtu.be/Spov_TumTdw","jeter rewire catch":"https://youtu.be/as8BIz31CU0","horizontal walk backward cros body baseball":"https://youtu.be/Xari0Zs0uq8","horizontal walk backward cros body baseball catch":"https://youtu.be/TbFtJdCkMuU","horizontal walk forward cros body baseball catch":"https://youtu.be/Ypi9PZeuoUQ","horizontal back pedal cros body baseball catch":"https://youtu.be/5KEKYY0dZ9k","horizontal run forward cros body baseball catch":"https://youtu.be/9vZ5skPo7qc","open stance linear mound":"https://youtu.be/1HeslE0AvnU","glove side hand off mound":"https://youtu.be/IL01OKd7IEc","1 leg balance":"https://youtu.be/RYanvFXwcT0","rotational hop back rewire catch":"https://youtu.be/jZRXWDE4jsQ","glove side tos":"https://youtu.be/fy8mcyhCMdQ","glove side hand off":"https://youtu.be/5epRVXIYy24","tracer":"https://youtu.be/8mXwBq9LlLE","open stance linear":"https://youtu.be/O-Js9n94Gd0","open stance linear hand off":"https://youtu.be/HGuybO_oaWQ","hip shoulder tap":"https://youtu.be/rJDrG0MKlOk","hand cros":"https://youtu.be/hhKY8sa7Z-Y","kershaw mound":"https://youtu.be/H7vI4RDuVAw","split stance tracer":"https://youtu.be/v0nM7xNKdNc","rocker tracer":"https://youtu.be/emqW7ogzVXc","pocket path stick seated box":"https://youtu.be/tgsYonUeFUk","pocket path stick seated":"https://youtu.be/rCYmCauD4JM","pocket path stick kneeling":"https://youtu.be/-9vwZxV0h-E","pocket path step behind":"https://youtu.be/V9025ZQUdCE","bounce mound":"https://youtu.be/nSsy1pIg7ws","kneeling natural flip up":"https://youtu.be/9lwRlmYlaHk","lateral walk forward flip up":"https://youtu.be/GW3A-rTmOtI","coil and flip up catch":"https://youtu.be/yny21dSRH-c","lasso drop":"https://youtu.be/b6bi1Fcgf00","self tos roll in":"https://youtu.be/as_4U5usC1g","hover flip up":"https://youtu.be/gEMIqFDCa-s","step back mound":"https://youtu.be/XuOQ_LPKQ3o","over the block step back oh mb":"https://youtu.be/kBaasAtxFfk","crossover pendulum":"https://youtu.be/lWOOeF_O3Ak","kikuchi":"https://youtu.be/hg8VVyvf4Mk","walking forward kikuchi":"https://youtu.be/QfJ4SuuCtCk","elevated uphill mound":"https://youtu.be/zcD3ry5PPZQ"};
let vidSrc=null, vidMap={};
const vid=n=>{const s=host.dataset.videos||'{}'; if(s!==vidSrc){vidSrc=s; try{vidMap=JSON.parse(s)||{}}catch(e){vidMap={}}} const kk=String(n||'').trim().toLowerCase(), cd=loadCustom().find(d=>d.name.toLowerCase()===kk); return (cd&&cd.video)||LIBV[kk]||vidMap[kk]||VBASE[VNK(n)]||''};
const lvl=()=>Number(A.level)||L().level||1;
const V=()=>{const l=L(); return {velo:Number(A.velo)||l.velo||'',kneel:Number(A.kneel)||l.kneel||'',lt:Number(A.lt)||l.lt||''}};
const isTL=()=>A.program===TL;
const prog=()=>D.programs.find(p=>p.name===A.program)||D.programs[0];
function weeksAvail(){const a=day0(A.startDate),b=day0(A.compDate);if(!a||!b)return null;return Math.max(0,Math.floor((b-a)/6048e5+1e-6))}
function blocks(){
  if(A.blocks) return A.blocks;
  const N=weeksAvail(); if(N==null) return [];
  const s=suggest(N);
  if(A.phaseWeeks){return PH.map(p=>{const f=s.find(b=>b.code===p.code), v=A.phaseWeeks[p.code]; return {code:p.code,weeks:v==null?(f?f.weeks:0):v}}).filter(b=>b.weeks>0)}
  return s;
}

let BOARD_ISS=[];
function boardSeed(){let bd=null; try{bd=JSON.parse(host.dataset.board||'null')}catch(e){} if(!bd||(!bd.thr&&!bd.lift&&!bd.pat)) return null;
  const iss=[], pd=s=>{const m=String(s||'').match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/); return m?m[3]+'-'+m[1].padStart(2,'0')+'-'+m[2].padStart(2,'0'):''};
  const wk=(a,b)=>{const x=day0(a),y=day0(b); return x&&y?Math.round(((y-x)/864e5+1)/7):null};
  const parts=s=>String(s||'').split('\u2022').map(x=>x.trim()).filter(Boolean), PC=[...new Set(['REVO','REIN','ENVO','ENIN','WATT','INT','REF','ENG'].concat(D.programs.filter(p=>p.uses).map(p=>String(p.code).toUpperCase())))];
  const fo=(s,list)=>(list||[]).find(f=>f.toLowerCase()===String(s||'').toLowerCase().replace(/\s+/g,' ').trim());
  const S=blank(); S.coach1=bd.c1||''; S.coach2=bd.c2||''; S.fromBoard=1;
  const T=parts(bd.thr), ts=pd(bd.ts), te=pd(bd.te);
  if(!T.length) iss.push(bd.ts?'Throwing program cell is blank (dates only)':'No throwing program on the Program Board');
  else {const full=T.join('\u2022').toUpperCase(), rtt=D.programs.find(p=>!p.uses&&[p.code.toUpperCase(),'THR\u2022'+p.code.toUpperCase()].includes(full))||D.programs.find(p=>!p.uses&&p.code.length>3&&full.includes(p.code.toUpperCase().replace(/^THR\u2022/,'')));
    if(rtt){S.program=rtt.name; S.startDate=ts}
    else {const code=(T.find(x=>PC.includes(x.toUpperCase()))||'').toUpperCase(), L_=(T.find(x=>/^L[123]$/i.test(x))||'').slice(1), W=Number((T.find(x=>/^\d+W$/i.test(x))||'').replace(/\D/g,''))||null, fl=T[T.length-1], F=fo(fl,D.focus);
      if(!code) iss.push('Throwing program not recognized: '+bd.thr);
      else {if(T.some(x=>/^BSU$/i.test(x))) iss.push('BSU tag ignored in '+bd.thr);
        if(!F) iss.push('Throwing focus "'+fl+'" is not one of the 8 focuses, used '+S.focus);
        const span=wk(ts,te), weeks=W||span||4; if(W&&span&&span!==W) iss.push('Throwing is '+W+'W but its dates span '+span+' weeks, used '+W);
        S.program=TL; S.startDate=ts; if(L_) S.level=L_; if(F) S.focus=F; S.blocks=[{code,weeks,focus:F||S.focus}]}}}
  const P=parts(bd.pat);
  if(P.length&&S.blocks){const b=S.blocks[0], pc=(P.find(x=>PC.includes(x.toUpperCase()))||'').toUpperCase(), pl=(P.find(x=>/^L[123]$/i.test(x))||'').slice(1), pf=P[P.length-1], pfs=fo(pf,(PAT&&PAT.foc)||D.focus.concat(['Global']));
    if(!pc) iss.push('Patterning phase not recognized: '+bd.pat); else if(pc!==b.code) iss.push('Patterning phase '+pc+' differs from throwing '+b.code+', patterning follows '+b.code);
    if(pl) b.pLv=pl; if(pfs) b.pFoc=pfs; else iss.push('Patterning focus "'+pf+'" not recognized');
    if((pd(bd.ps)&&pd(bd.ps)!==ts)||(pd(bd.pe)&&pd(bd.pe)!==te)) iss.push('Patterning dates ('+bd.ps+' to '+bd.pe+') differ from throwing, patterning runs on the throwing dates')}
  else if(P.length) iss.push('Patterning is set but there is no throwing phase to attach it to');
  const Lf=parts(bd.lift);
  if(Lf.length){const nm=Lf[0].toLowerCase().replace(/\s+/g,' '), fam=Object.keys(SFAM).find(k=>SFAM[k].toLowerCase()===nm), ph=((Lf.find(x=>/^P\s*[123]/i.test(x))||'').match(/[123]/)||[])[0]||'', W=Number(((Lf.find(x=>/^\d+W/i.test(x))||'').match(/^(\d+)/)||[])[1])||null, ls=pd(bd.ls), span=wk(ls,pd(bd.le));
    if(!fam) iss.push('Lifting program not recognized: '+bd.lift);
    else {if(!ph) iss.push('Lifting has no phase ('+bd.lift+'), used P1');
      const weeks=W||span||4; if(W&&span&&span!==W) iss.push('Lifting is '+W+'W but its dates span '+span+' weeks, used '+W);
      if(SDATA&&!Object.keys(SDATA.p).some(k=>k.startsWith(fam+'\u2022')&&k.includes('\u2022P'+(ph||1)+'\u2022')&&SDATA.p[k].d[weeks])) iss.push(SFAM[fam]+' P'+(ph||1)+' has no '+weeks+'-week version, the closest length is used');
      const ax=Lf.some(x=>/^axial$/i.test(x)), nax=Lf.some(x=>/non-?axial/i.test(x)), dd=Number(((Lf.find(x=>/^\d\s*D(AY)?$/i.test(x))||'').match(/\d/)||[])[0])||0; let split=''; if(dd===6) split='a6'; else if(dd===5) split=nax?'n5':'a5'; else if(dd===4&&SSPLIT.n4) split='n4'; else if(ax) split='a6'; else if(nax) split='n5'; S.strBlocks=[Object.assign({fam,ph:ph||'1',weeks},split&&SSPLIT[split]?{split}:{})]; S.strStart=ls}}
  return {S,iss}}
const phaseName=p=>p.name.replace(/ \(.*/,'').replace('THR\u2022','');
function planWeeks(){
  if(!isTL()){const p=prog(), key=p.uses?D.map[p.code+lvl()]:p.code, o=[]; for(let i=1;i<=p.weeks;i++) o.push({n:i,bi:1,code:p.code,pw:i,key,rk:'',uses:p.uses,focus:A.focus,mound:MOUND.includes(p.code),phase:phaseName(p),short:p.uses?p.code:p.code.replace('THR\u2022','').replace(/\u2022/g,' ')}); return o}
  const o=[]; let bi=0;
  for(const b of blocks()){
    const p=byCode(b.code), off=b.code==='OFF'; bi++;
    for(let i=1;i<=b.weeks;i++){
      const shf=b.shift==null||b.shift===''?null:Number(b.shift);
      if(off) o.push({n:o.length+1,bi,code:'OFF',pw:i,off:true,deload:b.deload?1:0,pcode:b.pcode||'',focus:A.focus,phase:b.deload?'Deload':'Off week',short:'OFF'});
      else if(p) o.push({n:o.length+1,bi,code:p.code,pw:((i-1+(Number(b.pw0)||0))%p.weeks)+1,rep:(i+(Number(b.pw0)||0))>p.weeks?Math.floor((i-1+(Number(b.pw0)||0))/p.weeks)+1:0,shift:shf,key:p.uses?D.map[p.code+lvl()]:p.code,rk:p.code+':',uses:p.uses,pLv:b.pLv||'',pFoc:b.pFoc||'',sFam:b.sFam||'',sPh:b.sPh||'',sSplit:b.sSplit||'',focus:(p.uses&&b.focus)||A.focus,mound:MOUND.includes(p.code),phase:phaseName(p),short:p.uses?p.code:p.code.replace('THR\u2022','').replace(/\u2022/g,' ')});
    }
  }
  return o;
}
function weekRows(w){
  if(w.off) return []; const fi=D.focus.indexOf(w.focus), uses=w.uses, sh=(w.shift!=null?w.shift:Number(A.shift))||0, rot=d=>((d-1+sh)%7+7)%7+1;
  const dl=!w.off&&A.deload[w.n], dv=(Number(A.dlVol)||60)/100, di=Number(A.dlInt)||10;
  const v=V(), lv=lvl(), ds=v.lt?v.lt/D.refTop.d:null, out=[];
  const tgtOf=(name,weight,rpe)=>{ if(!(weight===''||weight==='Baseball')) return ''; const rr=refRow(rpe), pc=drillPct(name); if(!rr) return ''; const top=(pc.kn&&v.kneel)?v.kneel*pc.p/0.8:(v.velo?v.velo*pc.p:null); if(/long toss/i.test(name)&&ds) return (Math.round(rr[19]*ds/5)*5)+' ft'; if(top) return Math.round(rr[1]/D.refTop.v*top)+'\u2013'+Math.round(rr[2]/D.refTop.v*top)+' mph'; return ''; };
  for(const x of (A.added[w.n]||[])){
    const reps=dl?Math.max(1,Math.round(x.reps*dv)):x.reps, rpe=dl?Math.max(40,x.rpe-di):x.rpe, s=x.sets||1;
    out.push({day:x.day,slot:'c'+x.id,base:x.name,name:x.name,weight:x.weight,weight0:x.weight,reps0:x.reps,rpe0:x.rpe,ed:{},dl:!!dl,sets:s,reps,rpe,wv:s*reps*mult(rpe),k:'add:'+w.n+':'+x.id,target:tgtOf(x.name,x.weight,rpe),swapped:false,custom:x});
  }
  for(const r of (D.S[w.key]||[])){
    if(r[0]!==w.pw) continue;
    const [wk,dd,slot,label,wb,w2,w3,sets,reps0,rpe0,all]=r, day=rot(dd);
    const ed=A.rowEdits[w.rk+wk+'-'+dd+'-'+slot]||{}, rb=(reps0!==''&&reps0!=null&&ed.reps!=null)?ed.reps:reps0, pb=ed.rpe!=null?ed.rpe:rpe0;
    const reps=dl&&rb!==''&&rb!=null?Math.max(1,Math.round(rb*dv)):rb, rpe=dl&&pb?Math.max(40,pb-di):pb;
    if(reps===''||reps==null){out.push({day,slot,label,plan:true});continue}
    const base=all||(uses?r[11+Math.max(fi,0)]:'')||('Drill '+slot);
    const weight0=(lv>=3&&w3)?w3:(lv>=2&&w2)?w2:(wb||''), weight=ed.weight!=null?ed.weight:weight0;
    const k=w.rk+wk+'-'+dd+'-'+slot; if(A.removed[k]) continue; const name=A.rowSwaps[k]||A.swaps[base]||base, s=sets||1;
    let target='';
    if(weight===''||weight==='Baseball'){
      const rr=refRow(rpe), pc=drillPct(name);
      if(rr){
        const top=(pc.kn&&v.kneel)?v.kneel*pc.p/0.8:(v.velo?v.velo*pc.p:null);
        if(/long toss/i.test(name)&&ds) target=(Math.round(rr[19]*ds/5)*5)+' ft';
        else if(top) target=Math.round(rr[1]/D.refTop.v*top)+'\u2013'+Math.round(rr[2]/D.refTop.v*top)+' mph';
      }
    }
    out.push({day,slot,label,base,name,weight,weight0,reps0,rpe0,ed,dl:!!dl,sets:s,reps,rpe,wv:s*reps*mult(rpe),k,target,swapped:name!==base});
  }
  const pm=A.dayMove&&A.dayMove[w.n]; if(pm) for(const r of out){const i=pm.indexOf(r.day); if(i>=0) r.day=i+1}
  return out;
}
const TDEF={kn:{label:'Kneeling velo',unit:'mph'},ss:{label:'Split stance velo',unit:'mph'},mb2:{label:'2 lb med ball',unit:'mph'},mb1:{label:'1 lb med ball',unit:'mph'}}, RESTR=['REVO','REIN'];
const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function testPlan(ws){const o={};
  for(let i=0;i<ws.length;i++){const w=ws[i]; if(w.off||!RESTR.includes(w.code)) continue; const nx=ws[i+1], last=!nx||nx.bi!==w.bi||nx.code!==w.code||nx.pw<=w.pw, mb=w.pw%2===0; if(!last&&!mb) continue;
    const rows=weekRows(w), td=[1,2,3,4,5,6,7].filter(d=>rows.some(r=>r.day===d&&!r.plan)); if(!td.length) continue;
    const add=(d,items)=>{const L_=(o[w.n]=o[w.n]||[]), e=L_.find(x=>x.day===d); if(e) e.items=[...new Set(e.items.concat(items))]; else L_.push({day:d,items:items.slice()})};
    if(mb) add(td[0],['mb2','mb1']); if(last) add(td[td.length-1],['kn','ss']);}
  return o}
function plannedDays(){const out=[]; for(const w of planWeeks()){if(w.off) continue; const rows=weekRows(w); for(let d=1;d<=7;d++){const dr=rows.filter(r=>r.day===d&&!r.plan); if(!dr.length) continue; const dt=dateFor(w.n,d); if(dt) out.push({n:w.n,d,date:ymd(dt),sum:daySummary(dr,!!A.deload[w.n],w.uses?w.focus:'')})}} return out}
function logStats(days,logAt){
  const t=ymd(new Date()), past=days.filter(x=>x.date<t||(x.date===t&&logAt(x)));
  const ok=x=>{const l=logAt(x); return l&&(l.status==='done'||l.status==='partial')};
  const c14=new Date(); c14.setDate(c14.getDate()-14); const s14=ymd(c14), win=past.filter(x=>x.date>=s14);
  let streak=0; for(let i=past.length-1;i>=0;i--){if(ok(past[i])) streak++; else break}
  let best=0,run=0; for(const x of past){if(ok(x)){run++; best=Math.max(best,run)} else run=0}
  const logged=past.filter(x=>logAt(x)&&logAt(x).status).length;
  return {pct:win.length?Math.round(100*win.filter(ok).length/win.length):null, win:win.length, streak, best, logged, past:past.length}
}
const painFlag=(so,pain)=>(Number(so)>=5)||/shoulder|elbow/i.test(pain||'');
const SFAM={ML:'Movement Literacy',TL:'Tension Literacy',FC:'Force Control',AC:'Acceleration',AP:'Applied Power'};
const SSPLIT={a6:{lift:'Axial',prep:'Prep',n:6,label:'Axial 6-day'},a5:{lift:'Axial',prep:'Prep Axial',n:5,label:'Axial 5-day'},n5:{lift:'Non-Axial',prep:'Prep Non-Axial',n:5,label:'Non-Axial 5-day'},n4:{lift:'Non-Axial',prep:'Prep Non-Axial',n:4,label:'Non-Axial 4-day'}};
const SPLITOF=(c,days)=>{const b=/^(REVO|REIN)$/.test(c)?'a6':/^(ENVO|ENIN)$/.test(c)?'a5':/^(WATT|INT)$/.test(c)?'n5':/^(REF|ENG)$/.test(c)?'n4':'a6', d=Number(days)||6; if(d>=6) return b; if(d===5) return b==='a6'?'a5':b==='n4'?'n5':b; return 'n4'};
const SFALL={n4:['n4','n5','a5','a6'],n5:['n5','a5','a6'],a5:['a5','a6'],a6:['a6']};
let SDATA=window.VELOU_STRENGTH||null, sLoading=false;
function parseStrength(pr,sc){
  const c=x=>String(x==null?'':x).trim(), P={}, ex=[], exI={}, me=[], meI={}, ix=(a,m,v)=>{if(m[v]==null){m[v]=a.length; a.push(v)} return m[v]};
  const hp=pr[0].map(x=>c(x).toLowerCase()), pc=k=>hp.indexOf(k);
  for(const r of pr.slice(1)){const k=c(r[pc('program')]); if(k) P[k]={n:c(r[pc('name')])||k,w:c(r[pc('when to run')]),d:{}}}
  const h=sc[0].map(x=>c(x).toLowerCase()), col=(...k)=>{for(const x of k){const i=h.indexOf(x); if(i>=0) return i} return -1}, wk=[], TIER={prep:0,main:1,accessory:2}; for(let i=1;i<=12;i++) wk.push(col('w'+i));
  const iP=col('program'),iD=col('duration','duration (weeks)','weeks'),iDay=col('day'),iT=col('day title'),iM=col('prep minutes','day minutes','minutes'),iS=col('slot'),iE=col('exercise'),iMe=col('method'),iTi=col('tier'),iN=col('duration note','note');
  if([iP,iD,iDay,iE].some(x=>x<0)) throw new Error('Strength Schedules headers changed');
  for(const r of sc.slice(1)){const k=c(r[iP]), dur=Number(c(r[iD])); if(!k||!dur) continue; const p=P[k]=P[k]||{n:k,w:'',d:{}}, D_=p.d[dur]=p.d[dur]||{note:'',days:[]};
    if(!D_.note&&iN>=0&&c(r[iN])) D_.note=c(r[iN]); const dn=c(r[iDay]); let day=D_.days.find(x=>x[0]===dn); if(!day){day=[dn,c(r[iT]),iM>=0?c(r[iM]):'',[]]; D_.days.push(day)}
    const doses=wk.filter(i=>i>=0).map(i=>c(r[i])); while(doses.length&&!doses[doses.length-1]) doses.pop();
    day[3].push([c(r[iS]),ix(ex,exI,c(r[iE])),c(r[iMe])?ix(me,meI,c(r[iMe])):-1,doses,(()=>{const t=c(r[iTi]).toLowerCase(); return TIER[t]!=null?TIER[t]:(Number(t)||0)})()])}
  for(const k of Object.keys(P)) if(!Object.keys(P[k].d).length) delete P[k];
  if(!Object.keys(P).length) throw new Error('no strength programs'); return {ex,me,p:P}}
const LIB_DEFAULT='library';
function loadStrength(){if(SDATA||sLoading) return; sLoading=true; const lib=window.__veloULibId||LIB_DEFAULT;
  Promise.all([gviz(lib,'Strength Programs',1),gviz(lib,'Strength Schedules',1)]).then(([pr,sc])=>{SDATA=window.VELOU_STRENGTH=parseStrength(pr,sc); SDATA.src='library'; sLoading=false; for(const m of MOUNTS) try{m.refreshLib()}catch(e){}}).catch(e=>{console.warn('Strength from Program Library unavailable, using built-in file',e); loadStrengthFile()})}
function loadStrengthFile(){const s=document.createElement('script'); let src='strength-data.js'; try{src=new URL('strength-data.js',location.href).href}catch(e){} s.src=src; s.onload=()=>{SDATA=window.VELOU_STRENGTH||null; sLoading=false; try{for(const m of MOUNTS) m.refreshLib()}catch(e){}}; s.onerror=()=>{sLoading=false}; document.head.append(s)}
function strAuto(){return strAutoOf(host.dataset.strrec,host.dataset.perf)}
function strAutoOf(rec0,lv0){const rec=String(rec0||''), lv=String(lv0||''), t=rec+' '+lv;
  const n=Number((lv.match(/(\d+)/)||[])[1])||0, br=/force\s*control|\bFC\b/i.test(t)?'FC':/applied|\bAP\b/i.test(t)?'AP':/accel|\bAC\b/i.test(t)?'AC':'';
  let fam='', src='';
  if(n===1){fam='ML'; src='Level 1 \u00b7 Movement Literacy'}
  else if(n===2){fam='TL'; src='Level 2 \u00b7 Tension Literacy'}
  else if(n>=3){fam=br||'FC'; src='Level 3 \u00b7 '+(br?SFAM[br]+' branch':'branch not set, showing Force Control')}
  else if(br){fam=br; src='Energy Production recommendation'}
  else if(/movement/i.test(t)){fam='ML'; src='Energy Production recommendation'}
  else if(/tension/i.test(t)){fam='TL'; src='Energy Production recommendation'}
  const ph=(t.match(/\bP\s*([123])\b/i)||[])[1];
  return {fam:fam||'TL',ph:ph||'1',src:src||'no Energy Production level found',lvl:n||null,branch:br}}
function strPick(){const a=strAuto(); return {fam:A.str.fam||a.fam,ph:A.str.ph||a.ph,auto:a}}
function strProg(code){return SDATA&&SDATA.p[code]}
function strFor(fam,ph,sk){for(const k of SFALL[sk]){const s=SSPLIT[k]; const lift=fam==='ML'?(SDATA&&strProg('ML\u2022Axial\u2022P'+ph+'\u20226D')?'ML\u2022Axial\u2022P'+ph+'\u20226D':null):fam+'\u2022'+s.lift+'\u2022P'+ph+'\u2022'+s.n+'D'; if(lift&&strProg(lift)) return {k,lift,prep:fam==='ML'?null:(strProg(fam+'\u2022'+s.prep+'\u2022P'+ph+'\u2022'+s.n+'D')?fam+'\u2022'+s.prep+'\u2022P'+ph+'\u2022'+s.n+'D':null),split:fam==='ML'?SSPLIT.a6:s,sk:k}} return null}
const SDAYIX={MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6,SUN:7};
function strWeek(w,weeks){
  if(strList().length&&day0(A.startDate)){if(!SDATA||!A.str.on||!w) return null; let meta=null; const days={}; for(let d=1;d<=7;d++){const r=strDayInd(dateFor(w.n,d)); if(r){meta=meta||r; if(r.day) days[d]=r.day}} return meta?Object.assign({},meta,{days,ind:1}):null}
  if(!SDATA||!A.str.on||!w||w.off||false) return null; const pk0=strPick(), pk={fam:w.sFam||pk0.fam,ph:w.sPh||pk0.ph}, sk=w.sSplit||SPLITOF(w.code,A.days), f=strFor(pk.fam,pk.ph,sk); if(!f) return null;
  const blk=weeks.filter(x=>!x.off&&x.bi===w.bi), idx=Math.max(0,blk.indexOf(blk.find(x=>x.n===w.n))), len=blk.length||1;
  const pick=code=>{const p=strProg(code); if(!p) return null; const ds=Object.keys(p.d).map(Number).sort((a,b)=>a-b); const dur=ds.includes(len)?len:(ds.find(d=>d>=len)||ds[ds.length-1]); return {p,dur,col:Math.min(idx,dur-1)}};
  const L_=pick(f.lift), P_=f.prep?pick(f.prep):null, perm=permOf(w.n), days={};
  const put=(src,kind)=>{if(!src) return; for(const d of src.p.d[src.dur].days){let k=SDAYIX[d[0]]||Number(String(d[0]).replace(/\D/g,''))||0; if(!k) continue; const pos=perm.indexOf(k)+1||k; const o=days[pos]=days[pos]||{prep:null,lift:null}; o[kind]={title:d[1],min:d[2],rows:d[3].map(r=>({code:r[0],name:SDATA.ex[r[1]],method:SDATA.me[r[2]],dose:r[3][src.col]||r[3][r[3].length-1]||'',tier:r[4]})).filter(r=>r.dose&&r.dose!=='\u2014'&&r.dose!=='-')}}};
  put(L_,'lift'); put(P_,'prep');
  return {fam:pk.fam,ph:pk.ph,split:f.split,lift:f.lift,prep:f.prep,name:(L_&&L_.p.n)||SFAM[pk.fam],when:L_&&L_.p.w,wk:(L_?L_.col+1:1),dur:L_?L_.dur:0,days,fell:f.sk!==sk}}
const PAT_ID='';
let PAT=window.VELOU_PATTERN||null, pLoading=false;
function gviz(id,sheet,hdr){return fetch('/api/v1/library/tab?name='+encodeURIComponent(sheet),{credentials:'same-origin',headers:{Accept:'application/json'}}).then(r=>{if(!r.ok) throw new Error('library '+r.status); return r.json()}).then(j=>j.rows)}
const PROG0={REVO:{1:'1',2:'1',3:'1'},REIN:{1:'1',2:'1',3:'2'},ENVO:{1:'1',2:'2',3:'3'},ENIN:{1:'1',2:'2',3:'3'},WATT:{1:'2',2:'3',3:'3'},INT:{1:'2',2:'3',3:'2'},REF:{1:'1',2:'2',3:'3'},ENG:{1:'1',2:'2',3:'3'}};
function parsePattern(bl,sc,lb){
  const blocks={}, vids={}, dose={}, lh=lb.find(r=>r.some(c=>/^exercise$/i.test(c)))||[], dc=lh.findIndex(c=>/dos|sets|reps|prescri/i.test(c));
  for(const r of lb){ if(r[2]&&/^https?:\/\//i.test(r[6]||'')) vids[r[2].toLowerCase()]=r[6]; if(dc>=0&&r[2]&&r[dc]&&r!==lh) dose[r[2].toLowerCase()]=r[dc] }
  let labs=null, letter='';
  const bh=(bl[0]||[]).map(x=>String(x||'').trim().toLowerCase()), bc=k=>bh.indexOf(k);
  if(bc('focus')>=0&&bc('drill')>=0&&bc('block')>=0){const iF=bc('focus'),iL=bc('level'),iB=bc('block'),iO=bc('order'),iD=bc('drill'),iS=bc('sets x reps'),iA=bc('active'),iLab=bc('block label'),iV=bc('video link'), tmp={};
    for(const r of bl.slice(1)){const f=String(r[iF]||'').trim(), lv=String(r[iL]||'').trim(), b=String(r[iB]||'').trim().toUpperCase(), d=String(r[iD]||'').trim(); if(!f||!lv||!/^[A-D]$/.test(b)||!d) continue; if(iA>=0&&/^no$/i.test(String(r[iA]||'').trim())) continue;
      if(iV>=0&&/^https?:\/\//i.test(String(r[iV]||''))) vids[d.toLowerCase()]=String(r[iV]).trim();
      const s=iS>=0?String(r[iS]||'').trim():'', k=f+'|'+lv+'|'+b; (tmp[k]=tmp[k]||{label:(iLab>=0&&r[iLab])||f+' Patterning : Level '+lv+b,rows:[]}).rows.push({o:Number(r[iO])||999,n:s?d+' ('+s+')':d})}
    for(const k in tmp) blocks[k]={label:tmp[k].label,drills:tmp[k].rows.sort((a,b)=>a.o-b.o).map(x=>x.n)}}
  else for(const r of bl){ if(r[1]==='Block Label'){labs=r.slice(2,10); continue} if(!labs||!/^Drill\s*\d/i.test(r[1]||'')) continue;
    for(let i=0;i<8;i++){const lab=labs[i], d=r[2+i]; if(!lab||!d) continue; const m=lab.match(/^(.*?)\s*Patterning\s*:\s*Level\s*(\d)([A-D])/i); if(!m) continue; const k=m[1].trim()+'|'+m[2]+'|'+m[3].toUpperCase(); (blocks[k]=blocks[k]||{label:lab,drills:[]}).drills.push(d)}}
  const sch={}, prog={}; let foc=[];
  for(let i=0;i<sc.length;i++){const r=sc[i];
    if(!foc.length&&r.some(c=>/Patterning$/i.test(c))){foc=[]; for(let j=1;j<r.length;j+=7) if(r[j]) foc.push(r[j].replace(/\s*Patterning$/i,'').trim())}
    if(/^[A-Z]{2,5}$/.test(r[0])&&/^DAY 1$/i.test(r[1]||'')){const code=r[0], wks=[]; for(let k=i+1;k<sc.length&&!sc[k][0]&&sc[k].slice(1,57).some(Boolean)&&sc[k].slice(1,57).every(c=>!c||/^(OFF|[ABCD]+)$/i.test(c));k++){const row=sc[k], f={}; foc.forEach((fn,fi)=>{f[fn]=row.slice(1+fi*7,8+fi*7)}); wks.push(f)} sch[code]=wks}}
  const hdr=sc.find(r=>r[1]==='REVO'&&r[2]==='REIN');
  if(hdr) for(const r of sc){const m=(r[0]||'').match(/^LEVEL\s*(\d)$/i); if(!m) continue; for(let j=1;j<=8;j++) if(hdr[j]&&r[j]) (prog[hdr[j]]=prog[hdr[j]]||{})[m[1]]=r[j]}
  for(const c in PROG0){prog[c]=Object.assign({},PROG0[c],prog[c]||{})}
  return {blocks,sch,prog,vids,dose,foc};
}
function loadPattern(){if(PAT||pLoading) return; pLoading=true;
  (()=>{const ld=window.__veloULibId||LIB_DEFAULT; const get=id=>Promise.all(['Patterning Blocks','Patterning Scheme','Patterning Library'].map(s=>gviz(id,s))); return ld?get(ld).then(r=>r.every(x=>x&&x.length)?r:get(PAT_ID),()=>get(PAT_ID)):get(PAT_ID)})().then(([b,s,l])=>{PAT=window.VELOU_PATTERN=parsePattern(b,s,l); pLoading=false; for(const m of MOUNTS) try{m.refreshLib()}catch(e){}}).catch(e=>{pLoading=false; console.warn('Patterning sheet could not be loaded',e)})}
const addD=(d,n)=>{const x=new Date(d); x.setDate(x.getDate()+n); return x};
const bEnd=b=>{const s=day0(b.start); return s?addD(s,(Number(b.weeks)||1)*7-1):null};
function strBase(){return A.strBlocks.length?A.strBlocks.map(b=>b.fam==='none'?Object.assign({},b,{fam:''}):b):thrBlocks().map(b=>({weeks:SLEN(b.weeks),auto:1}))}
function strList(){let t=day0((A.strBlocks.length&&A.strStart)||A.startDate); return strBase().map(b=>{const st=t?ymd(t):''; if(t) t=addD(t,(Number(b.weeks)||1)*7); return Object.assign({},b,{start:st})})}
function laneAt(list,dt){if(!dt) return null; for(const b of list){const s=day0(b.start), e=bEnd(b); if(s&&e&&dt>=s&&dt<=e){const di=Math.round((dt-s)/864e5); return {b,wi:Math.floor(di/7)+1,dd:di%7+1}}} return null}
function thrAt(dt){const s=day0(A.startDate); if(!s||!dt) return null; const di=Math.round((dt-s)/864e5); if(di<0) return null; return planWeeks()[Math.floor(di/7)]||null}
const thrBlocks=()=>{const ws=planWeeks(), s=day0(A.startDate), o=[]; for(const w of ws){const l=o[o.length-1], c=w.off?'OFF':w.code; if(l&&l.bi===w.bi&&l.code===c){l.weeks++; continue} o.push({bi:w.bi,code:c,weeks:1,n0:w.n,dl:w.deload,pcode:w.pcode,focus:w.focus,uses:w.uses,pFoc:w.pFoc,pLv:w.pLv,start:s?ymd(addD(s,(w.n-1)*7)):''})} return o};
function patDayInd(dt){const hit=laneAt(A.patBlocks,dt); if(!hit||!PAT) return null; const b=hit.b, wk=PAT.sch[b.code]; if(!wk||!wk.length||b.lv==='none') return null;
  const tl=Math.max(1,Math.min(3,Number(lvl())||1)), lv=b.lv||(PAT.prog[b.code]&&PAT.prog[b.code][tl])||String(tl), fname=b.foc&&PAT.foc.includes(b.foc)?b.foc:'Global';
  const cell=String(((wk[(hit.wi-1)%wk.length]||{})[fname]||[])[hit.dd-1]||'').toUpperCase(), Ls=[...cell].filter(ch=>'ABCD'.includes(ch));
  if(!Ls.length||cell==='OFF') return {lv,focus:fname,b,day:null};
  return {lv,focus:fname,b,day:{code:Ls.join('+'),blocks:Ls.map(ch=>{const k=PAT.blocks[fname+'|'+lv+'|'+ch]||{label:fname+' Patterning : Level '+lv+ch,drills:[]}; return {ch,label:k.label,name:{A:'Positional Control',B:'Dynamic Stability',C:'Dynamic Sequencing',D:'Dynamic Power'}[ch],drills:k.drills.map(n=>{const m=n.match(/\(?\s*(\d+)\s*[x\u00d7]\s*(\d+\s*\w*)\s*\)?\s*$/i); return {name:m?n.slice(0,m.index).trim():n,video:PAT.vids[n.toLowerCase()]||vid(n)||'',dose:(PAT.dose&&PAT.dose[n.toLowerCase()])||(m?m[1]+' \u00d7 '+m[2].trim():'1 \u00d7 10')}})}})}}}
function strDayInd(dt){const hit=laneAt(strList(),dt); if(!hit||!SDATA||false) return null; const b=hit.b, pk0=strPick(), fam=b.fam||pk0.fam, ph=b.ph||pk0.ph, tw=thrAt(dt), sk=b.split||SPLITOF(tw&&!tw.off?tw.code:'REVO',A.days), f=strFor(fam,ph,sk); if(!f) return null;
  const len=Number(b.weeks)||1, pick=code=>{const p=strProg(code); if(!p) return null; const ds=Object.keys(p.d).map(Number).sort((a,c)=>a-c); const dur=ds.includes(len)?len:(ds.find(d=>d>=len)||ds[ds.length-1]); return {p,dur,col:Math.min(hit.wi-1,dur-1)}};
  const Lp=pick(f.lift), Pp=f.prep?pick(f.prep):null, o={prep:null,lift:null};
  const put=(src,kind)=>{if(!src) return; const d=src.p.d[src.dur].days.find(x=>(SDAYIX[x[0]]||Number(String(x[0]).replace(/\D/g,''))||0)===hit.dd); if(!d) return; o[kind]={title:d[1],min:d[2],rows:d[3].map(r=>({code:r[0],name:SDATA.ex[r[1]],method:SDATA.me[r[2]],dose:r[3][src.col]||r[3][r[3].length-1]||'',tier:r[4]})).filter(r=>r.dose&&r.dose!=='\u2014'&&r.dose!=='-')}};
  put(Lp,'lift'); put(Pp,'prep');
  return {fam,ph,split:f.split,lift:f.lift,prep:f.prep,name:(Lp&&Lp.p.n)||SFAM[fam],when:Lp&&Lp.p.w,wk:Lp?Lp.col+1:1,dur:Lp?Lp.dur:0,fell:f.sk!==sk,b,day:(o.prep||o.lift)?o:null}}
function laneRows(){const out=[], c1=A.coach1||'', c2=A.coach2||'', fd=d=>d?(d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear():'', tl=Math.max(1,Math.min(3,Number(lvl())||1)), U=s=>String(s||'').toUpperCase(), tb=thrBlocks();
  for(const b of tb){if(b.code==='OFF') continue; const s=day0(b.start); out.push([cur,c1,c2,'THR','THR\u2022'+b.code+'\u2022L'+tl+'\u2022'+b.weeks+'W'+(b.uses&&b.focus?'\u2022'+U(b.focus):''),fd(s),fd(s?addD(s,b.weeks*7-1):null),b.weeks])}
  const pb=A.pat.on?tb.filter(b=>b.code!=='OFF'&&(!PAT||PAT.sch[b.code])).map(b=>({code:b.code,start:b.start,weeks:b.weeks,lv:'',foc:b.pFoc||A.pat.foc||(b.uses?b.focus:'')||'Global'})):[];
  for(const b of pb){if(b.lv==='none') continue; const lv=b.lv||(PAT&&PAT.prog[b.code]?PAT.prog[b.code][tl]:tl); out.push([cur,c1,c2,'PAT','PAT\u2022'+b.code+'\u2022L'+lv+'\u2022'+b.weeks+'W\u2022'+U(b.foc||'Global'),fd(day0(b.start)),fd(bEnd(b)),Number(b.weeks)])}
  const sb=A.strBlocks.length?strList():tb.filter(b=>b.code!=='OFF').map(b=>({start:b.start,weeks:b.weeks}));
  for(const b of sb){if(b.fam==='none') continue; const pk=strPick(); out.push([cur,c1,c2,'STR',SFAM[b.fam||pk.fam]+'\u2022P'+(b.ph||pk.ph)+' '+phn(b.fam||pk.fam,b.ph||pk.ph)+'\u2022'+b.weeks+'W',fd(day0(b.start)),fd(bEnd(b)),Number(b.weeks)])}
  return out}
let svW=null;
let svCo=false, svSel=null;
function svDays(n){const ws=planWeeks(), st=day0(A.startDate), o=[]; let meta=null;
  const pw=PREPL?patWeek(ws[n-1],ws):null;
  for(let d=1;d<=7;d++){const dt=dateFor(n,d); let x=null; if(strList().length&&st){const r=strDayInd(dt); if(r){meta=meta||r; x=r.day}} else {const w=ws[n-1], s=w?strWeek(w,ws):null; if(s){meta=meta||s; x=s.days[d]}}
    x=x?strEdX(x,dt):x;
    if(LIFTL){x=x&&x.lift?{prep:null,lift:x.lift,pat:null}:null}
    else if(PREPL){const pt=patEdX(pw&&pw.days?pw.days[d]:null,dt), pr=x&&x.prep?x.prep:null; x=(pt||pr)?{prep:pr,lift:null,pat:pt}:null}
    o.push({d,dt,x})}
  return {days:o,meta}}
function renderSV(){
  if(A.str.on&&!SDATA) loadStrength(); if(A.pat.on&&!PAT) loadPattern();
  fillStr(); $('sview').hidden=false;
  const ws=planWeeks(), st=day0(A.startDate), comp=day0(A.compDate), sl=strList(), sw=sl.reduce((a,b)=>a+(Number(b.weeks)||0),0), tw=ws.length, toComp=st&&comp?Math.max(0,Math.round((comp-st)/6048e5)):null, pk=strAuto(), ap=strPick();
  let N=tw; if(st) for(const b of sl){const e=bEnd(b); if(e) N=Math.max(N,Math.ceil((Math.round((e-st)/864e5)+1)/7))}
  if(svW==null) svW=currentWeek(N)||1; svW=Math.max(1,Math.min(N||1,svW));
  $('svTitle').textContent=PREPL?'Prep plan':LIFTL?SFAM[ap.fam]+' \u00b7 lifting plan':(A.strBlocks.length?'Strength progression':SFAM[ap.fam]+' \u00b7 strength plan');
  $('svSub').textContent=pk.src+' \u00b7 strength focus '+SFAM[pk.fam]+(st?' \u00b7 starts '+fmt(st):' \u00b7 set a start date in the Throwing Plan')+(comp?' \u00b7 competition '+fmt(comp):'');
  const S=$('svStats'); S.textContent=''; const stat=(k,v,w)=>{const d=el('div',w?'warn':''); d.append(el('b',null,String(v)),el('span',null,k)); S.append(d)};
  stat('Level',pk.lvl?'L'+pk.lvl:'\u2014'); stat('Strength focus',pk.fam); stat('Weeks to comp',toComp??'\u2014'); stat('Strength weeks',sw||tw,toComp!=null&&sw&&sw!==toComp); stat('Blocks',sl.length||thrBlocks().filter(b=>b.code!=='OFF').length);
  const cb=$('svCoach'); cb.textContent=svCo?'Close coach tools':'Coach tools'; $('svCoachP').hidden=!svCo;
  $('svSt').textContent=!A.str.on?'Strength is turned off for this athlete.':!SDATA?'Loading strength programs\u2026':A.strBlocks.length?'Strength blocks run back to back from the plan start.':'Auto stack from the throwing phases. Programs always run their full 2, 4 or 8 weeks.';
  // progression strip
  {const M=$('svMap'); M.textContent=''; const NN=Math.max(N,toComp||0,1), pct=w=>(w/NN*100).toFixed(3)+'%', cw=st?currentWeek(NN):null;
   const ax=el('div','lt'); ax.style.height='22px'; for(let i=0;i<NN;i++){const c=el('div','bk wkc'+(cw===i+1?' cur':''),String(i+1)); c.style.left=pct(i); c.style.width='calc('+pct(1)+' - 2px)'; c.style.justifyContent='center'; c.style.padding='0'; ax.append(c)} M.append(el('span','ll','Week'),ax);
   const lane=(name,list)=>{const t=el('div','lt'); let at=0; for(const b of list){const d=el('div','bk '+b.cls,b.label); d.style.left=pct(at); d.style.width='calc('+pct(b.weeks)+' - 2px)'; d.title=b.label+' \u00b7 '+b.weeks+' wk'; t.append(d); at+=b.weeks} if(toComp!=null&&toComp<=NN){const c=el('div','comp'); c.style.left=pct(toComp); c.title='Competition'; t.append(c)} M.append(el('span','ll',name),t)};
   lane('Throwing',thrBlocks().map(b=>({weeks:b.weeks,label:b.code==='OFF'?'Off':b.code,cls:'thr'+(b.code==='OFF'?' off':'')})));
   lane('Strength',sl.length?sl.map(b=>({weeks:Number(b.weeks)||1,label:b.fam==='none'?'No lift':(b.fam||ap.fam)+' P'+(b.ph||ap.ph),cls:'f-'+(b.fam==='none'?'none':(b.fam||ap.fam))})):thrBlocks().map(b=>({weeks:b.weeks,label:b.code==='OFF'?'Off':ap.fam+' P'+ap.ph,cls:(b.code==='OFF'?'f-none':'f-'+ap.fam)+' auto'})))}
   {const M2=$('svMap2'), M1=$('svMap'); if(M2&&M1) M2.replaceChildren(...[...M1.childNodes].map(n=>n.cloneNode(true)))}
  // stack editor
  {const E=$('lnStr'); E.textContent=''; $('lnStrN').textContent=A.strBlocks.length?'':'Auto stack: one block per throwing phase at the primary program, rounded to 2, 4 or 8 weeks. Change any block to take over the stack.';
   const edit=fn=>{if(!A.strBlocks.length) A.strBlocks=strBase().map(b=>{const o=Object.assign({},b); delete o.auto; return o}); fn(A.strBlocks); changed()};
   sl.forEach((b,i)=>{const r=el('div','svrow'), raw=A.strBlocks[i]||strBase()[i];
     const sel=(opts,val,lab,fn)=>{const x=el('select'); x.setAttribute('aria-label','Block '+(i+1)+' '+lab); for(const [v,t] of opts){const o=el('option',null,t); o.value=v; x.append(o)} x.value=val||''; x.addEventListener('change',e=>edit(L=>fn(L[i],e.target.value))); return x};
     const mk=(t,lab,fn,dis)=>{const x=el('button','btn sm',t); x.type='button'; x.setAttribute('aria-label',lab); x.disabled=!!dis; x.addEventListener('click',()=>edit(fn)); return x};
     const n=el('select'); n.setAttribute('aria-label','Block '+(i+1)+' length'); const LENS=(()=>{const fm=raw.fam&&raw.fam!=='none'?raw.fam:ap.fam, ph=String(raw.ph||ap.ph||''), s=new Set([2,4,8]); if(SDATA&&SDATA.p) for(const k of Object.keys(SDATA.p)) if(k.startsWith(fm+'\u2022')&&(!ph||k.includes('\u2022P'+ph+'\u2022'))) for(const d of Object.keys(SDATA.p[k].d||{})) s.add(Number(d)); return [...s].filter(Boolean).sort((a,c)=>a-c)})(), cur=Number(raw.weeks)||4; for(const v of (LENS.includes(cur)?LENS:[...LENS,cur].sort((a,c)=>a-c))){const o=el('option',null,v+' weeks'+(LENS.includes(v)?'':' (pick '+LENS.join(', ')+')')); o.value=String(v); n.append(o)} n.value=String(cur); n.addEventListener('change',e=>edit(L=>{L[i].weeks=Number(e.target.value)||4}));
     const set=(o,k,v)=>{if(v) o[k]=v; else delete o[k]};
     r.append(el('span','bn',String(i+1)), sel([['','Auto: '+SFAM[ap.fam]],...Object.entries(SFAM)],raw.fam==='none'?'':raw.fam,'program',(o,v)=>set(o,'fam',v)), (()=>{const ff=raw.fam&&raw.fam!=='none'?raw.fam:ap.fam; return sel([['','Auto: P'+ap.ph+' \u00b7 '+phn(ff,ap.ph)],['1','P1 \u00b7 '+phn(ff,1)],['2','P2 \u00b7 '+phn(ff,2)],['3','P3 \u00b7 '+phn(ff,3)]],raw.ph,'phase',(o,v)=>set(o,'ph',v))})(), n, sel([['','Split: follows throwing'],...Object.entries(SSPLIT).map(([k,x])=>[k,x.label])],raw.split,'split',(o,v)=>set(o,'split',v)),
       mk('\u2191','Move block '+(i+1)+' earlier',L=>{const t=L[i-1];L[i-1]=L[i];L[i]=t},i===0), mk('\u2193','Move block '+(i+1)+' later',L=>{const t=L[i+1];L[i+1]=L[i];L[i]=t},i===sl.length-1), mk('\u00d7','Remove block '+(i+1),L=>{L.splice(i,1)}));
     E.append(r)})}
  if((PREPL?(!PAT&&!SDATA):(!A.str.on||!SDATA))||!N){$('svDays').textContent=''; $('svTbl').textContent=''; $('svSes').textContent=''; $('svWk').textContent=''; $('svMeta').textContent=''; return}
  // week table
  {const T=$('svTbl'); T.textContent=''; const h=el('div','smr h'); for(const c of ['Week','Dates','Strength block','Throwing',PREPL?'Prep days':'Days (L lift)',PREPL?'Days':'Lifts']) h.append(el('span',null,c)); T.append(h); const cw=st?currentWeek(N):null;
   for(let n=1;n<=N;n++){const {days,meta}=svDays(n), w=ws[n-1], r=el('div','smr'+(n===cw?' cur':'')+(n===svW?' on':'')), d1=dateFor(n,1), d7=dateFor(n,7), pg=el('span','pg'), sq=el('span','sq'); let lifts=0;
     if(meta){pg.append(el('b',null,SFAM[meta.fam]+' P'+meta.ph+' \u00b7 wk '+meta.wk),el('span',null,phn(meta.fam,meta.ph)+' \u00b7 '+meta.split.label))} else pg.append(el('span',null,'No lift'));
     for(const x of days){const i=el('i',x.x?(x.x.lift?'l':'p'):'',x.x?(x.x.lift?'L':'P'):''); if(x.x&&(x.x.lift||PREPL)) lifts++; sq.append(i)}
     r.append(el('span','n',String(n)),el('span',null,d1?fmt(d1)+' \u2013 '+fmt(d7):''),pg,el('span',null,w?(w.off?'Off':w.code):''),sq,el('span','r',String(lifts)));
     r.addEventListener('click',()=>{svW=n; svSel=null; renderSV()}); T.append(r)}}
  // week view
  const {days,meta}=svDays(svW), box=$('svDays'); box.textContent='';
  $('svWk').textContent='Week '+svW+' of '+N; $('svPrev').disabled=svW<=1; $('svNext').disabled=svW>=N;
  $('svMeta').textContent=meta?strLabel(meta)+' \u00b7 week '+meta.wk+' of '+meta.dur+(meta.fell?' \u00b7 closest available split':''):'No strength this week';
  for(const {d,dt,x} of days){const c=el(x?'button':'div','svd'+(x?'':' none')+(svSel===d?' on':'')); if(x){c.type='button'; c.setAttribute('aria-expanded',String(svSel===d)); c.addEventListener('click',()=>{svSel=svSel===d?null:d; renderSV()})}
    const h=el('div','dd1'); h.append(el('b',null,dt?dt.toLocaleDateString(undefined,{weekday:'short'}):'Day '+d),el('span',null,(dt?fmt(dt)+' \u00b7 ':'')+'Day '+d)); c.append(h);
    if(!x){c.append(el('span','tt','Off')); box.append(c); continue}
    c.append(el('span','tt',PREPL?((x.pat?'Patterning '+x.pat.code:'')||(x.prep&&x.prep.title)||'Prep'):((x.lift?x.lift.title:x.prep&&x.prep.title)||'Session')));
    const sub=(lab,rows)=>{if(!rows||!rows.length) return; c.append(el('span','sgl',lab)); const ul=el('ul'); rows.forEach(r=>{const li=el('li'); li.append(el('span',null,r.name),el('b',null,r.dose)); ul.append(li)}); c.append(ul)};
    if(x.pat) for(const b of x.pat.blocks) sub(b.ch+' \u00b7 '+b.name,b.drills.map(q=>({name:q.name,dose:q.dose})));
    sub('Strength prep'+(x.prep&&x.prep.min?' \u00b7 '+x.prep.min.replace(/\s*\u00b7.*$/,''):''),x.prep&&x.prep.rows); sub('Lift',x.lift&&x.lift.rows);
    box.append(c)}
  const SS=$('svSes'); SS.textContent=''; const sx=svSel&&days[svSel-1]&&days[svSel-1].x;
  if(sx){const dt=days[svSel-1].dt, bx=el('section','sses'), hh=el('div','shd'); hh.append(el('h3',null,(PREPL?'Prep':'Strength')+' \u00b7 '+(dt?dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}):'Day '+svSel)),el('span','note',meta?meta.name:'')); const xb=el('button','btn sm','Close'); xb.type='button'; xb.addEventListener('click',()=>{svSel=null; renderSV()}); hh.append(xb); bx.append(hh);
    const tbl=(g_,lab)=>{if(!g_) return; bx.append(el('div','sgrp',lab+(g_.title?' \u00b7 '+g_.title:'')+(g_.min?' \u00b7 '+g_.min:''))); const t=el('div','stbl'), th=el('div','str_ h'); for(const k of ['','Exercise','Method / cue','Sets \u00d7 reps']) th.append(el('span',null,k)); t.append(th); for(const r of g_.rows){const rr=el('div','str_'+(r.tier===2?' t2':'')); rr.append(el('span','c',r.code),el('span','ex',r.name),el('span','m',r.method),el('span','ds',r.dose)); t.append(rr)} bx.append(t)};
    if(sx.pat) for(const b of sx.pat.blocks){bx.append(el('div','sgrp','Patterning \u00b7 '+b.ch+' '+b.name+' \u00b7 '+b.label)); const t=el('div','stbl'), th=el('div','str_ h'); for(const k of ['','Drill','','Sets \u00d7 reps']) th.append(el('span',null,k)); t.append(th); for(const q of b.drills){const rr=el('div','str_'), ex=el('span','ex'); if(q.video){const a=el('a',null,q.name); a.href=q.video; a.target='_blank'; a.rel='noopener'; a.style.color='inherit'; ex.append(a)} else ex.textContent=q.name; rr.append(el('span','c',b.ch),ex,el('span','m',''),el('span','ds',q.dose)); t.append(rr)} bx.append(t)}
    tbl(sx.prep,PREPL?'Strength prep (run first)':'Prep (run first)'); tbl(sx.lift,'Lift'); SS.append(bx)}
}
function fillStr(){
  try{const a=strAuto(), pk=strPick(), sf=$('sFam'), sp=$('sPh'); $('sOn').value=A.str.on?'1':'0';
    sf.textContent=''; {const o=el('option',null,'Auto: '+SFAM[a.fam]); o.value=''; sf.append(o)} for(const k in SFAM){const o=el('option',null,SFAM[k]); o.value=k; sf.append(o)} sf.value=A.str.fam||'';
    sp.textContent=''; {const o=el('option',null,'Auto: P'+a.ph); o.value=''; sp.append(o)} for(const k of ['1','2','3']){const o=el('option',null,'P'+k+(k==='1'?' \u00b7 build':k==='2'?' \u00b7 develop':' \u00b7 express')); o.value=k; sp.append(o)} sp.value=A.str.ph||'';
    sf.disabled=sp.disabled=!A.str.on; $('pOn').value=A.pat.on?'1':'0'; {const pf=$('pFoc'); pf.textContent=''; {const o=el('option',null,'Match throwing focus'); o.value=''; pf.append(o)} for(const f of (PAT?PAT.foc:D.focus)){const o=el('option',null,f); o.value=f; pf.append(o)} pf.value=A.pat.foc||''; pf.disabled=!A.pat.on}
    $('sNote').textContent=!A.str.on?'Strength is turned off for this plan.':!SDATA?'Loading strength programs\u2026':'Default: '+SFAM[pk.fam]+' P'+pk.ph+' (auto pick from '+a.src+'). The split follows the throwing phase: REVO/REIN Axial 6-day, ENVO/ENIN Axial 5-day, WATT/INT Non-Axial 5-day, REF/ENG Non-Axial 4-day. Each block uses the next longer program length and stops when the throwing phase ends. Strength day 1 lines up with throwing day 1, and moved days carry their lift with them.'}catch(e){console.warn(e)}
}
function renderLanes(){
  const box=$('lanes'); if(!box) return; const s=day0(A.startDate), tb=thrBlocks();
  box.hidden=!tb.length; if(!tb.length) return;
  const tl=$('lnTl'); tl.textContent=''; const pk=strPick();
  const pB=A.pat.on?tb.filter(b=>(b.code!=='OFF'||b.pcode)&&(!A.pat.only||b.code==='OFF')&&(!PAT||PAT.sch[b.code==='OFF'?b.pcode:b.code])).map(b=>({start:b.start,weeks:b.weeks,label:(b.code==='OFF'?'Deload':b.code)+' \u00b7 '+(b.pFoc||A.pat.foc||(b.uses?b.focus:'')||'Global'),cls:'pat'})):[];
  const sB=A.strBlocks.length?strList().map(b=>({start:b.start,weeks:b.weeks,label:b.fam==='none'?'None':(b.fam||pk.fam)+' P'+(b.ph||pk.ph),cls:'str'})):tb.filter(b=>b.code!=='OFF').map(b=>({start:b.start,weeks:b.weeks,label:pk.fam+' P'+pk.ph,cls:'str auto'}));
  const tB=tb.map(b=>({start:b.start,weeks:b.weeks,label:b.code==='OFF'?(b.dl?'Deload':'Off'):b.code+(b.uses&&b.focus?' \u00b7 '+b.focus:''),cls:'thr'+(b.code==='OFF'?' off':'')}));
  const prepB=(A.strBlocks.length?strList():sB.map(b=>({start:b.start,weeks:b.weeks,fam:pk.fam,ph:pk.ph}))).filter(b=>{const f=b.fam||pk.fam; return f&&f!=='none'&&f!=='ML'}).map(b=>({start:b.start,weeks:b.weeks,label:(b.fam||pk.fam)+' Prep P'+(b.ph||pk.ph),cls:'str'+(A.strBlocks.length?'':' auto')}));
  const all=[...tB,...pB,...sB].filter(b=>day0(b.start));
  if(!s||!all.length){$('lnNote').textContent='Set a start date to line up the lanes on a calendar.'}
  else{
    const lo=Math.min(...all.map(b=>day0(b.start).getTime())), hi=Math.max(...all.map(b=>bEnd(b).getTime()))+864e5, span=hi-lo, pct=t=>((t-lo)/span*100).toFixed(3)+'%';
    const ax=el('div','lt ax'); for(let t=lo;t<hi;t+=6048e5*2){const sp=el('span',null,fmt(new Date(t))); sp.style.left=pct(t); ax.append(sp)} tl.append(el('span','ll',''),ax);
    const lane=(name,list)=>{const t=el('div','lt'); for(const b of list){const st=day0(b.start); if(!st) continue; const e=bEnd(b).getTime()+864e5, d=el('div','bk '+b.cls,b.label); d.style.left=pct(st.getTime()); d.style.width='calc('+((e-st.getTime())/span*100).toFixed(3)+'% - 2px)'; d.title=name+': '+b.label+' \u00b7 '+fmt(st)+' to '+fmt(bEnd(b))+' \u00b7 '+b.weeks+' wk'; t.append(d)} const now=Date.now(); if(now>=lo&&now<hi){const n=el('div','now'); n.style.left=pct(now); n.title='Today'; t.append(n)} tl.append(el('span','ll',name),t)};
    if(prepB.length) lane('Prep',prepB); lane('Patterning',pB); lane('Throwing',tB); lane('Strength',sB);
    {const tst=[], wn=planWeeks().length; for(let k=4;k<=wn;k+=4) tst.push({start:ymd(addD(new Date(lo),(k-1)*7)),weeks:1,label:'Retest',cls:'tst'}); if(wn%4) tst.push({start:ymd(addD(new Date(lo),(wn-1)*7)),weeks:1,label:'Retest',cls:'tst'}); lane('Retest',tst)}
    $('lnNote').textContent='Patterning runs with each throwing phase, on the same days, and moves when a day moves. Strength can run on its own dates; dashed strength blocks follow the throwing phase. Prep runs before every lift and matches each strength block; Movement Literacy has none.'}
  const VW=host.dataset.view||''; const ed=$('lnEd'); ed.hidden=!(coachOpen||VW==='history'||VW==='strength'); if(ed.hidden) return;
  for(const [id,k] of [['lnC1','coach1'],['lnC2','coach2']]){const i=$(id); if(root.activeElement!==i) i.value=A[k]||''}
  const mkRow=(list,i,b,kind)=>{const r=el('div','lnr'), set=(k,v)=>{if(v===''||v==null) delete b[k]; else b[k]=v; changed()};
    const inp=(type,val,lab,fn,ex)=>{const x=el('input'); x.type=type; x.value=val??''; x.setAttribute('aria-label',lab); if(ex) for(const k in ex) x.setAttribute(k,ex[k]); x.addEventListener('change',e=>fn(e.target.value)); return x};
    const sel=(opts,val,lab,fn)=>{const x=el('select'); x.setAttribute('aria-label',lab); for(const [v,t] of opts){const o=el('option',null,t); o.value=v; x.append(o)} x.value=val||''; x.addEventListener('change',e=>fn(e.target.value)); return x};
    r.append(el('span','bn',String(i+1)), inp('date',b.start,'Block '+(i+1)+' start',v=>set('start',v)), inp('number',b.weeks,'Block '+(i+1)+' weeks',v=>set('weeks',Math.max(1,Math.min(26,Number(v)||1))),{min:1,max:26}), el('span','note','wk'));
    if(kind==='pat') r.append(sel(Object.keys(PAT?PAT.sch:{}).map(c=>[c,c]),b.code,'Patterning phase',v=>set('code',v)), sel([['','Level: auto'],['1','L1'],['2','L2'],['3','L3'],['none','No patterning']],b.lv,'Patterning level',v=>set('lv',v)), sel((PAT?PAT.foc:D.focus).map(f=>[f,f]),b.foc||'Global','Patterning focus',v=>set('foc',v)));
    else r.append(sel([['','Program: '+SFAM[pk.fam]+' (auto)'],...Object.entries(SFAM),['none','No strength']],b.fam,'Strength program',v=>set('fam',v)), sel([['','Phase: P'+pk.ph+' (auto)'],['1','P1'],['2','P2'],['3','P3']],b.ph,'Strength phase',v=>set('ph',v)), sel([['','Split: follows throwing'],...Object.entries(SSPLIT).map(([k,x])=>[k,x.label])],b.split,'Strength split',v=>set('split',v)));
    const rm=el('button','btn sm','\u00d7'); rm.type='button'; rm.setAttribute('aria-label','Remove block '+(i+1)); rm.addEventListener('click',()=>{list.splice(i,1); changed()}); r.append(rm);
    const pv=i>0?bEnd(list[i-1]):null, st=day0(b.start), ov=pv&&st&&st<=pv;
    r.append(el('span','bsn'+(ov?' warn':''),st?fmt(st)+' to '+fmt(bEnd(b))+(ov?' \u00b7 overlaps block '+i+'; the earlier block runs on shared days':''):'Pick a start date'));
    return r};
  for(const [kind,list,bx,nt] of []){const b2=$(bx); b2.textContent=''; list.forEach((b,i)=>b2.append(mkRow(list,i,b,kind))); $(nt).textContent=list.length?'':'Following the throwing phase. Add a block, or copy the throwing blocks, to set this lane on its own dates.'}
  const t=el('table'), th=el('thead'), hr=el('tr'); for(const c of ['Athlete','Throwing coach','Strength coach','Lane','Program','Start','End','Weeks']) hr.append(el('th',null,c)); th.append(hr); t.append(th); const tbd=el('tbody'); for(const r of laneRows()){const tr=el('tr'); for(const c of r) tr.append(el('td',null,String(c))); tbd.append(tr)} t.append(tbd); const rb=$('lnRows'); rb.textContent=''; rb.append(t);
}
function patWeek(w,weeks){
  if(!PAT||!A.pat.on||!w||(w.off&&!w.pcode)||(A.pat.only&&!w.off)) return null; const pc=w.off?w.pcode:w.code, wk=PAT.sch[pc]; if(!wk||!wk.length) return null;
  const tl=Math.max(1,Math.min(3,Number(lvl())||1)), lv=(PAT.prog[pc]&&PAT.prog[pc][tl])||String(tl);
  const want=w.pFoc||A.pat.foc||w.focus, fname=want&&PAT.foc.includes(want)?want:'Global', row=(wk[((w.pw||1)-1)%wk.length]||{})[fname]||[], perm=permOf(w.n), days={};
  row.forEach((cell,i)=>{const s=String(cell||'').toUpperCase(); if(!s||s==='OFF') return; const L=[...s].filter(ch=>'ABCD'.includes(ch)); if(!L.length) return; const pos=perm.indexOf(i+1)+1||(i+1);
    days[pos]={code:L.join('+'),blocks:L.map(ch=>{const b=PAT.blocks[fname+'|'+lv+'|'+ch]||{label:fname+' Patterning : Level '+lv+ch,drills:[]}; return {ch,label:b.label,name:{A:'Positional Control',B:'Dynamic Stability',C:'Dynamic Sequencing',D:'Dynamic Power'}[ch],drills:b.drills.map(n=>{const m=n.match(/\(?\s*(\d+)\s*[x\u00d7]\s*(\d+\s*\w*)\s*\)?\s*$/i); return {name:m?n.slice(0,m.index).trim():n,video:PAT.vids[n.toLowerCase()]||vid(n)||'',dose:(PAT.dose&&PAT.dose[n.toLowerCase()])||(m?m[1]+' \u00d7 '+m[2].trim():'1 \u00d7 10')}})}})}});
  return {lv,focus:fname,auto:!w.pLv,split:fname!==(w.focus||'Global'),days};
}
const PHN={1:'Overcoming + Sub-Max Eccentric',2:'Overcoming + Supra-Max Eccentric',3:'Yielding + Concentric'}, PHF={FC:{1:'Eccentric Force',2:'Transition',3:'Eccentric Power'},AC:{1:'Dead-Start Concentric',2:'Rapid Descent to a Pause',3:'Reactive, No Pause'},AP:{1:'VBT Clusters',2:'Complex',3:'French Contrast'},ML:{1:'Flood the Variety',2:'Narrow & Deepen',3:'Introduce Tempo'}};
const phn=(f,p)=>((PHF[f]||{})[p])||PHN[p]||'';
const SLEN=(w,fam)=>{w=Number(w)||4; return w<=2?2:w<=5?4:(fam==='ML'&&w>=10)?12:8};
const strLabel=s=>SFAM[s.fam]+' P'+s.ph+' '+phn(s.fam,s.ph)+' \u00b7 '+s.split.label;
const permOf=n=>(A.dayMove&&A.dayMove[n])||[1,2,3,4,5,6,7];
function moveDay(n,from,to){if(to<1||to>7||to===from) return; const p=permOf(n).slice(), t=p[from-1]; p[from-1]=p[to-1]; p[to-1]=t; const a=A.order[n+'-'+from], b=A.order[n+'-'+to]; if(b) A.order[n+'-'+from]=b; else delete A.order[n+'-'+from]; if(a) A.order[n+'-'+to]=a; else delete A.order[n+'-'+to]; if(p.every((x,i)=>x===i+1)) delete A.dayMove[n]; else A.dayMove[n]=p; changed()}
function daySummary(dr,dl,focus){
  if(!dr.length) return 'Off';
  const nm=dr.map(r=>String(r.name||'')), has=re=>nm.some(x=>re.test(x)), rp=dr.map(r=>Number(r.rpe)||0), mx=Math.max(...rp), av=rp.reduce((a,b)=>a+b,0)/rp.length;
  const oz=dr.filter(r=>/oz/i.test(r.weight||'')).length, fb=dr.filter(r=>/football/i.test(r.weight||'')||/football/i.test(r.name||'')).length;
  let type=has(/bullpen|\bpen\b/i)?'Bullpen':has(/mound/i)?'Mound':has(/long toss/i)?'Long Toss':oz>=dr.length/2?'Plyo Ball':fb>=dr.length/2?'Football':has(/catch/i)&&dr.length<=3?'Catch Play':'Movement Drills';
  const it=dl?'Deload':mx>=90?'High-Intent':av<=60?'Light':mx>=80?'Build-Up':'';
  if(type==='Plyo Ball'&&focus){const sc=dr.reduce((a,r)=>a+(r.wv||0),0)/12; return focus+' '+(sc<3?'A':sc<5?'B':sc<7?'C':'D')}
  if(type==='Movement Drills'&&it) type='Drills';
  return (it?it+' ':'')+type;
}
function dateFor(n,day){const d=day0(A.startDate); if(!d) return null; d.setDate(d.getDate()+(n-1)*7+day-1); return d}
function currentWeek(total){const d=day0(A.startDate); if(!d) return null; const n=Math.floor((new Date()-d)/6048e5)+1; return n>=1&&n<=total?n:null}
function flagsOn(){const l=L(); return (l.arm!=null&&l.arm<85)||(l.injury&&!/^(none|—|-|n\/a)$/i.test(l.injury))}
function render(){
  if(host.dataset.view==='strength') return renderSV(); if(host.dataset.view==='history') return draw(); if(DV) return QUIET?null:renderAll(); if(BV) return renderBuild(); if(NV) return renderNotes(); if(AV) return renderAthlete();
  const p=prog(), weeks=planWeeks(), tl=isTL(), l=L(), v=V(); TP=testPlan(weeks); if(A.str.on&&!SDATA) loadStrength(); if(A.pat.on&&!PAT) loadPattern(); try{renderLanes()}catch(e){console.warn(e)}
  for(const w of weeks){w.rows=statRows(w); w.throws=w.rows.reduce((a,r)=>a+(r.plan?0:r.sets*r.reps),0); w.wv=w.rows.reduce((a,r)=>a+(r.wv||0),0); w.peak=w.rows.reduce((a,r)=>Math.max(a,r.rpe||0),0); w.hi=w.rows.reduce((a,r)=>a+(!r.plan&&r.rpe>=90?r.sets*r.reps:0),0)}
  {let prevB=null, prevD7=null, prevPD7=null, first=true;
   for(const w of weeks){
     w.ds=[1,2,3,4,5,6,7].map(d=>w.rows.reduce((a,x)=>a+(x.day===d?(x.wv||0):0),0)/12);
     if(w.off){w.roll=null; w.base=null; prevD7=null; prevPD7=null; continue}
     const sv={e:A.rowEdits,a:A.added,r:A.removed,d:A.deload}; A.rowEdits={}; A.added={}; A.removed={}; A.deload={};
     let pr; try{pr=weekRows(w)}finally{A.rowEdits=sv.e; A.added=sv.a; A.removed=sv.r; A.deload=sv.d}
     const pd=[1,2,3,4,5,6,7].map(d=>pr.reduce((a,x)=>a+(x.day===d?(x.wv||0):0),0)/12);
     const pairs=[]; for(let i=0;i<6;i++) pairs.push(pd[i]+pd[i+1]); if(!first&&prevPD7!=null) pairs.push(prevPD7+pd[0]);
     const target=pairs.reduce((a,b)=>a+b,0)/pairs.length;
     let auto=prevB==null?target:Math.max(target,prevB*0.95);
     prevPD7=pd[6];
     const B=A.baseline[w.n]!=null&&A.baseline[w.n]!==''?Number(A.baseline[w.n]):auto;
     let s=0; for(let i=0;i<6;i++) s+=(w.ds[i]+w.ds[i+1])-B;
     if(!first&&prevD7!=null) s+=(prevD7+w.ds[0])-B;
     w.base=B; w.baseAuto=A.baseline[w.n]==null||A.baseline[w.n]===''; w.roll=s;
     prevB=auto; prevD7=w.ds[6]; first=false;
   }}
  {let run=[]; for(const w of weeks){ if(w.off||A.deload[w.n]){run=[];continue} run.push(w); if(run.length===6){const c=run.slice(3).reduce((a,b)=>b.wv>a.wv?b:a); c.sugDl=true; run=run.slice(run.indexOf(c)+1)} } }
  if(viewWeek>weeks.length) viewWeek=Math.max(1,weeks.length);
  $('pname').textContent=tl?('Level '+lvl()+' \u00b7 offseason plan'):p.uses?('THR\u2022'+p.code+'\u2022L'+lvl()+'\u20224W\u2022'+A.focus):p.name;
  const src=[];
  if(A.level) src.push('Level '+A.level+' set by coach'); else if(l.level) src.push('Level '+l.level+' from throwing level'); else src.push('Level 1 (no throwing level on file)');
  if(v.velo) src.push(v.velo+' mph top velo'+(Number(A.velo)?' (coach)':' (TrackMan)'));
  if(v.kneel) src.push(v.kneel+' mph kneeling'+(Number(A.kneel)?' (coach)':' (Program Board)'));
  if(v.lt) src.push(v.lt+' ft long toss'+(Number(A.lt)?' (coach)':' (Program Board)'));
  $('src').textContent=src.join(' \u00b7 ');
  const st=$('stats'); st.textContent='';
  const add=(val,lab)=>{const s=el('div','stat');s.append(el('b',null,val),el('span',null,lab));st.append(s)};
  const N=weeksAvail(), mound=weeks.filter(w=>w.mound).length;
  if(tl){add(N==null?String(weeks.length):String(N),N==null?'Weeks planned':'Weeks to comp'); add(String(mound),'Mound weeks')}
  else add(String(weeks.reduce((a,w)=>a+w.throws,0)),'Throws, program');
  const cw=currentWeek(weeks.length); if(cw) add(String(cw),'Current week');
  // flags
  const fl=$('flags'); fl.textContent=''; const fs=[];
  if(l.arm!=null&&l.arm<85) fs.push(['ARM SCORE','Arm Score is '+l.arm.toFixed(1)+(l.arm<70?', in the severe-risk range.':', in the at-risk range.')+' Review the high-intensity days before assigning them.']);
  if(l.injury&&!/^(none|—|-|n\/a)$/i.test(l.injury)) fs.push(['INJURY','Injury status on file: '+l.injury+'.']);
  if(fs.length){const hi=weeks.reduce((a,w)=>a+w.hi,0); if(hi) fs.push(['90%+',hi+' throws in this plan are at 90% intensity or higher. They are marked in red in the week view.'])}
  for(const [t,m] of fs){const r=el('div','flag'); r.append(el('b',null,t),el('span',null,m)); fl.append(r)}
  fl.hidden=!fs.length;
  renderTimeline(weeks,N,mound,cw);
  if(MV){mapBar(weeks); root.querySelector('.wrap').classList.toggle('cal',MAPV==='cal'); if(MAPV==='cal') renderMapCal(weeks); else $('mcal').hidden=true}
  if(MV){try{mdRefresh(weeks,QUIET)}catch(e){console.warn(e)}}
  const cal=$('cal'); cal.textContent='';
  const today=new Date().toDateString(), hiOn=flagsOn();
  if(!weeks.length&&DV){dvBar(); cal.append(el('p','note','No throwing plan for this athlete yet. Open the Throwing tab under Programming to start one.'))} else if(!weeks.length){cal.append(el('p','note',tl?(N==null?'Open Coach tools and enter a start date and a competition date for a suggested offseason stack, or add blocks by hand.':'There are no weeks in this plan yet.'):'This program has no weeks.'))}
  else{
    const w=weeks[viewWeek-1], sec=el('section','week'), hd=el('div','wkhead'), SW=strWeek(w,weeks), PW=patWeek(w,weeks);
    hd.append(el('h2',null,'Week '+w.n));
    hd.append(el('span','tag'+(w.mound?' mound':''),w.phase+(w.off?'':' \u00b7 week '+w.pw+(w.rep?' (round '+w.rep+')':''))));
    if(w.uses) hd.append(el('span','m',w.focus+' focus'));
    {const s0=(w.shift!=null?w.shift:Number(A.shift))||0; if(s0) hd.append(el('span','m','Days slid '+Math.abs(s0)+' '+(s0>0?'later':'earlier')));}
    const d1=dateFor(w.n,1), d7=dateFor(w.n,7); if(d1) hd.append(el('span','m',fmt(d1)+' to '+fmt(d7)));
    const m1=el('span','m'); m1.append(el('b',null,String(w.throws)),' throws'); const m2=el('span','m'); m2.append(el('b',null,w.roll==null?'—':String(Math.round(w.roll))),' rolling week score');
    const m3=el('span','m'); if(coachOpen&&!w.off){const bi=el('input','ein bin'); bi.type='number'; bi.step=0.5; bi.min=0; bi.max=12; bi.value=w.base; bi.setAttribute('value',w.base); bi.setAttribute('aria-label','Week '+w.n+' baseline'); bi.addEventListener('change',e=>{const v=e.target.value; if(v===''||isNaN(Number(v))) delete A.baseline[w.n]; else A.baseline[w.n]=Math.max(0,Math.min(12,Number(v))); changed()}); m3.append('Baseline ',bi); if(!w.baseAuto){const rs=el('button','btn sm','Auto'); rs.type='button'; rs.title='Use the automatic baseline'; rs.addEventListener('click',()=>{delete A.baseline[w.n]; changed()}); m3.append(' ',rs)}} else if(w.base!=null){m3.append('Baseline ',el('b',null,String(Math.round(w.base))))}
    const tg=el('div','cmpbar'); {const b=el('button','btn sm'+(compact?' on':''),compact?'Expand days':'Compact days'); b.type='button'; b.setAttribute('aria-pressed',String(compact)); b.addEventListener('click',()=>{compact=!compact; openDays.clear(); try{localStorage.setItem('velou.plan.compact',compact?'1':'0')}catch(e){} render()}); tg.append(b); if(compact&&openDays.size){const c2=el('button','btn sm','Collapse all'); c2.type='button'; c2.addEventListener('click',()=>{openDays.clear(); render()}); tg.append(c2)}}
    hd.append(m1,m2,m3,tg); if(PW){const pt=el('span','strtag pat','Patterning \u00b7 L'+PW.lv+' \u00b7 '+PW.focus); hd.insertBefore(pt,m1)} if(SW){const st=el('span','strtag','Strength \u00b7 '+strLabel(SW)+' \u00b7 wk '+SW.wk); st.title=SW.name+(SW.fell?' (closest available split)':''); hd.insertBefore(st,m1)} sec.append(hd);
    {const pd=PDESC[w.code], fd=w.uses?FDESC[w.focus]:null; if(pd||fd){const box=el('div','desc');
      if(pd){const r=el('div','dsr'); r.append(el('span','dsk',w.off?'Off week':(w.phase+' phase')), el('span','dsv',pd)); box.append(r)}
      if(fd){const r=el('div','dsr'); r.append(el('span','dsk',w.focus+' focus'), el('span','dsv',fd)); box.append(r)}
      sec.append(box)}}
    if(!w.off&&(w.sugDl||A.deload[w.n]||coachOpen)){
      const p=el('div','dlbox'), on=!!A.deload[w.n];
      p.append(el('span','dltag',on?'DELOAD':w.sugDl?'SUGGESTED DELOAD':'DELOAD THIS WEEK'));
      p.append(el('span','dltx',on?('Reps cut to '+(A.dlVol||60)+'% and intensity lowered '+(A.dlInt||10)+' points this week. Throws and scores reflect the deload.'):w.sugDl?'This is the heaviest week in a 4 to 6 week training stretch. Scale it back to let the athlete recover before the next block.':'Scale this week back for recovery, soreness or a throwing adjustment. Reps and intensity drop for every drill this week.'));
      if(coachOpen){
        const act=el('div','dlact');
        const mkSel=(lab,opts,val,fn)=>{const l=el('label','dlsel',lab), s=el('select'); for(const [v,t] of opts){const o=el('option',null,t); o.value=v; s.append(o)} s.value=String(val); for(const o of s.options) if(o.value===s.value) o.setAttribute('selected',''); s.addEventListener('change',e=>fn(Number(e.target.value))); l.append(s); return l};
        act.append(mkSel('Volume',[[50,'50% of reps'],[60,'60% of reps'],[70,'70% of reps'],[80,'80% of reps']],A.dlVol||60,v=>{A.dlVol=v;changed()}));
        act.append(mkSel('Intensity',[[5,'−5 points'],[10,'−10 points'],[15,'−15 points'],[20,'−20 points']],A.dlInt||10,v=>{A.dlInt=v;changed()}));
        const b=el('button','btn'+(on?'':' primary'),on?'Remove deload':'Apply deload'); b.type='button'; b.addEventListener('click',()=>{if(on) delete A.deload[w.n]; else A.deload[w.n]=1; changed()});
        act.append(b); p.append(act);
      } else if(!on) p.append(el('span','note','Open Coach tools to apply it.'));
      sec.append(p);
    }
    if(coachOpen&&!w.off&&!w.sugDl&&!A.deload[w.n]){const b=el('button','btn sm dlmk','Make this a deload week'); b.type='button'; b.addEventListener('click',()=>{A.deload[w.n]=1;changed()}); sec.append(b)}
    const g=el('div','days');
    const TG=DV?dvTargets(weeks):[1,2,3,4,5,6,7].map(d=>({w,day:d}));
    for(const T of TG){
      if(!T.w){const c=el('article','day off'), dh=el('div','dh'), dn=el('div','dn',T.dt.toLocaleDateString(undefined,{weekday:'short'})); dn.append(el('small',null,fmt(T.dt))); dh.append(dn); c.append(dh,el('div','dsum off',T.msg)); g.append(c); continue}
      const w=T.w, day=T.day, SW=strWeek(w,weeks), PW=patWeek(w,weeks);
      const R=w.rows.filter(r=>r.day===day), ok=w.n+'-'+day, ord=A.order[ok]||[], dr=R.filter(r=>!r.plan).map((r,i)=>({r,i})).sort((a,b)=>{const x=ord.indexOf(a.r.k), y=ord.indexOf(b.r.k); return (x<0?1e3+a.i:x)-(y<0?1e3+b.i:y)}).map(o=>o.r), c=el('article','day'+(R.length?'':' off')+(coachOpen?' coach':''));
      const dt=dateFor(w.n,day); if(dt&&dt.toDateString()===today) c.classList.add('today');
      const dh=el('div','dh'), dn=el('div','dn',dt?dt.toLocaleDateString(undefined,{weekday:'short'}):'Day '+day);
      dn.append(el('small',null,dt?fmt(dt)+' \u00b7 Day '+day:'')); dh.append(dn);
      if(dr.length){const sc=dr.reduce((a,r)=>a+r.wv,0)/12, b=el('div','score'+(sc>=7?' hot':''),String(Math.round(sc))); b.style.setProperty('--h',Math.min(sc/12,1).toFixed(3)); b.title='Day score '+sc.toFixed(2); dh.append(b)}
      const sum=daySummary(dr,!!A.deload[w.n],w.uses?w.focus:''), dk=w.n+'-'+day, isC=compact&&!openDays.has(dk);
      c.append(dh);
      {const sm=el('div','dsum'+(dr.length?'':' off'),sum); c.append(sm)}
      {const ck=CHECKS[w.n+'-'+day]; if(ck&&ck.soreness!=null){const f=painFlag(ck.soreness,ck.pain); const x=el('div','dck'+(f?' flag':''),'Arm '+ck.soreness+'/10'+(ck.pain&&ck.pain!=='None'?' \u00b7 '+ck.pain:'')+(f?' \u00b7 flagged':'')); x.title='Pre-throw check-in'; c.append(x)}}
      {const tp=(TP[w.n]||[]).find(x=>x.day===day); if(tp){const x=el('div','dtest'); x.append(el('b',null,'Test day')); for(const k of tp.items){const v=TRES[w.n+'-'+day+'-'+k]; x.append(el('span',null,TDEF[k].label+(v!=null?': '+v+' '+TDEF[k].unit:'')))} c.append(x)}}
      if(compact){c.classList.add(isC?'cmp':'xp'); const t=el('button','dtog',isC?(dr.length?dr.length+' drills \u00b7 '+dr.reduce((a,r)=>a+r.sets*r.reps,0)+' throws':'Rest'):'Collapse'); t.type='button'; t.setAttribute('aria-expanded',String(!isC)); t.addEventListener('click',()=>{isC?openDays.add(dk):openDays.delete(dk); render()}); if(dr.length||!isC) c.append(t)}
      if(coachOpen&&!w.off){const mvb=el('div','dmv'); const l=el('button','btn sm mvb','\u2190'), r_=el('button','btn sm mvb','\u2192'); l.type=r_.type='button'; l.disabled=day===1; r_.disabled=day===7; l.title='Move this day earlier'; r_.title='Move this day later'; l.setAttribute('aria-label','Move '+(dt?dt.toLocaleDateString(undefined,{weekday:'long'}):'day '+day)+' one day earlier'); r_.setAttribute('aria-label','Move '+(dt?dt.toLocaleDateString(undefined,{weekday:'long'}):'day '+day)+' one day later'); l.addEventListener('click',()=>moveDay(w.n,day,day-1)); r_.addEventListener('click',()=>moveDay(w.n,day,day+1)); const gh=el('span','dgrip','\u22EE\u22EE'); gh.title='Drag to move this day'; gh.setAttribute('aria-hidden','true'); mvb.append(gh,l,r_); c.append(mvb);
        gh.addEventListener('pointerdown',()=>{c.draggable=true});
        c.addEventListener('dragstart',e=>{if(dragSrc) return; dayDrag={n:w.n,day}; c.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; try{e.dataTransfer.setData('text/plain','day'+day)}catch(_){}});
        c.addEventListener('dragend',()=>{c.draggable=false; c.classList.remove('dragging'); root.querySelectorAll('.dayover').forEach(x=>x.classList.remove('dayover')); dayDrag=null});
        c.addEventListener('dragover',e=>{if(!dayDrag||dayDrag.n!==w.n||dayDrag.day===day) return; e.preventDefault(); c.classList.add('dayover')});
        c.addEventListener('dragleave',e=>{if(!c.contains(e.relatedTarget)) c.classList.remove('dayover')});
        c.addEventListener('drop',e=>{if(!dayDrag||dayDrag.n!==w.n) return; e.preventDefault(); const f=dayDrag.day; dayDrag=null; moveDay(w.n,f,day)});
      }
      const pd=PW&&PW.days[day]; if(pd&&DV){dvPat(c,pd,dateFor(w.n,day))} else if(pd){const k='p'+w.n+'-'+day, b=el('button','dstr pat'+(selStr===k?' sel':'')); b.type='button'; b.setAttribute('aria-expanded',String(selStr===k)); b.append(el('b',null,'Patterning'),el('span',null,pd.blocks.map(x=>x.name).join(' + ')),el('small',null,'L'+PW.lv+pd.code+' \u00b7 '+pd.blocks.reduce((a,x)=>a+x.drills.length,0)+' drills')); b.addEventListener('click',()=>{selStr=selStr===k?null:k; render()}); c.append(b)}
      let sBtn=null; const sd=!DV&&SW&&SW.days[day]; if(sd){const b=sBtn=el('button','dstr'+(selStr===w.n+'-'+day?' sel':'')); b.type='button'; b.setAttribute('aria-expanded',String(selStr===w.n+'-'+day)); b.append(el('b',null,'Strength'),el('span',null,(sd.lift?sd.lift.title:sd.prep.title)||'Session'),el('small',null,[sd.prep?'Prep'+(sd.prep.min?' '+sd.prep.min.replace(/\s*\u00b7.*$/,''):''):'',sd.lift?sd.lift.rows.length+' lifts':''].filter(Boolean).join(' \u00b7 '))); b.addEventListener('click',()=>{selStr=selStr===w.n+'-'+day?null:w.n+'-'+day; render()}); }
      if(isC){if(coachOpen&&!w.off){const ab=el('button','addbtn','+ Add drill'); ab.type='button'; ab.addEventListener('click',()=>openAdd(w.n,day)); c.append(ab)} if(sBtn) c.append(sBtn); g.append(c); continue}
      {const lg=LOGS[w.n+'-'+day]; if(lg&&(lg.status||lg.note)){const x=el('div','alog '+(lg.status||'')); x.append(el('b',null,'Athlete: '+({done:'Done',partial:'Partly done',skipped:'Skipped'}[lg.status]||'Note'))); if(lg.note) x.append(el('span',null,lg.note)); x.title='Logged '+(lg.updated?new Date(lg.updated).toLocaleString():''); c.append(x)}}
      const lab=(R.find(r=>r.label)||{}).label;
      if(DV){const ul=el('div','dvsec dvbrief'); ul.append(el('div','dvh','Throwing')); if(!R.length) ul.append(el('div','dvr dvrest','Rest day')); else for(const r of dr){const li=el('div','dvr'); li.append(el('span','dvn',String(r.name).replace('*',' \u00b7 ')),el('b','dvd',r.sets+' \u00d7 '+r.reps+(r.rpe?' \u00b7 '+r.rpe+'%':''))); ul.append(li)} c.append(ul)}
      if(!R.length) c.append(el('div','offlabel','Off'));
      else{
        
        const ol=el('ol','drills');
        for(const r of dr){
          const li=el('li'), b=el('div','dr'+(r.swapped?' swapped':'')+(hiOn&&r.rpe>=90?' hi':''));
          {const nm=el(coachOpen&&!r.custom?'button':'span','nm',r.name), u=vid(r.name); if(coachOpen&&!r.custom){nm.type='button'; nm.className='nm nmb'; nm.title='Swap or remove this drill'; nm.addEventListener('click',()=>openSwap(r,weeks))} if(r.custom) b.classList.add('added'); if(u){const a=el('a','vid','\u25B6 Video'); a.href=u; a.target='_blank'; a.rel='noopener'; a.setAttribute('aria-label','Watch video: '+r.name); a.addEventListener('click',e=>e.stopPropagation()); if(coachOpen){b.append(nm,a)}else{nm.append(' ',a);b.append(nm)}} else b.append(nm)}
          {const sp=el('span','spec'); const cell=(k,v,c)=>{const x=el('span','sc'+(c?' '+c:'')); x.append(el('span','sk',k),el('span','sv',v)); sp.append(x)};
           const save=(f,v,raw)=>{ if(r.custom){r.custom[f]=raw; changed(); return} const e=Object.assign({},A.rowEdits[r.k]||{}); if(v==null) delete e[f]; else e[f]=v; if(Object.keys(e).length) A.rowEdits[r.k]=e; else delete A.rowEdits[r.k]; changed()};
           const ecell=(k,c,ctl,edited)=>{const x=el('span','sc ed'+(c?' '+c:'')+(edited?' chg':'')); x.append(el('span','sk',k+(edited?' \u00b7 edited':'')),ctl); sp.append(x)};
           if(coachOpen&&!r.dl){
             const bs=el('select','ein'); bs.setAttribute('aria-label','Ball for '+r.name); const opts=[...new Set([r.weight0||'Baseball',r.weight||'Baseball',...BALLS])];
             for(const o of opts){const x=el('option',null,o); x.value=o; bs.append(x)} bs.value=r.weight||'Baseball'; for(const o of bs.options) if(o.value===bs.value) o.setAttribute('selected','');
             bs.addEventListener('change',e=>save('weight',e.target.value===(r.weight0||'Baseball')?null:e.target.value,e.target.value));
             ecell('Ball','ball',bs,r.ed.weight!=null);
             const ri=el('input','ein'); ri.type='number'; ri.min=1; ri.max=100; ri.value=r.reps; ri.setAttribute('value',r.reps); ri.setAttribute('aria-label','Reps for '+r.name);
             ri.addEventListener('change',e=>{const n=Math.round(Number(e.target.value)); if(!n||n<1){render();return} save('reps',n===r.reps0?null:Math.min(100,n),Math.min(100,n))});
             const rw=el('span','ewrap'); if(r.sets>1) rw.append(el('span','eun',r.sets+' \u00d7')); rw.append(ri);
             ecell('Reps','',rw,r.ed.reps!=null);
             const ii=el('input','ein'); ii.type='number'; ii.min=40; ii.max=110; ii.step=5; ii.value=r.rpe; ii.setAttribute('value',r.rpe); ii.setAttribute('aria-label','Intensity for '+r.name);
             ii.addEventListener('change',e=>{const n=Math.round(Number(e.target.value)); if(!n){render();return} save('rpe',n===r.rpe0?null:Math.max(40,Math.min(110,n)),Math.max(40,Math.min(110,n)))});
             const iw=el('span','ewrap'); iw.append(ii,el('span','eun','%'));
             ecell('Intensity','int',iw,r.ed.rpe!=null);
           } else {
             cell('Ball',r.weight||'Baseball','ball'+(r.ed.weight!=null?' chg':'')); cell('Reps',(r.sets>1?r.sets+' \u00d7 ':'')+r.reps,r.ed.reps!=null?'chg':''); cell('Intensity',r.rpe+'%','int'+(r.ed.rpe!=null?' chg':''));
             if(coachOpen&&r.dl) sp.append(el('span','sc ball enote','Deload week: remove the deload to edit these values.'));
           }
           if(r.target) cell('Target',r.target,'tgt'); b.append(sp)}
          if(coachOpen&&dr.length>1){
            const idx=dr.indexOf(r), mv=(to)=>{const keys=dr.map(x=>x.k); const [m]=keys.splice(idx,1); keys.splice(to,0,m); A.order[ok]=keys; changed()};
            const bar=el('div','dragbar'); const h=el('span','dragh','\u22EE\u22EE'); h.title='Drag to reorder'; h.setAttribute('aria-hidden','true');
            const up=el('button','btn sm mvb','\u2191'); up.type='button'; up.disabled=idx===0; up.setAttribute('aria-label','Move '+r.name+' up'); up.addEventListener('click',()=>mv(idx-1));
            const dn=el('button','btn sm mvb','\u2193'); dn.type='button'; dn.disabled=idx===dr.length-1; dn.setAttribute('aria-label','Move '+r.name+' down'); dn.addEventListener('click',()=>mv(idx+1));
            bar.append(h,el('span','dragt'),up,dn); b.prepend(bar);
            h.addEventListener('pointerdown',()=>{li.draggable=true});
            li.addEventListener('dragstart',e=>{e.stopPropagation(); dragSrc={ok,idx}; li.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; try{e.dataTransfer.setData('text/plain',r.k)}catch(_){}} );
            li.addEventListener('dragend',()=>{li.draggable=false; li.classList.remove('dragging'); root.querySelectorAll('.dropb,.dropa').forEach(x=>x.classList.remove('dropb','dropa')); dragSrc=null});
            li.addEventListener('dragover',e=>{if(!dragSrc||dragSrc.ok!==ok) return; e.preventDefault(); e.stopPropagation(); const rc=li.getBoundingClientRect(), after=e.clientY>rc.top+rc.height/2; li.classList.toggle('dropa',after); li.classList.toggle('dropb',!after)});
            li.addEventListener('dragleave',()=>li.classList.remove('dropb','dropa'));
            li.addEventListener('drop',e=>{if(!dragSrc||dragSrc.ok!==ok) return; e.preventDefault(); e.stopPropagation(); const rc=li.getBoundingClientRect(), after=e.clientY>rc.top+rc.height/2; let to=idx+(after?1:0); const from=dragSrc.idx; if(from<to) to--; dragSrc=null; if(to!==from){const keys=dr.map(x=>x.k); const [m]=keys.splice(from,1); keys.splice(to,0,m); A.order[ok]=keys; changed()}});
          }
          if(r.custom){const sp0=b.querySelector('.spec'); b.insertBefore(el('span','addtag','Added by coach'),sp0)}
          if(coachOpen&&r.custom){const x=el('button','btn sm addrm','Remove added drill'); x.type='button'; x.addEventListener('click',()=>{A.added[w.n]=(A.added[w.n]||[]).filter(y=>y!==r.custom); if(!A.added[w.n].length) delete A.added[w.n]; changed()}); b.append(x)}
          li.append(b); ol.append(li);
        }
        c.append(ol);
        if(dr.length) c.append(el('div','dfoot',dr.reduce((a,r)=>a+r.sets*r.reps,0)+' throws'));
      }
      if(sBtn) c.append(sBtn);
      if(coachOpen&&!w.off){const ab=el('button','addbtn','+ Add drill'); ab.type='button'; ab.addEventListener('click',()=>openAdd(w.n,day)); c.append(ab)}
      g.append(c);
    }
    sec.append(g); if(DV){sec.replaceChildren(g); dvBar()}
    if(PW&&selStr&&selStr[0]==='p'&&selStr.slice(1).split('-')[0]==String(w.n)&&PW.days[+selStr.split('-')[1]]){const dd=+selStr.split('-')[1], pd=PW.days[dd], dt=dateFor(w.n,dd), bx=el('section','sses pat'), hh=el('div','shd');
      hh.append(el('h3',null,'Patterning \u00b7 '+(dt?dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}):'Day '+dd)), el('span','note',PW.focus+' \u00b7 Level '+PW.lv+(PW.auto?' (from throwing level and phase)':' (coach set)')));
      const x=el('button','btn sm','Close'); x.type='button'; x.addEventListener('click',()=>{selStr=null; render()}); hh.append(x); bx.append(hh);
      for(const b of pd.blocks){bx.append(el('div','sgrp',b.ch+' \u00b7 '+b.name+' \u00b7 '+b.label)); const t=el('ol','plst'); if(!b.drills.length) t.append(el('li','note','No drills listed for this block in the sheet.')); b.drills.forEach((d,i)=>{const li=el('li'); li.append(el('span','c',String(i+1))); if(d.video){const a=el('a',null,d.name); a.href=d.video; a.target='_blank'; a.rel='noopener'; li.append(a)} else li.append(el('span',null,d.name)); li.append(el('b','pds',d.dose)); t.append(li)}); bx.append(t)}
      sec.append(bx)}
    if(SW&&selStr&&selStr.split('-')[0]==String(w.n)&&SW.days[+selStr.split('-')[1]]){const dd=+selStr.split('-')[1], sd=SW.days[dd], dt=dateFor(w.n,dd), bx=el('section','sses'), hh=el('div','shd');
      hh.append(el('h3',null,'Strength \u00b7 '+(dt?dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}):'Day '+dd)), el('span','note',SW.name+' \u00b7 week '+SW.wk+' of '+SW.dur));
      const x=el('button','btn sm','Close'); x.type='button'; x.addEventListener('click',()=>{selStr=null; render()}); hh.append(x); bx.append(hh);
      const tbl=(g_,lab)=>{if(!g_) return; bx.append(el('div','sgrp',lab+(g_.title?' \u00b7 '+g_.title:'')+(g_.min?' \u00b7 '+g_.min:''))); const t=el('div','stbl'), h=el('div','str_ h'); for(const c of ['','Exercise','Method / cue','Sets \u00d7 reps']) h.append(el('span',null,c)); t.append(h); for(const r of g_.rows){const rr=el('div','str_'+(r.tier===2?' t2':'')); rr.append(el('span','c',r.code),el('span','ex',r.name),el('span','m',r.method),el('span','ds',r.dose)); t.append(rr)} bx.append(t)};
      tbl(sd.prep,'Prep (run first)'); tbl(sd.lift,'Lift'); if(SW.when) bx.append(el('p','note',SW.when)); sec.append(bx)}
    cal.append(sec);
  }
  $('pager').hidden=weeks.length<=1; $('pagerLbl').textContent='Week '+viewWeek+' of '+weeks.length;
  $('prevW').disabled=viewWeek<=1; $('nextW').disabled=viewWeek>=weeks.length;
  renderCoach(N,weeks.length);
  try{renderAlog()}catch(e){console.warn(e)}
}
function renderTimeline(weeks,N,mound,cw){
  const t=$('timeline'); t.hidden=!weeks.length; if(t.hidden) return;
  const bars=$('bars'); bars.textContent='';
  const max=Math.max(1,...weeks.map(w=>w.wv/12));
  let grp=null, bi=null;
  const go=w=>{viewWeek=w.n;render()};
  const mark=(k,d,cls)=>{const m=el('div','tmk '+cls); const ln=el('div','tml'); const lb=el('div','tmlab'); lb.append(el('span','tmk1',k),el('span','tmk2',d?d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):'Not set')); m.append(ln,lb); return m};
  bars.append(mark('Start',day0(A.startDate),'st'));
  for(const w of weeks){
    if(w.bi!==bi){bi=w.bi; grp=el('div','pg'+(w.mound?' mound':'')); grp.style.flexGrow=String(weeks.filter(x=>x.bi===w.bi).length); grp.style.minWidth=(weeks.filter(x=>x.bi===w.bi).length*26)+'px'; const row=el('div','pgbars'); grp.append(row, el('div','pglab',w.short+' \u00b7 '+weeks.filter(x=>x.bi===bi).length+' wk')); grp.title=w.phase; bars.append(grp)}
    const b=el('button','wb'+(w.n===viewWeek?' on':'')+(w.n===cw?' now':'')+(A.deload[w.n]?' dlon':w.sugDl?' dlsug':'')); b.type='button';
    b.setAttribute('aria-label','Week '+w.n+', '+w.phase+' week '+w.pw+': '+w.throws+' throws, week score '+(w.wv/12).toFixed(1)+', peak intensity '+w.peak+'%');
    b.title='Week '+w.n+' \u00b7 '+w.throws+' throws \u00b7 rolling score '+(w.roll==null?'—':w.roll.toFixed(1))+' \u00b7 baseline '+(w.base==null?'—':w.base.toFixed(1))+' \u00b7 peak '+w.peak+'%';
    const f=el('span','fill'); f.style.height=(w.off?2:Math.max(6,Math.round(w.wv/12/max*100)))+'%';
    const rr=w.roll==null?null:Math.round(w.roll); const st=el('span','stk'); st.append(el('span','tot',w.off?'':String(Math.round(w.wv/12))), el('span','bas',w.base==null?'':String(Math.round(w.base))), el('span','val'+(rr<0?' neg':rr>0?' pos':''),rr==null?'':String(rr))); const tr=el('span','trk'); tr.append(f); b.append(st, tr, el('span','wn',String(w.n)));
    b.addEventListener('click',()=>go(w)); grp.firstChild.append(b);
  }
  bars.append(mark('Competition',day0(A.compDate),'cp'));
  const map=$('map'); map.textContent=''; bi=null;
  const hr=el('div','mr mh'); hr.append(el('span','mw','Week'),el('span','md','Dates'),el('span','mp','Phase'));
  const hc=el('span','mc'); for(let d=1;d<=7;d++) hc.append(el('i',null,String(d))); hr.append(hc,el('span','mt2','Base'),el('span','mt2','Throws'),el('span','mt2','Rolling'),el('span','mt2','Peak')); map.append(hr);
  for(const w of weeks){
    const r=el('button','mr'+(w.n===viewWeek?' on':'')+(w.bi!==bi?' first':'')); r.type='button'; bi=w.bi;
    const d1=dateFor(w.n,1), d7=dateFor(w.n,7);
    r.append(el('span','mw',String(w.n)),el('span','md',d1?fmt(d1)+' \u2013 '+fmt(d7):''));
    {const mp=el('span','mp'+(w.mound?' mound':''),w.phase+(w.off?'':' \u00b7 wk '+w.pw)); if(w.uses) mp.append(el('small',null,w.focus)); if(A.deload[w.n]) mp.append(el('small','dlon','Deload applied')); else if(w.sugDl) mp.append(el('small','dlsug','Suggested deload week')); r.append(mp)}
    const c=el('span','mc');
    for(let d=1;d<=7;d++){const sc=w.rows.reduce((a,x)=>a+(x.day===d?(x.wv||0):0),0)/12, i=el('i',sc>=7?'hot':'',sc?String(Math.round(sc)):''); {const dd=dateFor(w.n,d); if(dd){mdBind(i,dd); i.setAttribute('aria-label','Week '+w.n+' day '+d+(sc?', day score '+Math.round(sc):', no throwing')+', show this day')}} i.style.setProperty('--h',Math.min(sc/12,1).toFixed(3)); c.append(i)}
    r.append(c,el('span','mt2',w.base==null?'':String(Math.round(w.base))),el('span','mt2',String(w.throws)),el('span','mt2'+(w.roll<0?' neg':''),w.roll==null?'':String(Math.round(w.roll))),el('span','mt2',w.peak?w.peak+'%':''));
    r.setAttribute('aria-label','Open week '+w.n+', '+w.phase); r.title=(PDESC[w.code]||'')+(w.uses&&FDESC[w.focus]?'\n\n'+w.focus+': '+FDESC[w.focus]:'');
    r.addEventListener('click',()=>go(w));
    map.append(r);
  }
  const s=$('tlSum'); s.textContent=''; const cd=day0(A.compDate);
  s.append(el('span',null,weeks.length+' weeks planned'+(cd?', competition '+cd.toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}):'')+'. '));
  {const sg=weeks.filter(w=>w.sugDl).map(w=>w.n), ap=weeks.filter(w=>A.deload[w.n]).map(w=>w.n); if(sg.length) s.append(el('span','dlsugt','Suggested deload week'+(sg.length>1?'s':'')+': '+sg.join(', ')+'. ')); if(ap.length) s.append(el('span','dlont','Deload applied: week'+(ap.length>1?'s ':' ')+ap.join(', ')+'. '));}
  if(isTL()){
    let cls='ok', m=mound+' weeks of mound time (Integrate, Refine, Engage).';
    if(mound<8){cls='warn'; m=mound+' weeks of mound time, short of the 8 to 12 week target.'} else if(mound>12){cls='warn'; m=mound+' weeks of mound time, above the 8 to 12 week target.'}
    s.append(el('b',cls,m));
    if(N!=null&&weeks.length<N) s.append(el('span','warn',' '+(N-weeks.length)+' week'+(N-weeks.length>1?'s are':' is')+' unassigned before competition.'));
    if(N!=null&&weeks.length>N) s.append(el('span','warn',' The plan runs '+(weeks.length-N)+' week'+(weeks.length-N>1?'s':'')+' past the competition date.'));
  }
}
function renderCoach(N,planned){
  $('coach').hidden=!coachOpen; $('coachBtn').textContent=coachOpen?'Close coach tools':'Coach tools';
  if(!coachOpen) return;
  try{renderApp()}catch(e){}
  fillStr();
  const l=L(), set=(id,v)=>{const e=$(id); if(root.activeElement!==e) e.value=v==null?'':v};
  const lv=$('fLevel'); lv.options[0].textContent='From throwing level'+(l.level?' (L'+l.level+')':' (none, uses L1)');
  set('fProg',A.program); set('fLevel',A.level||''); set('fFocus',A.focus); set('fDate',A.startDate); set('fShift',A.shift||0); set('fComp',A.compDate); set('fVelo',A.velo); set('fKneel',A.kneel); set('fLT',A.lt);
  $('fVelo').placeholder=l.velo?'TrackMan: '+l.velo:'Not on file'; $('fKneel').placeholder=l.kneel?'Program Board: '+l.kneel:'Not on file'; $('fLT').placeholder=l.lt?'Program Board: '+l.lt:'Not on file';
  const tl=isTL(), p=prog(); $('fLevel').disabled=$('fFocus').disabled=!(tl||p.uses);
  $('compWrap').hidden=!tl; $('phases').hidden=!tl;
  if(tl){
    const bl=blocks(), box=$('phaseRows'); box.textContent='';
    const edit=fn=>{const c=JSON.parse(JSON.stringify(blocks())); fn(c); A.blocks=c; A.phaseWeeks=null; changed()};
    {const hr=el('div','brow h'); hr.append(el('span',null,'Phase \u00b7 throwing focus \u00b7 patterning focus'),el('span',null,'Strength for this block')); box.append(hr)}
    {const h2=el('div','brow th2'), sp=(t,c)=>el('span',c||'c',t); h2.append(sp('','bn'),sp('Phase'),sp('Throwing focus'),...(A.pat.on?[sp('Patterning focus')]:[]),sp('Slide'),sp('Weeks','wk'),sp('','bx')); box.append(h2)}
    bl.forEach((b,i)=>{
      const row=el('div','brow'), sel=el('select'), num=el('input'), p=byCode(b.code), mx=16;
      sel.setAttribute('aria-label','Block '+(i+1)+' phase');
      for(const q of PH){const o=el('option',null,q.name);o.value=q.code;sel.append(o)}
      {const o=el('option',null,'Off week (no throwing)');o.value='OFF';sel.append(o)}
      for(const q of D.programs.filter(x=>!x.uses)){const o=el('option',null,q.name);o.value=q.code;sel.append(o)}
      sel.value=b.code; for(const o of sel.options) if(o.value===b.code) o.setAttribute('selected',''); sel.addEventListener('change',e=>edit(c=>{c[i].code=e.target.value; }));
      const fs=el('select'); fs.setAttribute('aria-label','Block '+(i+1)+' focus'); for(const f of D.focus) fs.append(el('option',null,f));
      fs.value=b.focus||A.focus; for(const o of fs.options) if(o.value===fs.value) o.setAttribute('selected',''); fs.disabled=!(p&&p.uses); fs.className='fsel'; fs.addEventListener('change',e=>edit(c=>{c[i].focus=e.target.value}));
      const ss=el('select'); ss.className='ssel'; ss.setAttribute('aria-label','Block '+(i+1)+' training day slide');
      for(const [v,t] of [['','Default slide'],['-3','3 days earlier'],['-2','2 days earlier'],['-1','1 day earlier'],['0','As written'],['1','1 day later'],['2','2 days later'],['3','3 days later']]){const o=el('option',null,t); o.value=v; ss.append(o)}
      ss.value=b.shift==null?'':String(b.shift); for(const o of ss.options) if(o.value===ss.value) o.setAttribute('selected','');
      ss.disabled=b.code==='OFF'; ss.addEventListener('change',e=>edit(c=>{const v=e.target.value; if(v==='') delete c[i].shift; else c[i].shift=Number(v)}));
      num.type='number'; num.min=1; num.max=mx; num.value=b.weeks; num.setAttribute('value',b.weeks); num.setAttribute('aria-label','Block '+(i+1)+' weeks');
      num.addEventListener('change',e=>edit(c=>{c[i].weeks=Math.max(1,Math.min(mx,Math.round(Number(e.target.value)||1)))}));
      const mk=(t,lb,fn,dis)=>{const x=el('button','btn sm',t); x.type='button'; x.setAttribute('aria-label',lb); x.disabled=!!dis; x.addEventListener('click',fn); return x};
      const th=el('div','bth'), sb=el('div','bst');
      th.append(el('span','bn',String(i+1)),sel,fs,ss,num,el('span','note','wk'),
        mk('\u2191','Move block '+(i+1)+' earlier',()=>edit(c=>{const t=c[i-1];c[i-1]=c[i];c[i]=t}),i===0),
        mk('\u2193','Move block '+(i+1)+' later',()=>edit(c=>{const t=c[i+1];c[i+1]=c[i];c[i]=t}),i===bl.length-1),
        mk('\u00d7','Remove block '+(i+1),()=>edit(c=>{c.splice(i,1)})));
      {const pk=strPick(), off=b.code==='OFF'||!A.str.on, mkS=(lab,opts,val,fn)=>{const s=el('select'); s.setAttribute('aria-label','Block '+(i+1)+' '+lab); for(const [v,t] of opts){const o=el('option',null,t); o.value=v; s.append(o)} s.value=val||''; for(const o of s.options) if(o.value===s.value) o.setAttribute('selected',''); s.disabled=off; s.addEventListener('change',e=>edit(c=>fn(c[i],e.target.value))); return s};
       const autoSplit=SSPLIT[SPLITOF(b.code,A.days)].label;
       sb.append(
         mkS('strength program',[['','Program: '+SFAM[pk.fam]+(A.str.fam?'':' (auto)')],...Object.entries(SFAM).map(([k,t])=>[k,t])],b.sFam==='none'?'':b.sFam,(c,v)=>{if(v) c.sFam=v; else delete c.sFam}),
         mkS('strength phase',[['','Phase: P'+pk.ph+(A.str.ph?'':' (auto)')],['1','P1'],['2','P2'],['3','P3']],b.sPh,(c,v)=>{if(v) c.sPh=v; else delete c.sPh}),
         mkS('strength split',[['','Split: '+autoSplit+' (auto)'],...Object.entries(SSPLIT).map(([k,s])=>[k,s.label])],b.sSplit,(c,v)=>{if(v) c.sSplit=v; else delete c.sSplit}));
       if(!off&&SDATA&&b.sFam!=='none'){const f=strFor(b.sFam||pk.fam,b.sPh||pk.ph,b.sSplit||SPLITOF(b.code,A.days)); sb.append(el('span','bsn',f?f.lift.replace(/\u2022/g,' \u00b7 ')+(f.prep?' + prep':'')+(f.sk!==(b.sSplit||SPLITOF(b.code,A.days))?' \u00b7 closest available split':''):'No matching strength program'))}
       if(off&&b.code==='OFF') sb.append(el('span','bsn','Off week: no strength'))}
      {const off=b.code==='OFF'||!A.pat.on, s=el('select'); s.setAttribute('aria-label','Block '+(i+1)+' patterning level'); const tl=Math.max(1,Math.min(3,Number(lvl())||1)), au=PAT&&PAT.prog[b.code]?PAT.prog[b.code][tl]:'';
        for(const [v,t] of [['','Patterning: '+(au?'L'+au+' (auto)':PAT?'none for this phase':'auto')],['1','Patterning L1'],['2','Patterning L2'],['3','Patterning L3'],['none','No patterning']]){const o=el('option',null,t); o.value=v; s.append(o)} s.value=b.pLv||''; for(const o of s.options) if(o.value===s.value) o.setAttribute('selected',''); s.disabled=off; s.addEventListener('change',e=>edit(c=>{if(e.target.value) c[i].pLv=e.target.value; else delete c[i].pLv})); 
        const fs2=el('select'); fs2.setAttribute('aria-label','Block '+(i+1)+' patterning focus'); const tf=A.pat.foc||((D.programs.find(p=>p.code===b.code)||{}).uses?(b.focus||A.focus):'')||'Global'; for(const [v,t] of [['','Pattern focus: '+tf+(A.pat.foc?' (default)':' (matches throwing)')],...(PAT?PAT.foc:D.focus).map(f=>[f,'Pattern: '+f])]){const o=el('option',null,t); o.value=v; fs2.append(o)} fs2.value=b.pFoc||''; for(const o of fs2.options) if(o.value===fs2.value) o.setAttribute('selected',''); fs2.disabled=off; fs2.addEventListener('change',e=>edit(c=>{if(e.target.value) c[i].pFoc=e.target.value; else delete c[i].pFoc})); fs2.classList.add('pfs'); s.classList.add('pfs'); fs.after(fs2)}
      row.append(th,sb);
      box.append(row);
    });
    $('sugBtn').hidden=!(A.blocks||A.phaseWeeks)||N==null;
    $('phaseNote').textContent=(N==null?'Add a start and competition date for a suggested stack, or add blocks by hand. ':'Stacked '+planned+' of '+N+' weeks before competition. ')+'Blocks can run 1 to 16 weeks. A block shorter than its program uses the first weeks; a longer block repeats the program weeks in order (week 5 repeats week 1).'+(N>32&&!A.blocks?' The full progression is 32 weeks, so '+(N-32)+' weeks are left over; add off weeks, repeat a phase, or move the start date.':'');
  }
  const sw=$('swaps'); sw.textContent='';
  const chip=(txt,fn)=>{const c=el('span','chip'); c.append(el('span',null,txt)); const x=el('button',null,'\u00d7'); x.type='button'; x.setAttribute('aria-label','Remove swap: '+txt); x.addEventListener('click',fn); c.append(x); sw.append(c)};
  for(const k of Object.keys(A.swaps)) chip(k+' \u2192 '+A.swaps[k],()=>{delete A.swaps[k];changed()});
  for(const k of Object.keys(A.rowSwaps)){const m=k.match(/^(?:(.+):)?(\d+)-(\d+)-(\d+)$/)||[]; chip((m[1]?m[1]+' ':'')+'week '+m[2]+', day '+m[3]+', slot '+m[4]+' \u2192 '+A.rowSwaps[k],()=>{delete A.rowSwaps[k];changed()})}
  for(const k of Object.keys(A.rowEdits)){const m=k.match(/^(?:(.+):)?(\d+)-(\d+)-(\d+)$/)||[]; const e=A.rowEdits[k], parts=[e.weight!=null?e.weight:null,e.reps!=null?e.reps+' reps':null,e.rpe!=null?e.rpe+'%':null].filter(Boolean); chip('Edited '+(m[1]?m[1]+' ':'')+'week '+m[2]+', day '+m[3]+', slot '+m[4]+': '+parts.join(', '),()=>{delete A.rowEdits[k];changed()})}
  for(const k of Object.keys(A.removed)){const m=k.match(/^(?:(.+):)?(\d+)-(\d+)-(\d+)$/)||[]; const nm=typeof A.removed[k]==='string'?A.removed[k]:'drill'; chip('Removed: '+nm+' ('+(m[1]?m[1]+' ':'')+'week '+m[2]+', day '+m[3]+')',()=>{delete A.removed[k];changed()})}
  {const box=$('libList'); box.textContent=''; const l=loadCustom(); if(!l.length) box.append(el('span','note','No custom drills yet.'));
   for(const d of l){const c=el('span','chip'); const t=el('button','libn',d.name+(d.video?'  \u25B6':'')); t.type='button'; t.title='Edit '+d.name; t.addEventListener('click',()=>openAdd(null,null,d)); const x=el('button',null,'\u00d7'); x.type='button'; x.setAttribute('aria-label','Delete '+d.name); x.addEventListener('click',()=>{saveCustom(loadCustom().filter(y=>y.name!==d.name)); fillDrills(); render()}); c.append(t,x); box.append(c)}}
  $('delBtn').hidden=!saved;
}
let swapRow=null;
function openSwap(r,weeks){swapRow=r; $('dlgFrom').textContent=r.base+(r.swapped?' (now '+r.name+')':''); $('dlgTo').value=''; let n=0; for(const w of weeks) for(const x of w.rows) if(x.base===r.base) n++; $('dlgAll').textContent='Swap every use ('+n+')'; $('dlg').showModal(); $('dlgTo').focus()}
function closeDlg(){$('dlg').close()}
$('dlgAll').addEventListener('click',()=>{const v=$('dlgTo').value.trim(); if(!v)return; A.swaps[swapRow.base]=v; delete A.rowSwaps[swapRow.k]; closeDlg(); changed()});
$('dlgOne').addEventListener('click',()=>{const v=$('dlgTo').value.trim(); if(!v)return; A.rowSwaps[swapRow.k]=v; closeDlg(); changed()});
$('dlgReset').addEventListener('click',()=>{delete A.swaps[swapRow.base]; delete A.rowSwaps[swapRow.k]; closeDlg(); changed()});
$('dlgCancel').addEventListener('click',closeDlg);
let addTo=null, dragSrc=null, dayDrag=null, selStr=null;
function openAdd(n,day,edit){addTo=n==null?{lib:true,edit}:{n,day}; const dt=n==null?null:dateFor(n,day);
  root.querySelector('#dlgAdd h4').textContent=n==null?(edit?'Edit custom drill':'Create new drill'):'Add drill';
  $('addFrom').textContent=n==null?'Saved to the drill library on this browser. Ball, sets, reps and intensity become its defaults.':'Week '+n+', '+(dt?dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}):'day '+day);
  $('addOk').textContent=n==null?'Save drill':'Add to this day'; $('addDelLib').hidden=!edit;
  const c=edit||{}; $('addName').value=c.name||''; $('addVid').value=c.video||''; $('addBall').value=c.ball||'Baseball'; $('addSets').value=c.sets||1; $('addReps').value=c.reps||10; $('addRpe').value=c.rpe||70;
  addNote(); $('dlgAdd').showModal(); $('addName').focus()}
function addNote(){const n=$('addName').value.trim(); $('addNew').hidden=!n||libHas(n)||(addTo&&addTo.edit);}
$('addName').addEventListener('input',()=>{addNote(); const n=$('addName').value.trim().toLowerCase(), cd=loadCustom().find(d=>d.name.toLowerCase()===n); if(cd&&!(addTo&&addTo.edit)){$('addBall').value=cd.ball||'Baseball'; $('addSets').value=cd.sets||1; $('addReps').value=cd.reps||10; $('addRpe').value=cd.rpe||70; $('addVid').value=cd.video||''}});
$('addDelLib').addEventListener('click',()=>{if(!addTo||!addTo.edit) return; saveCustom(loadCustom().filter(d=>d.name!==addTo.edit.name)); fillDrills(); $('dlgAdd').close(); render()});
{const s=$('addBall'); for(const o of BALLS){const x=el('option',null,o); x.value=o; s.append(x)} s.value='Baseball'}
$('addCancel').addEventListener('click',()=>$('dlgAdd').close());
$('addOk').addEventListener('click',()=>{const name=$('addName').value.trim(); if(!name){$('addName').focus();return}
  const cl=(v,a,b,d)=>{const n=Math.round(Number(v)); return isNaN(n)||!n?d:Math.max(a,Math.min(b,n))};
  const vu=$('addVid').value.trim(), vOk=/^https?:\/\//i.test(vu)?vu:'';
  const spec={name,ball:$('addBall').value,sets:cl($('addSets').value,1,10,1),reps:cl($('addReps').value,1,100,10),rpe:cl($('addRpe').value,40,110,70),video:vOk};
  if(addTo.lib||!libHas(name)||loadCustom().some(d=>d.name.toLowerCase()===name.toLowerCase())){const l=loadCustom().filter(d=>d.name.toLowerCase()!==name.toLowerCase()&&(!addTo.edit||d.name!==addTo.edit.name)); if(addTo.lib||!libHas(name)) l.push(spec); else {const old=loadCustom().find(d=>d.name.toLowerCase()===name.toLowerCase()); l.push(Object.assign({},old,vOk?{video:vOk}:{}))} saveCustom(l); fillDrills()}
  if(addTo.lib){$('dlgAdd').close(); render(); return}
  const x={id:Date.now().toString(36),day:permOf(addTo.n)[addTo.day-1],name,weight:spec.ball,sets:spec.sets,reps:spec.reps,rpe:spec.rpe};
  (A.added[addTo.n]=A.added[addTo.n]||[]).push(x); $('dlgAdd').close(); changed()});
$('addForm').addEventListener('submit',e=>{e.preventDefault(); $('addOk').click()});
$('dlgDel').addEventListener('click',()=>{A.removed[swapRow.k]=swapRow.name; delete A.rowSwaps[swapRow.k]; closeDlg(); changed()});
$('dlgForm').addEventListener('submit',e=>{e.preventDefault(); $('dlgAll').click()});
// ---- 3-day calendar (data-view="days"): the next three dates of this plan, editable in place ----
window.__vdv=window.__vdv||{}; const VS=(window.__vdv[host.dataset.lane||'']=window.__vdv[host.dataset.lane||'']||{off:0,edit:false,open:[]}); let dvOff=VS.off, dvEdit=VS.edit, edCtx=null;
const tidyN=x=>String(x||'').replace(/\s*⊃\s*superset/g,'').replace(/\s*\[[^\]]*\]\s*$/,'').trim();
const pdt=x=>{const d=new Date(String(x||'')); return isNaN(d)?null:d};
function dvDates(){const o=[]; for(let i=0;i<DVN;i++){const d=new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+dvOff+i); o.push(d)} return o}
function dvTargets(weeks){const base=day0(A.startDate); return dvDates().map(dt=>{ if(!base) return {w:null,dt,msg:'Set a start date in the Programming tab.'}; const off=Math.round((dt-base)/864e5), w=off>=0?weeks[Math.floor(off/7)]:null; return w?{w,day:off%7+1,dt}:{w:null,dt,msg:off<0?'Plan starts '+fmt(base)+'.':'Past the end of this plan.'}})}
function boardObj(){try{return JSON.parse(host.dataset.board||'{}')||{}}catch(e){return {}}}
function dvBar(){
  const bar=$('dvbar'); if(!bar) return; bar.hidden=false; bar.textContent=''; {const wr=root.querySelector('.wrap'); if(wr) wr.classList.toggle('editing',!!coachOpen)}
  const ds=dvDates(), t=el('div','dvt');
  t.append(el('b',null,'Training plan'), el('span',null,fmt(ds[0])+' to '+fmt(ds[ds.length-1])));
  const a=el('div','acts2'), mk=(txt,fn,cls,dis,lab)=>{const b=el('button','btn sm'+(cls?' '+cls:''),txt); b.type='button'; if(lab) b.setAttribute('aria-label',lab); b.disabled=!!dis; b.addEventListener('click',fn); return b};
  a.append(mk('\u2190',()=>{dvOff-=DVN; VS.off=dvOff; render()},'',false,'Previous '+DVN+' days'), mk(dvOff?'Back to today':'Today',()=>{dvOff=0; VS.off=0; render()},'',!dvOff,'Back to today'), mk('\u2192',()=>{dvOff+=DVN; VS.off=dvOff; render()},'',false,'Next '+DVN+' days'));
  a.append(mk(dvEdit?'Done editing':'Edit program',()=>{dvEdit=!dvEdit; VS.edit=dvEdit; coachOpen=dvEdit; if(!dvEdit){liftOpen.clear(); VS.open=[]} render()},dvEdit?'primary':'',false));
  const st=el('span','note'); st.id='dvst'; st.textContent=$('status')?$('status').textContent:''; a.append(st); bar.append(t,a);
}
// per-date edits: A[kind][YYYY-MM-DD] = {r:{rowKey:{name,dose}}, x:[removed rowKeys], a:[{id,name,dose,grp}]}
function edStore(kind,dk){const S=(A[kind]=A[kind]||{}); return S[dk]=S[dk]||{}}
function edApply(kind,dk,base,gf){const E=((A[kind]||{})[dk])||{}, out=[];
  for(const r of base){ if((E.x||[]).includes(r.k)) continue; const o=(E.r||{})[r.k]; out.push(o?Object.assign({},r,{name:o.name||r.name,dose:o.dose!=null?o.dose:r.dose,edited:1}):r)}
  for(const a of (E.a||[])) if(gf===undefined||a.grp===gf) out.push({k:'+'+a.id,name:a.name,dose:a.dose,grp:a.grp,added:1});
  return out}
function edRow(kind,dk,r){const li=el('div','dvr'+(r.edited?' chg':'')+(r.added?' added':'')+(r.info?' info':'')), nm=el('span','dvn');
  nm.textContent=r.name;
  li.append(nm,el('b','dvd',r.dose||'')); if(coachOpen&&!r.info){const b=el('button','btn sm','Edit'); b.type='button'; b.addEventListener('click',()=>openEd({kind,dk,row:r})); li.append(b)} return li}
function openEd(ctx){edCtx=ctx; const r=ctx.row, d=pdt(ctx.dk+'T12:00:00');
  $('edTitle').textContent=ctx.add?'Add exercise':'Edit exercise'; $('edFrom').textContent=(d?d.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}):ctx.dk)+' · this date only'+(r&&r.grp?' · '+r.grp:'');
  const gs=$('edGrp'); gs.textContent=''; for(const g of (ctx.grps||[])){const o=el('option',null,g); o.value=g; gs.append(o)} gs.value=ctx.grp||(ctx.grps||[])[0]||''; $('edGrpL').hidden=!(ctx.add&&(ctx.grps||[]).length>1);
  $('edName').value=r?r.name:''; $('edDose').value=r?(r.dose||''):''; $('edReset').hidden=!(r&&!r.added&&r.edited); $('edDel').hidden=!r;
  const dl=$('edList'); dl.textContent=''; const names=new Set(); if(ctx.kind==='strEd'){for(const n of ((SDATA&&SDATA.ex)||[])) names.add(tidyN(n))} else {for(const k in ((PAT&&PAT.blocks)||{})) for(const n of PAT.blocks[k].drills) names.add(n.replace(/\s*\(\s*\d+\s*[x×]\s*\d+[^)]*\)\s*$/i,'').trim())}
  for(const n of [...names].slice(0,2500)){const o=el('option'); o.value=n; dl.append(o)}
  $('dlgE').showModal(); $('edName').focus()}
$('edCancel').addEventListener('click',()=>$('dlgE').close());
$('edForm').addEventListener('submit',e=>{e.preventDefault(); $('edOk').click()});
$('edOk').addEventListener('click',()=>{const name=$('edName').value.trim(); if(!name){$('edName').focus();return} const dose=$('edDose').value.trim(), {kind,dk,row,add}=edCtx, E=edStore(kind,dk);
  if(add) (E.a=E.a||[]).push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),name,dose,grp:$('edGrp').value||edCtx.grp||''});
  else if(row.added){const a=(E.a||[]).find(x=>'+'+x.id===row.k); if(a){a.name=name; a.dose=dose}}
  else (E.r=E.r||{})[row.k]={name,dose};
  $('dlgE').close(); changed()});
$('edReset').addEventListener('click',()=>{const {kind,dk,row}=edCtx, E=edStore(kind,dk); if(E.r) delete E.r[row.k]; E.x=(E.x||[]).filter(k=>k!==row.k); $('dlgE').close(); changed()});
$('edDel').addEventListener('click',()=>{const {kind,dk,row}=edCtx, E=edStore(kind,dk); if(row.added) E.a=(E.a||[]).filter(x=>'+'+x.id!==row.k); else {(E.x=E.x||[]).push(row.k); if(E.r) delete E.r[row.k]} $('dlgE').close(); changed()});
function dvPat(c,pd,dt){
  const dk=ymd(dt), base=[]; pd.blocks.forEach(b=>b.drills.forEach((d,i)=>base.push({k:b.ch+':'+i,name:d.name,dose:d.dose,video:d.video,grp:b.ch+' · '+b.name})));
  const rows=edApply('patEd',dk,base), box=el('div','dvsec'); box.append(el('div','dvh','Patterning · '+pd.blocks.map(b=>b.ch).join('+')));
  let last=null; for(const r of rows){ const gl=r.added?'Added':r.grp; if(gl!==last){last=gl; box.append(el('div','dvg',gl))} box.append(edRow('patEd',dk,r)) }
  if(coachOpen){const ab=el('button','addbtn','+ Add patterning drill'); ab.type='button'; ab.addEventListener('click',()=>openEd({kind:'patEd',dk,add:true,grp:'Added',grps:['Added']})); box.append(ab)}
  c.append(box)}
function strEdX(x,dt){ if(DV||!x||!dt) return x; const LD=A.laneDays||{}, dk=ymd(dt), L=LD.lift&&LD.lift[dk], P=LD.prep&&LD.prep[dk]; if(!L&&!P) return x;
  const dose=r=>[r.sets?r.sets+'x'+(r.reps||''):(r.reps||''),r.int?'@ '+r.int:'',r.tempo?'('+r.tempo+')':''].filter(Boolean).join(' ');
  const mk=(o,old)=>o?((o.rows.length||o.title)?{title:o.title,min:(old&&old.min)||'',rows:o.rows.filter(r=>!r.info).map(r=>({code:r.slot||'+',name:r.name,dose:dose(r),tier:1,method:''}))}:null):old;
  return Object.assign({},x,{lift:mk(L,x.lift),prep:mk(P,x.prep)})}
function patEdX(pt,dt){ if(!pt||!dt) return pt; const o=((A.laneDays||{}).pat||{})[ymd(dt)]; if(!o) return pt; const rows=o.rows.filter(r=>!r.info); if(!rows.length) return null; const by=[];
  for(const r of rows){let b=by.find(x=>x.ch===r.blk); if(!b){b={ch:r.blk,label:r.blk,name:PATN[r.blk]||'Patterning',drills:[]}; by.push(b)} b.drills.push({name:r.name,dose:(r.sets?r.sets+' \u00d7 ':'')+(r.reps||''),video:''})}
  return Object.assign({},pt,{blocks:by})}
// ---- Day lanes: prep, patterning, throwing, lifting, corrective (uniform boxes, drag, copy, delete) ----
let liftOpen=new Set(VS.open), liftDrag=null, PENDF=null, QUIET=false, DVW=0;
const DVN=6;   // days on the dashboard calendar
const rid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const liftName=n=>String(n||'').replace(/^[^—]*\s—\s/,'').trim();
const abbrFocus=t=>String(t||'').replace(/\s*\/\s*/g,'/').replace(/\[Vertical\]/g,'[V]').replace(/\[Horizontal\]/g,'[H]');
const PATN={A:'Positional Control',B:'Dynamic Stability',C:'Dynamic Sequencing',D:'Dynamic Power'};
const dayNo=dt=>{const st=day0(A.startDate); if(!st) return null; const off=Math.round((dt-st)/864e5); return off>=0?off%7+1:null};
function liftParse(dose){
  let t=String(dose||'').trim(), tempo='', speed='', inten='', cl='';
  // [0.68-0.77 m/s] is a speed band, [3x2] is a cluster (clusters of reps inside a set)
  t=t.replace(/\[([^\]]*)\]/,(m,a)=>{a=a.trim(); if(/^\d+\s*x\s*\d+$/i.test(a)){cl=a.replace(/\s+/g,''); return '{CL}'} speed=a; return ''}).replace(/\((\d+:\d+:\d+:\d+)\)/,(m,a)=>{tempo=a; return ''}).trim();
  t=t.replace(/@\s*([\d.]+\s*[%a-z]*)\s*$/i,(m,a)=>{inten=a.replace(/\s+/g,''); return ''}).trim();
  if(cl){const c=t.match(/^([\d+]+)\s*[x×]\s*\{CL\}/i); if(c) return {sets:c[1],reps:'['+cl+']',int:inten,tempo:tempo||speed}}
  const m=t.match(/^([\d+]+)\s*[x×]\s*(.+)$/i);
  return {sets:m?m[1]:'',reps:m?m[2].trim():t,int:inten,tempo:tempo||speed};
}
function stSlot(dt){const st=day0(A.startDate); if(!st||!SDATA) return null; const off=Math.round((dt-st)/864e5); if(off<0) return null; const n=Math.floor(off/7)+1, d=off%7+1, sd=svDays(n), e=sd.days[d-1]; return {d,x:e&&e.x,meta:sd.meta}}
// what the program says for a date, per lane
const LB={
  lift(dt){const s=stSlot(dt); if(!s) return null; const {d,x,meta}=s;
    if(!x||!x.lift) return {day:d,rest:true,fam:'',ph:'',title:'',rows:[]};
    return {day:d,rest:false,fam:meta?meta.fam:'',ph:meta?meta.ph:'',title:x.lift.title||'',rows:x.lift.rows.map(r=>Object.assign({id:rid(),slot:r.code,blk:String(r.code).replace(/\d+$/,'')||r.code,name:liftName(r.name),method:r.method||''},liftParse(r.dose)))}},
  prep(dt){const s=stSlot(dt); if(!s) return null; const {d,x,meta}=s;
    if(!x||!x.prep) return {day:d,rest:true,fam:'',ph:'',title:'',rows:[]};
    return {day:d,rest:false,fam:meta?meta.fam:'',ph:meta?meta.ph:'',title:String(x.prep.title||'').replace(/^PREP\s*·\s*/i,''),rows:x.prep.rows.map(r=>Object.assign({id:rid(),slot:r.code,blk:String(r.code).replace(/\d+$/,'')||r.code,name:tidyN(r.name),method:r.method||''},liftParse(r.dose)))}},
  throw(dt){const st=day0(A.startDate), weeks=planWeeks(); if(!st||!weeks.length) return null;
    const off=Math.round((dt-st)/864e5); if(off<0) return null; const w=weeks[Math.floor(off/7)]; if(!w) return {out:true,rest:true,rows:[]};
    const day=off%7+1, R=w.off?[]:weekRows(w).filter(r=>r.day===day&&!r.plan), ord=A.order[w.n+'-'+day]||[];
    const dr=R.map((r,i)=>({r,i})).sort((a,b)=>{const x=ord.indexOf(a.r.k), y=ord.indexOf(b.r.k); return (x<0?1e3+a.i:x)-(y<0?1e3+b.i:y)}).map(o=>o.r);
    return {day,rest:!dr.length,ph:w.off?(w.deload?'DELOAD':'OFF'):w.code,lv:lvl(),title:dr.length?daySummary(dr,!!A.deload[w.n],w.uses?w.focus:''):'Rest day',
      rows:dr.map((r,i)=>({id:rid(),slot:String(i+1),blk:'T',name:String(r.name).replace('*',' · '),sets:String(r.sets||''),reps:String(r.reps||''),int:r.rpe?r.rpe+'%':'',ball:r.weight||'',target:r.target||''}))}},
  pat(dt){const st=day0(A.startDate), weeks=planWeeks(); if(!st||!weeks.length) return null;
    const off=Math.round((dt-st)/864e5); if(off<0) return null; const w=weeks[Math.floor(off/7)]; if(!w) return {out:true,rest:true,rows:[]};
    if(!A.pat.on) return {day:off%7+1,rest:true,ph:'',lv:lvl(),title:'No patterning',rows:[]};
    if(!PAT) return {loading:true,rest:true,rows:[]};
    const day=off%7+1, PW=patWeek(w,weeks), pd=PW&&PW.days[day], rows=[];
    if(pd) for(const b of pd.blocks) for(const q of b.drills){const m=String(q.dose||'').match(/^(\d+)\s*[x×]\s*(.+)$/); rows.push({id:rid(),slot:b.ch,blk:b.ch,name:q.name,sets:m?m[1]:'',reps:m?m[2].trim():String(q.dose||''),video:q.video||''})}
    return {day,rest:!rows.length,ph:w.off?(w.pcode||'OFF'):w.code,lv:PW?PW.lv:lvl(),title:rows.length?(PW.focus||''):'No patterning',rows}},
  corr(dt){const bd=boardObj(), rows=[]; let arm='', mob='';
    for(const [lab,prog,s0,e0] of [['Arm care',bd.ac,bd.acs,bd.ace],['Mobility',bd.mob,bd.mobs,bd.mobe]]){ if(!prog) continue; const a=pdt(s0), b=pdt(e0); if(a&&dt<new Date(a.getFullYear(),a.getMonth(),a.getDate())) continue; if(b&&dt>new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59)) continue;
      rows.push({id:rid(),slot:'',blk:'i',name:lab,info:prog}); const p=String(prog).split('•').map(x=>x.trim()); if(lab==='Arm care') arm=['AC',p[1],p[2]].filter(Boolean).join(' '); else mob=['MOB',p[1]].filter(Boolean).join(' ')}
    return {day:dayNo(dt),rest:!rows.length,title:[arm,mob].filter(Boolean).join(' • ')||'No corrective',rows}}
};
const LCFG={
  prep:{name:'Prep',sub:bd=>bd.lift,none:'No prep',fields:[['sets','Sets'],['reps','Reps'],['int','Intensity'],['tempo','Tempo']]},
  pat:{name:'Patterning',sub:bd=>bd.pat,none:'No patterning',fields:[['sets','Sets'],['reps','Reps']]},
  throw:{name:'Throwing',sub:bd=>bd.thr,none:'Rest day',fields:[['sets','Sets'],['reps','Reps'],['int','Intensity'],['ball','Ball']]},
  lift:{name:'Lifting',sub:bd=>bd.lift,none:'Rest day',fields:[['sets','Sets'],['reps','Reps'],['int','Intensity'],['tempo','Tempo']]},
  corr:{name:'Corrective',sub:bd=>[bd.ac,bd.mob].filter(Boolean).join(' · '),none:'No corrective',fields:[['sets','Sets'],['reps','Reps']]}
};
const LANES=['prep','pat','throw','lift','corr'];
function lnHead(l,d){
  if(l==='lift'||l==='prep') return d.rest&&!d.title?LCFG[l].none:[d.fam,d.ph?'P'+d.ph:'',l==='lift'?abbrFocus(d.title):d.title].filter(Boolean).join(' • ')||'Custom day';
  if(l==='throw'||l==='pat') return [d.ph,d.lv?'L'+d.lv:'',d.title].filter(Boolean).join(' • ')||'Custom day';
  return d.title||'Custom day';
}
const LS=l=>{A.laneDays=A.laneDays||{}; return A.laneDays[l]=A.laneDays[l]||{}};
function lnDay(l,dt){
  const dk=ymd(dt), o=LS(l)[dk], b=LB[l](dt);
  if(o) return {dk,custom:true,out:false,loading:false,day:b&&b.day?b.day:dayNo(dt),fam:o.fam,ph:o.ph,lv:o.lv,title:o.title,rows:o.rows,rest:!o.rows.some(r=>!r.info)&&(l!=='corr'||!o.rows.length)};
  return b?Object.assign({dk,custom:false},b):null;
}
const lnPack=d=>d?{fam:d.fam,ph:d.ph,lv:d.lv,title:d.title,rows:d.rows.map(r=>Object.assign({},r))}:{fam:'',ph:'',lv:'',title:'',rows:[]};
function lnEnsure(l,dt){const S=LS(l), dk=ymd(dt); if(!S[dk]) S[dk]=lnPack(lnDay(l,dt)); return S[dk]}
// quiet: the page already shows the new value, so save without redrawing (a redraw would swallow the click that caused the edit). fn returns true when a redraw is needed after all.
function lnEdit(l,dt,fn,quiet){const redo=fn(lnEnsure(l,dt)); changed(!!quiet&&!redo); if(quiet&&!redo){ lnShowReset(l,ymd(dt)); if(l==='throw') lnRefreshScore(dt) }}
// the day's throwing score (volume x intensity / 12): the number the Training Map shows on its day squares, edits included
function lnScore(dt){
  const st=day0(A.startDate); if(!st) return 0; const off=Math.round((dt-st)/864e5); if(off<0) return 0;
  const w=planWeeks()[Math.floor(off/7)]; if(!w||w.off) return 0; const day=off%7+1;
  return statRows(w).reduce((a,r)=>a+(r.day===day&&!r.plan?(r.wv||0):0),0)/12 }
function lnScoreChip(h2,dt,s){
  if(s==null) s=lnScore(dt); let c=h2.querySelector('.ldv');
  if(!(s>0)){ if(c) c.remove(); return }
  if(!c){ c=el('span','ldv'); h2.append(' ',c) }
  c.textContent=String(Math.round(s)); c.classList.toggle('hot',s>=7); c.title='Day score '+s.toFixed(2)+' (volume \u00d7 intensity)' }
function lnRefreshScore(dt){ for(const b of root.querySelectorAll('.lbox[data-lane="throw"][data-dk="'+ymd(dt)+'"][data-sc="1"]')){ const h=b.querySelector('.lh2'); if(h) lnScoreChip(h,dt) } }
function lnShowReset(l,dk){for(const b of root.querySelectorAll('.lbox[data-lane="'+l+'"][data-dk="'+dk+'"] .lreset[hidden], .ldcell[data-dk="'+dk+'"] .ldreset[hidden]')) b.hidden=false}
function lnSwap(l,a,b){const S=LS(l), pa=lnPack(lnDay(l,a)), pb=lnPack(lnDay(l,b)); S[ymd(a)]=pb; S[ymd(b)]=pa; changed()}
function lnSwapAll(a,b,lanes){for(const l of (lanes||LANES)){const S=LS(l), pa=lnPack(lnDay(l,a)), pb=lnPack(lnDay(l,b)); S[ymd(a)]=pb; S[ymd(b)]=pa} changed()}
function lnMove(l,from,to){
  const src=lnEnsure(l,from.dt), dst=lnEnsure(l,to.dt), row=src.rows.splice(from.i,1)[0]; if(!row) return;
  let at=to.i; if(src===dst&&from.i<at) at--; dst.rows.splice(Math.max(0,Math.min(at,dst.rows.length)),0,row); if(!dst.title||/^(Rest day|No )/.test(dst.title)) dst.title='Custom day'; changed()}
// a rest day: nothing left in the lane (the corrective assignments from the Program Board stay)
function lnClear(o,l){o.rows=o.rows.filter(r=>r.info); o.title=(l==='lift'||l==='prep')?'':LCFG[l].none}
function lnRestDay(dt,lanes){for(const l of (lanes||LANES)){const d=lnDay(l,dt); if(!d||d.out||d.loading) continue; if(!d.rows.some(r=>!r.info)&&!d.custom) continue; lnClear(lnEnsure(l,dt),l)} changed()}
function lnResetDay(dt,lanes){const dk=ymd(dt); for(const l of (lanes||LANES)) delete LS(l)[dk]; changed()}
const lnCustom=(dt,lanes)=>(lanes||LANES).some(l=>LS(l)[ymd(dt)]);
const SVGI={
  trash:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/></svg>',
  copy:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
  grip:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>'};
function liftIcon(cls,svg,label,fn){const b=el('button',cls); b.type='button'; b.innerHTML=svg; b.setAttribute('aria-label',label); b.title=label; if(fn) b.addEventListener('click',fn); return b}
function liftDrop(kind,info,t){
  const ds=(info.ctx&&info.ctx.dates)||dvDates();
  if(kind==='col'){ if(t.box&&t.box._dt) lnSwapAll(info.dt,t.box._dt,info.ctx&&info.ctx.lanes); return }
  if(kind==='day'){ if(t.box&&t.box._dt) lnSwap(info.lane,info.dt,t.box._dt); return }
  const from={dt:info.dt,i:info.i};
  if(t.row){const dt=ds.find(d=>ymd(d)===t.row.dataset.dk); if(dt) lnMove(info.lane,from,{dt,i:(+t.row.dataset.i)+(t.after?1:0)})}
  else if(t.box&&t.box._dt){const d=lnDay(info.lane,t.box._dt); lnMove(info.lane,from,{dt:t.box._dt,i:d?d.rows.length:0})}
}
function liftDragStart(e,kind,info,srcEl){
  const cx=info.ctx||{edit:coachOpen,layer:$('cal'),scroller:null};
  if(!cx.edit||(e.button!=null&&e.button!==0)) return; e.preventDefault(); e.stopPropagation();
  const h=e.currentTarget, rc=srcEl.getBoundingClientRect(), gh=srcEl.cloneNode(true), dx=e.clientX-rc.left, dy=e.clientY-rc.top;
  gh.classList.add('lghost'); gh.style.cssText='position:fixed;pointer-events:none;z-index:9000;opacity:.92;width:'+rc.width+'px;left:'+rc.left+'px;top:'+rc.top+'px;margin:0';
  cx.layer.append(gh); srcEl.classList.add('ldrag'); liftDrag={t:null};
  try{h.setPointerCapture(e.pointerId)}catch(_){}
  const clear=()=>root.querySelectorAll('.lover,.lbefore,.lafter').forEach(n=>n.classList.remove('lover','lbefore','lafter'));
  const mark=(x,y)=>{clear(); liftDrag.t=null; const els=root.elementsFromPoint(x,y), row=els.find(n=>n.classList&&n.classList.contains('lrow')&&n!==srcEl&&!n.classList.contains('lhead')&&!n.classList.contains('linfo')&&n.dataset.lane===info.lane), box=els.find(n=>n.classList&&n.classList.contains('lbox')&&(kind==='col'||n.dataset.lane===info.lane));
    if(kind==='col'){ const tb=els.find(n=>n._dt&&n!==srcEl&&n._dt.toDateString()!==info.dt.toDateString()); if(tb){tb.classList.add('lover'); liftDrag.t={box:tb}} }
    else if(kind==='day'){ if(box&&box!==srcEl){box.classList.add('lover'); liftDrag.t={box}} }
    else if(row){const r2=row.getBoundingClientRect(), after=y>r2.top+r2.height/2; row.classList.add(after?'lafter':'lbefore'); liftDrag.t={row,after}}
    else if(box){box.classList.add('lover'); liftDrag.t={box}}};
  const move=ev=>{gh.style.left=(ev.clientX-dx)+'px'; gh.style.top=(ev.clientY-dy)+'px';
    const sc=cx.scroller; if(sc){const r=sc.getBoundingClientRect(); if(ev.clientY<r.top+50) sc.scrollTop-=14; else if(ev.clientY>r.bottom-50) sc.scrollTop+=14}
    else if(ev.clientY<70) window.scrollBy(0,-14); else if(ev.clientY>window.innerHeight-70) window.scrollBy(0,14);
    mark(ev.clientX,ev.clientY)};
  const end=ev=>{h.removeEventListener('pointermove',move); h.removeEventListener('pointerup',end); h.removeEventListener('pointercancel',end); try{h.releasePointerCapture(ev.pointerId)}catch(_){}
    const t=liftDrag&&liftDrag.t; gh.remove(); srcEl.classList.remove('ldrag'); clear(); liftDrag=null; if(ev.type==='pointercancel'||!t) return; liftDrop(kind,info,t)};
  h.addEventListener('pointermove',move); h.addEventListener('pointerup',end); h.addEventListener('pointercancel',end); mark(e.clientX,e.clientY);
}
// titles are held to a character count: abbreviate step by step, then cut
const TMAX=32;
const ABBR=[[/\s*\/\s*/g,'/'],[/\[Vertical\]/g,'[V]'],[/\[Horizontal\]/g,'[H]'],[/Deceleration/gi,'Decel'],[/Acceleration/gi,'Accel'],[/Rotation/gi,'Rot'],[/\(second exposure\)/i,'(2nd)'],
  [/resisted speed\/heavy push/i,'Resisted/Heavy'],[/overhead\/throw/i,'OH/Throw'],[/Horizontal/gi,'Horiz'],[/Vertical/gi,'Vert'],[/Posterior/gi,'Post'],[/Lower prep/i,'Low Prep'],[/Upper prep/i,'Up Prep'],
  [/Upper/g,'Up'],[/Lower/g,'Low'],[/Resisted/gi,'Resist'],[/Dynamic/gi,'Dyn'],[/Sequencing/gi,'Seq'],[/Stability/gi,'Stab'],[/Overhead/gi,'OH'],[/\s-\s/g,' ']];
function abbrTitle(t,max){const M=max||TMAX; let x=String(t||''); for(const [re,to] of ABBR){ if(x.length<=M) break; x=x.replace(re,to)} return x.length>M?x.slice(0,M-1)+'…':x}
const lnDose=r=>[[r.sets&&r.reps?r.sets+' × '+r.reps:(r.sets?r.sets+' sets':r.reps||''),r.int?'@ '+r.int:''].filter(Boolean).join(' '),r.tempo?'('+r.tempo+')':'',r.ball||''].filter(Boolean).join(' · ');
function renderBox(l,dt,ix,ctx){
  const cfg=LCFG[l], {days,hasInt,hasTmp,cols,needSt,st,today}=ctx, rowsOf=ctx.rowsOf, edit=ctx.edit;
    const dk=ymd(dt), d=days[ix], box=el('article','lbox'+(dt.toDateString()===today?' today':'')+(edit?' lediting':'')+(ctx.narrow?' lnarrow':'')+(ctx.tight?' lcn':'')); box._dt=dt; box.dataset.dk=dk; box.dataset.lane=l;
    const hd=el('div','ldh'); hd.append(el('div','lh1',cfg.name)); hd.title=(cfg.sub(boardObj())||'');
    let t2, off=false;
    if(needSt&&!st) {t2='Set a start date in the Programming tab.'; off=true}
    else if((l==='lift'||l==='prep')&&!SDATA) {t2='Loading…'; off=true}
    else if(needSt&&dt<st) {t2='Plan starts '+fmt(st)+'.'; off=true}
    else if(d&&d.loading) {t2='Loading…'; off=true}
    else if(!d||d.out) {t2='Past the end of this plan.'; off=true}
    else {t2=lnHead(l,d); off=d.rest&&l!=='corr'}
    const real=d&&!d.out&&!d.loading, sc=(l==='throw'&&ctx.score&&real&&!off)?lnScore(dt):0, t2full=t2; t2=abbrTitle(t2,sc>0?TMAX-4:TMAX);
    const h2=el('div','lh2'+(off?' off':''),t2); h2.title=t2full; hd.append(h2); if(l==='throw'&&ctx.score){ box.dataset.sc='1'; lnScoreChip(h2,dt,sc) }
    if(edit&&real){hd.title='Hold and drag onto another day to swap them'; hd.addEventListener('pointerdown',e=>{if(e.target.closest('button,input')) return; liftDragStart(e,'day',{dt,lane:l,ctx},box)})}
    box.append(hd,el('div','lline'));
    const open=edit||ctx.all||liftOpen.has(l), rows=rowsOf(d);
    if(!edit&&!ctx.all&&rows.length){const x=el('button','lexp'); x.type='button'; x.setAttribute('aria-expanded',String(open)); x.append(el('span',null,open?'Hide exercises':'Show exercises'),el('span',null,open?'▴':'▾')); x.addEventListener('click',()=>{open?liftOpen.delete(l):liftOpen.add(l); VS.open=[...liftOpen]; render()}); box.append(x)}
    if(open&&(rows.length||(edit&&real))){
      const list=el('div','lrws'), hr=el('div','lrow lhead'); hr.style.gridTemplateColumns=cols;
      hr.append(el('span'),el('span',null,'Exercise'),el('span','n','Sets'),el('span','n','Reps')); if(hasInt) hr.append(el('span','n','Int')); if(hasTmp) hr.append(el('span','n','Tempo'));
      if(rows.some(r=>!r.info)&&!edit&&!ctx.narrow) list.append(hr);
      rows.forEach((r,i)=>{
        if(r.info){const li=el('div','lrow linfo'); li.dataset.dk=dk; li.dataset.i=String(i); li.dataset.lane=l; li.append(el('span',null,r.name),el('b',null,r.info)); list.append(li); return}
        const slotTxt=l==='throw'?String(i+1):(r.slot||''), re=el('div','lrow'+(i&&r.blk!==rows[i-1].blk?' newblk':'')+(edit?' ledit':'')); re.dataset.dk=dk; re.dataset.i=String(i); re.dataset.lane=l;
        const inp=(v,f,cls,ph)=>{const x=el('input','lin'+(cls?' '+cls:'')); x.value=v||''; x.setAttribute('aria-label',f); x.dataset.fk=[l,dk,i,f].join('|'); if(ph) x.placeholder=ph;
          if(f==='name') exPick(x,l,(nm,dose)=>{lnEdit(l,dt,o=>{const r=o.rows[i]; r.name=nm; if(dose&&!r.sets&&!r.reps){r.sets=dose.sets; r.reps=dose.reps; return true}},true)});
          x.addEventListener('change',()=>{lnEdit(l,dt,o=>{o.rows[i][f]=x.value.trim()},true)}); return x};
        if(edit){
          const top=el('div','lr1'), bot=el('div','lr2'), gb=liftIcon('lg',SVGI.grip,'Hold and drag to move this exercise'); gb.addEventListener('pointerdown',e=>liftDragStart(e,'row',{dt,i,lane:l,ctx},re));
          const ac=el('span','lact'); ac.append(liftIcon('lib',SVGI.copy,'Duplicate this exercise',()=>lnEdit(l,dt,o=>{o.rows.splice(i+1,0,Object.assign({},o.rows[i],{id:rid()}))})), liftIcon('lib del',SVGI.trash,'Delete this exercise',()=>lnEdit(l,dt,o=>{o.rows.splice(i,1)})));
          const ni=inp(r.name,'name','nmi','Exercise'); {const fg=exFlags(l,r.name); ni.title=[r.name].concat(fg.length?[fg.join('; ')]:[]).join(' \u2014 '); if(fg.length) re.classList.add('lflag')} top.append(gb,el('span','sl',slotTxt),ni,ac); for(const [f,ph] of cfg.fields) bot.append(inp(r[f],f,'',ph)); bot.style.gridTemplateColumns='repeat('+cfg.fields.length+',minmax(0,1fr))'; re.append(top,bot)}
        else if(ctx.narrow){
          re.classList.add('lnar'); re.style.gridTemplateColumns='22px minmax(0,1fr)'; const nb=el('div','lnb'), nm=el('span','nm2',r.name);
          {const fg=exFlags(l,r.name); if(fg.length){nm.append(el('span','lwarn',' ⚠')); nm.title=fg.join('; '); re.classList.add('lflag')}}
          nb.append(nm); const ds=lnDose(r); if(ds) nb.append(el('div','ldose',ds)); re.append(el('span','sl',slotTxt),nb)}
        else{
          re.style.gridTemplateColumns=cols; const nm=el('span','nm2',r.name); if(r.ball) nm.append(el('div','lsub',r.ball)); {const fg=exFlags(l,r.name); if(fg.length){nm.append(el('span','lwarn',' ⚠')); nm.title=fg.join('; '); re.classList.add('lflag')}}
          re.append(el('span','sl',slotTxt),nm,el('span','n',r.sets),el('span','n',r.reps)); if(hasInt) re.append(el('span','n',r.int)); if(hasTmp) re.append(el('span','n',r.tempo))}
        list.append(re)});
      if(edit&&real){const bar=el('div','lbar'), ad=el('button','btn sm','+ Add exercise'); ad.type='button'; ad.addEventListener('click',()=>{PENDF=[l,dk,d.rows.length,'name'].join('|'); lnEdit(l,dt,o=>{o.rows.push({id:rid(),slot:'',blk:'+',name:'New exercise',sets:'',reps:'',int:'',tempo:'',ball:''}); if(!o.title||/^(Rest day|No )/.test(o.title)) o.title='Custom day'})}); bar.append(ad);
        const rs=el('button','btn sm lreset','Reset to program'); rs.type='button'; rs.hidden=!d.custom; rs.addEventListener('click',()=>{delete LS(l)[dk]; changed()}); bar.append(rs); list.append(bar)}
      box.append(list)}
    return box}
// one block of day columns: a header cell per day, then a box per day for each of the five lanes
function buildGrid(host2,dts,o){
  const st=day0(A.startDate), today=new Date().toDateString(), rowsOf=d=>d&&!d.out&&!d.loading?d.rows:[], gap=8, n=dts.length, edit=!!o.edit;
  const lanes=o.lanes||LANES, W=Math.max(220,o.width>100?o.width:(host2.clientWidth>100?host2.clientWidth:960)), minW=edit?250:(n>3?150:250);
  let per=Math.max(1,Math.min(n,Math.floor((W+gap)/(minW+gap)))); const nb=Math.ceil(n/per); per=Math.ceil(n/nb);
  const lm=n===1&&o.lanesCols>1, colW=lm?(W-gap)/o.lanesCols:(W-(per-1)*gap)/per, narrow=!edit&&(!!o.compact||colW<300), tight=edit&&colW<300, LC={};
  for(const l of lanes){const needSt=l!=='corr', days=dts.map(dt=>(st||!needSt)?lnDay(l,dt):null);
    const hasInt=days.some(d=>rowsOf(d).some(r=>r.int)), hasTmp=days.some(d=>rowsOf(d).some(r=>r.tempo));
    LC[l]={days,needSt,hasInt,hasTmp,cols:['28px','minmax(0,1fr)','34px','58px'].concat(hasInt?['54px']:[],hasTmp?['78px']:[]).join(' ')}}
  for(let b=0;b<nb;b++){
    const grid=el('div','lgrid'+(narrow?' lgn':'')+(lm?' lgm':'')), idx=[]; for(let k=b*per;k<Math.min(n,(b+1)*per);k++) idx.push(k);
    if(!lm) grid.style.gridTemplateColumns='repeat('+per+',minmax(0,1fr))'; else grid.style.columnCount=String(o.lanesCols);
    const cx={edit,all:!!o.all,narrow,tight,lanes,score:!o.chip&&!o.noHead,layer:o.layer,scroller:o.scroller||null,dates:dts,st,today,rowsOf};
    if(!o.noHead) idx.forEach((k,j)=>{const dt=dts[k], dk=ymd(dt), h=el('div','ldcell'+(dt.toDateString()===today?' today':'')+(edit?' lediting':'')+(o.focusDk===dk?' pick':'')); h._dt=dt; h.dataset.col='1'; h.dataset.dk=dk; if(j===0) h.style.gridColumnStart='1';
      h.append(el('span','ldt',dt.toLocaleDateString('en-US',{weekday:'short'}).toUpperCase()+' • '+(dt.getMonth()+1)+'/'+dt.getDate()));
      if(o.chip){const c=o.chip(dt); if(c){c.classList.add('ldchip'); h.append(c)}}
      if(edit){h.title='Hold and drag onto another day to swap the whole day'; h.addEventListener('pointerdown',e=>{if(e.target.closest('button')) return; liftDragStart(e,'col',{dt,ctx:cx},h)});
        const ac=el('div','ldact'), rest=el('button','ldb','Make rest day'), rs=el('button','ldb ldreset','Reset day'); rest.type=rs.type='button'; rs.hidden=!lnCustom(dt,lanes); rest.hidden=!lanes.some(l=>{const d=LC[l].days[k]; return d&&!d.out&&!d.loading&&d.rows.some(r=>!r.info)});
        rest.addEventListener('click',()=>lnRestDay(dt,lanes)); rs.addEventListener('click',()=>lnResetDay(dt,lanes)); ac.append(rest,rs); h.append(ac)}
      grid.append(h)});
    for(const l of lanes) idx.forEach((k,j)=>{const bx=renderBox(l,dts[k],k,Object.assign({},cx,LC[l])); if(j===0) bx.style.gridColumnStart='1'; grid.append(bx)});
    host2.append(grid)}
}
// after adding an exercise the new name box takes the cursor, which opens the exercise search
function lnFocusPending(host2){ if(!PENDF) return false; const f=PENDF; PENDF=null; const x=[...host2.querySelectorAll('input[data-fk]')].find(i=>i.dataset.fk===f); if(x){x.focus(); try{x.select()}catch(_){} return true} return false }
function renderAll(){
  const cal=$('cal'); cal.textContent=''; if(A.str.on&&!SDATA) loadStrength(); if(A.pat.on&&!PAT) loadPattern(); dvBar();
  const giant=el('div','lgiant'); cal.append(giant); const cs=getComputedStyle(giant);
  buildGrid(giant,dvDates(),{edit:coachOpen,layer:cal,width:giant.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight)});
  lnFocusPending(giant); DVW=giant.clientWidth; dvWire()}
// the day columns regroup when the window width changes enough to change how many fit on a line
function dvWire(){ if(dvWire.on) return; dvWire.on=true;
  const rz=()=>{ if(!host.isConnected){window.removeEventListener('resize',rz); return} clearTimeout(rz.t); rz.t=setTimeout(()=>{const c=$('cal'), g=c&&c.firstChild, a=root.activeElement; if(g&&Math.abs(g.clientWidth-DVW)>24&&!(a&&a.tagName==='INPUT')) render()},220)};
  window.addEventListener('resize',rz) }

// ================= Plan Build, Training Map and Notes =================
const FOCI=['Global','Vertical Force','Linear Force','Lateral Force','Lower Rotation','Upper Rotation','Upper Deceleration','Lower Deceleration'];
const FAMN={ML:'Movement Literacy',TL:'Tension Literacy',FC:'Force Control',AC:'Acceleration',AP:'Applied Power'};
const FAMR={'movement literacy':'ML','tension literacy':'TL','force control':'FC','acceleration':'AC','applied power':'AP'};
const UPPER_R=[['neutral','Neutral grip only [no barbell exercises]'],['wristext','No wrist extension'],['wristflex','No wrist flexion'],['frontsq','No front squat position for squatting']];
const LOWER_R=[['squat','No squatting or excessive flexion'],['hinge','No hinging or spinal flexion'],['lunge','No lunging or split squat'],['jump','No jumping or sprinting']];
const THROW_POS=[['seated','Throw from a seated position'],['kneeling','Throw from tall kneeling or half-kneeling'],['standing','Throw from a standing or step-in position'],['mound','Throw on the mound']];
const EQUIP=[['veloU','At VeloU'],['commercial','At a commercial gym'],['home','Home gym'],['limited','Extremely limited','Just dumbbell, kettlebell and bodyweight']];
const RXR={
  neutral:[/\bBB\b|barbell|\bEZ\b|straight[- ]bar|safety bar/i,'Neutral grip only: no barbell'],
  wristext:[/push-?up|crawl|handstand|bear walk|\bdips?\b|cartwheel|\bpike\b|\b(?:high|front|straight[- ]arm)\s+plank|plank (?:walk|shoulder|row|up)/i,'No wrist extension'],
  wristflex:[/curl|wrist|carry|hanging|\bkip\b/i,'No wrist flexion'],
  frontsq:[/front squat|goblet|zercher|front rack|\bclean\b|cross-?arm/i,'No front squat position'],
  squat:[/squat|leg press|hack|sissy|pendulum/i,'No squatting or excessive flexion'],
  hinge:[/deadlift|\bRDL\b|hinge|good ?morning|back extension|hyper|crunch|sit-?up|hollow|roll|nordic|swing|jefferson|stiff[- ]leg|pull[- ]through/i,'No hinging or spinal flexion'],
  lunge:[/lunge|split squat|step[- ]?up|bulgarian|curtsy|cowboy/i,'No lunging or split squat'],
  jump:[/jump|hop|bound|sprint|broad|\bbox\b|depth drop|plyo|hurdle|wicket|skip|build[- ]up run|flying/i,'No jumping or sprinting']
};
const EQX={commercial:/pendulum|belt squat|sled|reverse hyper/i,home:/machine|cable|leg press|hack|pulldown|pendulum|belt squat|sled|ghd|glider|trx|reverse hyper|leg curl|leg extension/i,limited:/\bBB\b|barbell|machine|cable|leg press|hack|pulldown|pendulum|belt squat|sled|ghd|glider|trx|landmine|trap bar|smith|jefferson|leg curl|leg extension|\bbox\b|hurdle|wicket/i};
const throwPosOf=n=>/bullpen|mound|\blive\b|simulated/i.test(n)?'mound':/seated/i.test(n)?'seated':/kneel/i.test(n)?'kneeling':'standing';
const POSN={seated:'a seated position',kneeling:'kneeling',standing:'a standing position',mound:'the mound'};
function exFlagsWith(l,name,R,eq){
  const out=[], n=String(name||''); R=R||{};
  if(l==='lift'||l==='prep') for(const id of [...(R.upper||[]),...(R.lower||[])]){const r=RXR[id]; if(r&&r[0].test(n)) out.push(r[1])}
  if(l==='throw'&&R.throwOk){const p=throwPosOf(n); if(!R.throwOk.includes(p)) out.push('Throwing from '+POSN[p]+' is restricted')}
  if((l==='lift'||l==='prep')&&eq&&EQX[eq]&&EQX[eq].test(n)) out.push('May need equipment this athlete does not have');
  return out;
}
const exFlags=(l,name)=>exFlagsWith(l,name,A.restrict,A.equip);
const bq=()=>(A.build=A.build||{});
const bset=o=>{const q=bq(); Object.assign(q,o); delete q.applied; changed()};
function bctx(){
  const d=host.dataset, n=PBL.num, xfer=n(d.xfer), prod=n(d.prod), ratio=n(d.ratio), lvT=PBL.xferLevel(xfer), lvL=PBL.prodLevel(prod);
  return {name:d.athlete||'',xfer,prod,ratio,thrLevel:lvT,liftLevel:lvL,autoTheory:PBL.theoryOf(lvL,ratio),pos:d.pos||'',play:d.playlevel||'',hand:d.hand||'',
    injStatus:String(d.injstatus||'').trim(),injLoc:String(d.injloc||'').trim(),injNote:String(d.injnote||'').trim(),arm:n(d.armscore),board:boardObj(),coach:d.coach||''};
}
const hasInjury=c=>/previous|current|rehab|injured/i.test(c.injStatus)&&!/^none$/i.test(c.injStatus);
function locAreas(c){
  const s=c.injLoc.toLowerCase(), r=[];
  if(/shoulder|elbow|wrist|arm|neck|hand|forearm/.test(s)) r.push('upper');
  if(/knee|leg|hip|pelvis|spine|torso|back|ankle|foot|core|groin/.test(s)) r.push('lower');
  return r;
}
function areasOf(c,Q){const r=locAreas(c); return r.length?r:(Q.areas||[]);}
const tcase=t=>String(t||'').split(/\s+/).map(w=>/^(UCL|TJ|PRP|AC|G\d)$/i.test(w)?w.toUpperCase():w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ');
function rttList(){
  return D.programs.filter(p=>/^THR•RT[TM]•/.test(p.code)).map(p=>{
    const m=p.code.match(/^THR•(RT[TM])•(\d+)W•(.+)$/), inj=m?tcase(m[3]):p.code;
    return {code:p.code,weeks:Number(p.weeks)||Number(m&&m[2])||8,kind:m?m[1]:'RTT',injury:inj,label:(m&&m[1]==='RTM'?'Return to mound':'Return to throw')+' · '+inj+' · '+(Number(p.weeks)||Number(m&&m[2])||8)+' wks'};
  }).sort((a,b)=>(a.kind===b.kind?0:a.kind==='RTT'?-1:1)||a.label.localeCompare(b.label));
}
function rttSuggest(note,loc){
  const t=String(note||'').toLowerCase(); if(!t) return '';
  const pick=w=>{const h=rttList().find(p=>p.kind==='RTT'&&p.code.toUpperCase().includes(w)); return h?'Suggested from the injury notes: '+h.label:''};
  const elbow=/elbow/i.test(loc||'')||/ucl|elbow|\btj\b|tommy/.test(t);
  if(/revision/.test(t)) return pick('UCL REVISION');
  if(/hybrid/.test(t)) return pick('UCL HYBRID');
  if(/repair|brace/.test(t)) return pick('UCL REPAIR');
  if(/sprain.*(g2|grade 2|ii\b|2)/.test(t)) return pick('SPRAIN G2');
  if(/sprain|strain/.test(t)) return pick('SPRAIN G1');
  if(elbow&&/\btj\b|tommy|reconstruct|surgery/.test(t)) return 'The notes mention surgery. Choose the repair, hybrid or revision program that matches the procedure.';
  if(elbow&&/pain|sore/.test(t)) return pick('ELBOW PAIN');
  return '';
}
function detectCont(c,start){
  const st=day0(start); if(!st) return null;
  if(A.strBlocks&&A.strBlocks.length&&A.startDate&&A.startDate!==start){
    const end=addD(day0(A.startDate),A.strBlocks.reduce((a,b)=>a+(Number(b.weeks)||0),0)*7-1), last=A.strBlocks[A.strBlocks.length-1], gap=Math.round((st-end)/864e5);
    if(last.fam&&last.fam!=='none'&&gap<=21&&gap>=-84) return {fam:last.fam,ph:Number(last.ph)||1,gap,src:'the saved plan'};
  }
  const bd=c.board; if(bd.lift){
    const parts=String(bd.lift).split('•').map(x=>x.trim()), fam=FAMR[(parts[0]||'').toLowerCase()], m=(parts[1]||'').match(/^P([123])/i), e=pdt(bd.le);
    if(fam&&m){const gap=e?Math.round((st-new Date(e.getFullYear(),e.getMonth(),e.getDate(),12))/864e5):0; if(gap<=21) return {fam,ph:+m[1],gap,src:'the Program Board'}}
  }
  return null;
}
// restrictions and routing that follow from the injury answers
function effective(c,Q){
  const inj=hasInjury(c), rec=inj?Q.recovered:'yes', canThrow=(inj&&rec==='no')?Q.canThrow:'yes', areas=areasOf(c,Q);
  const forcedRtt=inj&&rec==='no'&&canThrow==='no';
  const status=forcedRtt?'rtt':Q.status;
  let upper=[], lower=[], throwOk=null, askedRestrict=false;
  if(inj&&rec==='no'&&Q.restrict==='yes'){
    askedRestrict=true;
    if(areas.includes('upper')&&(canThrow==='no'||Q.sure==='b')) upper=(Q.upperR||[]).slice();
    if(areas.includes('lower')){ lower=(Q.lowerR||[]).slice(); if(canThrow==='yes'&&Q.thrImpact==='yes') throwOk=(Q.throwOk||[]).slice() }
  }
  const list=rttList(), prog=list.find(p=>p.code===Q.rttCode)||null;
  const rtt=status==='rtt'&&prog?{code:prog.code,weeks:prog.weeks,label:prog.label,startWeek:Math.max(1,Math.min(prog.weeks,Number(Q.rttWeek)||1)),startDate:Q.rttStart||Q.start}:null;
  return {inj,rec,canThrow,areas,forcedRtt,status,upper,lower,throwOk,restricted:upper.length>0||lower.length>0||!!throwOk,rtt,askedRestrict};
}
// the restriction flags a plan would trigger in its lifting programs
function flagSummary(out,opt,eff,Q,days){
  if(!SDATA) return null;
  const R={upper:eff.upper,lower:eff.lower,throwOk:eff.throwOk}, none=!(eff.upper.length||eff.lower.length)&&(!Q.equip||Q.equip==='veloU');
  if(none) return {n:0,names:[]};
  const splits=new Set(out.blocks.filter(b=>PBL.SEQ.includes(b.code)).map(b=>SPLITOF(b.code,days))); if(!splits.size) splits.add(SPLITOF('REVO',days));
  const names=new Set();
  try{ for(const b of opt.blocks) for(const sk of splits){ const f=strFor(b.fam,b.ph,sk); if(!f) continue;
    for(const code of [f.lift,f.prep]){ if(!code) continue; const p=strProg(code); if(!p) continue; const ds=Object.keys(p.d).map(Number).sort((a,b)=>a-b), dd=p.d[ds[0]]; if(!dd) continue;
      for(const day of dd.days) for(const r of day[3]){ const nm=liftName(tidyN(SDATA.ex[r[1]]||'')); if(nm&&exFlagsWith('lift',nm,R,Q.equip).length) names.add(nm) } } } }catch(e){}
  return {n:names.size,names:[...names].slice(0,6)};
}
function applyBuild(c,Q,out,opt,eff,level,theory,te){
  const hasEdits=saved&&(Object.keys(A.laneDays||{}).some(k=>Object.keys(A.laneDays[k]||{}).length)||Object.keys(A.swaps||{}).length||Object.keys(A.rowEdits||{}).length||Object.keys(A.added||{}).length);
  if(hasEdits&&!confirm('Replace the current plan? Day edits, swaps and added drills for this athlete will be cleared.')) return;
  A.program=TL; A.level=String(level); A.focus=Q.focus; A.startDate=Q.start; A.compDate=Q.noComp?'':(Q.comp||''); A.phaseWeeks=null;
  A.blocks=out.blocks.map((b,i)=>{const o=Object.assign({},b), sv=te&&te.shift?te.shift[i]:''; if(sv!==''&&sv!=null&&b.code!=='OFF') o.shift=Number(sv); return o});
  A.shift=Number(te&&te.def)||0;
  A.str={on:1,fam:'',ph:''}; A.strBlocks=opt.blocks.map(b=>({weeks:b.weeks,fam:b.fam,ph:b.ph})); A.strStart='';
  const dl=eff.status==='deload'; A.pat={on:(Q.patOn==='yes'||dl)?1:0,only:(Q.patOn!=='yes'&&dl)?1:0,foc:(Q.patFocus&&Q.patFocus!=='same'&&Q.patFocus!==Q.focus)?Q.patFocus:''}; A.patBlocks=[];
  for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','dayMove','baseline','deload','laneDays']) A[k]={};
  A.days=Q.days; A.mound=Q.mound; A.equip=Q.equip||''; A.restrict={upper:eff.upper,lower:eff.lower,throwOk:eff.throwOk};
  Q.appliedAt=Date.now(); Q.applied=true; viewWeek=1;
  changed(); status('Plan applied. See the Training Map for all '+out.W+' weeks.');
}
function bField(label,control,hint){const w=el(control.classList&&control.classList.contains('dp')?'div':'label','qf'); w.append(el('span','qfl',label),control); if(hint) w.append(el('span','qs',hint)); return w}
// calendar dropdown: a button showing the chosen date that opens a month grid
function bDate(val,fn,o){
  o=o||{};
  const w=el('div','dp'), b=el('button','dpb'), pop=el('div','dpp'); b.type='button'; pop.hidden=true;
  const show=v=>{const d=day0(v); return d?d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'}):(o.placeholder||'Select a date')};
  const ic=document.createElementNS('http://www.w3.org/2000/svg','svg'); ic.setAttribute('viewBox','0 0 16 16'); ic.setAttribute('width','16'); ic.setAttribute('height','16'); ic.setAttribute('aria-hidden','true'); ic.innerHTML='<rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M2 6.5h12M5 1.5v3M11 1.5v3" stroke="currentColor" stroke-width="1.4" fill="none"/>';
  b.append(ic,el('span','dpt',show(val))); if(!val) b.classList.add('empty'); if(o.disabled) b.disabled=true;
  let view=day0(val)||day0(o.min)||new Date(); view=new Date(view.getFullYear(),view.getMonth(),1,12);
  const onDoc=e=>{ if(!w.isConnected||!e.composedPath().includes(w)) close() };
  function close(){ pop.hidden=true; b.setAttribute('aria-expanded','false'); root.removeEventListener('click',onDoc) }
  function draw(){
    pop.textContent='';
    const head=el('div','dph'), prev=el('button','dpn','\u2039'), next=el('button','dpn','\u203a'), ttl=el('span','dpm',view.toLocaleDateString(undefined,{month:'long',year:'numeric'}));
    prev.type=next.type='button'; prev.setAttribute('aria-label','Previous month'); next.setAttribute('aria-label','Next month');
    prev.addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()-1,1,12); draw()});
    next.addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()+1,1,12); draw()});
    head.append(prev,ttl,next); pop.append(head);
    const wk=el('div','dpw'); for(const d of ['Su','Mo','Tu','We','Th','Fr','Sa']) wk.append(el('span',null,d)); pop.append(wk);
    const g=el('div','dpg'), first=new Date(view.getFullYear(),view.getMonth(),1,12), start=addD(first,-first.getDay()), today=ymd(new Date()), min=o.min||'';
    for(let i=0;i<42;i++){
      const d=addD(start,i), v=ymd(d), x=el('button','dpd'+(d.getMonth()!==view.getMonth()?' out':'')+(v===val?' sel':'')+(v===today?' today':''),String(d.getDate()));
      x.type='button'; if(min&&v<min) x.disabled=true; x.setAttribute('aria-label',d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'}));
      x.addEventListener('click',()=>{close(); fn(v)}); g.append(x)}
    pop.append(g);
    const foot=el('div','dpf'), tb=el('button','dpl','Today'); tb.type='button'; if(min&&today<min) tb.disabled=true; tb.addEventListener('click',()=>{close(); fn(today)}); foot.append(tb);
    if(o.clear&&val){const cb=el('button','dpl','Clear'); cb.type='button'; cb.addEventListener('click',()=>{close(); fn('')}); foot.append(cb)}
    pop.append(foot)}
  b.setAttribute('aria-haspopup','dialog'); b.setAttribute('aria-expanded','false');
  b.addEventListener('click',()=>{ if(!pop.hidden){close(); return} draw(); pop.hidden=false; b.setAttribute('aria-expanded','true'); setTimeout(()=>root.addEventListener('click',onDoc),0) });
  w.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!pop.hidden){e.stopPropagation(); close(); b.focus()} });
  w.append(b,pop); return w}
function bSel(list,val,fn,blank){const s=el('select','qsel'); if(blank){const o=el('option',null,blank); o.value=''; s.append(o)} for(const [v,t] of list){const o=el('option',null,t); o.value=String(v); s.append(o)} s.value=val==null?'':String(val); s.addEventListener('change',()=>fn(s.value)); return s}
function bOpts(list,val,fn,cols){const w=el('div','qopts'+(cols?' g'+cols:'')); for(const [v,t,h] of list){const b=el('button','qo'+(String(val)===String(v)?' on':'')); b.type='button'; b.append(document.createTextNode(t)); if(h) b.append(el('small',null,h)); b.addEventListener('click',()=>fn(v)); w.append(b)} return w}
function bChecks(list,vals,fn){const w=el('div','qchks'); for(const [v,t] of list){const l=el('label','qchk'), x=el('input'); x.type='checkbox'; x.checked=(vals||[]).includes(v); x.addEventListener('change',()=>{const s=new Set(vals||[]); x.checked?s.add(v):s.delete(v); fn([...s])}); l.append(x,el('span',null,t)); w.append(l)} return w}
// ---- the question box: one question at a time, answers stay stored ----
let bStep=null, bStepFor='', bEditThr=false, bEditLift=null;
const SHORT=v=>{const d=day0(v); return d?d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):''};
const STATUS_OPTS=[['onramp','Needs an on-ramp','They have just come off a deload'],['deload','Needs a deload','Just out of season. Patterning only for the weeks you choose'],['offmound','Recently off the mound','Ready for any intensity in a throwing plan'],['rtt','In return to throw','Choose where to start them']];
const STATUS_TXT={onramp:'On-ramp',deload:'Deload',offmound:'Off the mound',rtt:'Return to throw'};
// the questions that apply right now, in order
function bOrder(c,Q,eff){
  const o=['start','comp'];
  if(eff.inj){ o.push('rec');
    if(Q.recovered==='no'){ o.push('can');
      if(Q.canThrow==='no') o.push('rtt');
      if(Q.canThrow){ o.push('restrict');
        if(Q.restrict==='yes'){
          if(!locAreas(c).length) o.push('areas');
          if(eff.areas.includes('upper')){ if(Q.canThrow==='yes') o.push('sure'); if(Q.canThrow==='no'||Q.sure==='b') o.push('upper') }
          if(eff.areas.includes('lower')){ if(Q.canThrow==='yes') o.push('thr'); if(Q.canThrow==='no'||Q.thrImpact) o.push('lower') } } } } }
  if(!eff.forcedRtt) o.push('status');
  o.push('focus','pat','equip','assume');
  return o}
// answering a question stores it, marks it done and moves to the next one that now applies
function bGo(id,patch){
  const q=bq(); Object.assign(q,patch||{}); q.done=Object.assign({},q.done,{[id]:1}); delete q.applied;
  const c=bctx(), o=bOrder(c,q,effective(c,q)), i=o.indexOf(id); bStep=i>=0&&o[i+1]?o[i+1]:'done'; changed()}
function bDefs(c,Q,eff,level,theory){
  const x={go:bGo,set:bset}, D={};
  const rttBody=(k,startLabel)=>{
    const list=rttList(), sg=rttSuggest(c.injNote,c.injLoc); if(sg) k.append(el('div','qmsg',sg));
    k.append(bField('Which program do you plan to start them on?',bSel(list.map(p=>[p.code,p.label]),Q.rttCode,v=>bset({rttCode:v,rttWeek:1}),'Choose a program')));
    const pg=list.find(p=>p.code===Q.rttCode), r=el('div','qduo');
    if(pg) r.append(bField('Starting week',bSel(Array.from({length:pg.weeks},(_,i)=>[i+1,'Week '+(i+1)]),Q.rttWeek||1,v=>bset({rttWeek:Number(v)}))));
    r.append(bField(startLabel,bDate(Q.rttStart||Q.start,v=>bset({rttStart:v}),{min:Q.start}))); k.append(r)};
  D.start={label:'Start',title:'What is the athlete’s start date?',
    body:k=>k.append(bDate(Q.start,v=>x.go('start',{start:v||ymd(new Date())}))), txt:()=>SHORT(Q.start), can:()=>!!Q.start};
  D.comp={label:'Competition',title:'When is their next expected competition?',
    body:k=>{
      const r=el('div','qrow'); r.append(bDate(Q.comp,v=>x.go('comp',{comp:v,noComp:false}),{clear:true,min:Q.start?PBL.addDays(Q.start,1):'',disabled:!!Q.noComp,placeholder:'Select a date'}));
      const nb=el('button','qo'+(Q.noComp?' on':''),'No competition scheduled'); nb.type='button'; nb.addEventListener('click',()=>{ if(Q.noComp) bset({noComp:false}); else x.go('comp',{noComp:true,comp:''}) }); r.append(nb); k.append(r);
      const N=(Q.comp&&!Q.noComp&&Q.start)?PBL.weeksBetween(Q.start,Q.comp):null; k.append(el('div','qs','Season: '+PBL.season(Q.noComp?null:N)+(N!=null&&N>0?' · '+N+' weeks to competition':'')))},
    txt:()=>Q.noComp?'None':SHORT(Q.comp), can:()=>!!(Q.comp||Q.noComp)};
  D.rec={label:'Recovered',title:'Has the athlete recovered from their '+(/current|rehab|^injured$/i.test(c.injStatus)?'current':'previous')+' injury?',sub:[c.injStatus,c.injLoc,c.injNote].filter(t=>t&&t!=='None').join(' · '),
    body:k=>k.append(bOpts([['yes','Yes'],['no','No']],Q.recovered,v=>x.go('rec',{recovered:v}))), txt:()=>Q.recovered==='no'?'No':'Yes', can:()=>!!Q.recovered};
  D.can={label:'Cleared to throw',title:'Can the athlete begin throwing yet?',
    body:k=>k.append(bOpts([['yes','Yes'],['no','No, not yet']],Q.canThrow,v=>x.go('can',{canThrow:v}))), txt:()=>Q.canThrow==='no'?'Not yet':'Yes', can:()=>!!Q.canThrow};
  D.rtt={label:'Return to throw',title:'Return to throw',
    body:k=>rttBody(k,'Expected RTT start'), txt:()=>{const p=rttList().find(p=>p.code===Q.rttCode); return p?p.label:''}, can:()=>!!Q.rttCode};
  D.restrict={label:'Lifting limits',title:'Does the athlete have any restrictions regarding lifting?',
    body:k=>k.append(bOpts([['yes','Yes'],['no','No']],Q.restrict,v=>x.go('restrict',{restrict:v}))), txt:()=>Q.restrict==='yes'?'Yes':'No', can:()=>!!Q.restrict};
  D.areas={label:'Area',title:'Which area is affected?',
    body:k=>k.append(bChecks([['upper','Shoulder, elbow, wrist or neck'],['lower','Knee, hip/back or foot']],Q.areas,v=>bset({areas:v}))), txt:()=>(Q.areas||[]).map(a=>a==='upper'?'Upper':'Lower').join(' + '), can:()=>(Q.areas||[]).length>0};
  D.sure={label:'Check',title:'Are you sure?',
    body:k=>{k.append(el('div','qmsg','Typically if they are cleared to throw they should be cleared to lift without restriction.')); k.append(bOpts([['a','Oh, you’re right: no restriction'],['b','No, they still can’t do certain things']],Q.sure,v=>x.go('sure',{sure:v,upperR:v==='a'?[]:Q.upperR}),1))},
    txt:()=>Q.sure==='a'?'No restriction':'Still restricted', can:()=>!!Q.sure};
  D.upper={label:'Upper limits',title:'Please select what the athlete can not complete in the weight room (shoulder, elbow, wrist or neck)',
    body:k=>k.append(bChecks(UPPER_R,Q.upperR,v=>bset({upperR:v}))), txt:()=>{const n=(Q.upperR||[]).length; return n+' limit'+(n===1?'':'s')}, can:()=>true};
  D.thr={label:'Throwing impact',title:'Are there restrictions to how this will impact throwing?',
    body:k=>{k.append(bOpts([['yes','Yes'],['no','No']],Q.thrImpact,v=>{ if(v==='no') x.go('thr',{thrImpact:'no'}); else bset({thrImpact:'yes'}) }));
      if(Q.thrImpact==='yes'){k.append(el('div','qs','Select what the athlete can do. Anything left unchecked is treated as restricted for now.')); k.append(bChecks(THROW_POS,Q.throwOk,v=>bset({throwOk:v})))}},
    txt:()=>Q.thrImpact==='yes'?'Yes':'No', can:()=>!!Q.thrImpact};
  D.lower={label:'Lower limits',title:'Please select what the athlete can not complete in the weight room (knee, hip/back or foot)',
    body:k=>k.append(bChecks(LOWER_R,Q.lowerR,v=>bset({lowerR:v}))), txt:()=>{const n=(Q.lowerR||[]).length; return n+' limit'+(n===1?'':'s')}, can:()=>true};
  D.status={label:'Throwing',title:'Where is the athlete in their throwing?',
    body:k=>{ k.append(bOpts(STATUS_OPTS,Q.status,v=>{ if(v==='onramp'||v==='offmound') x.go('status',{status:v}); else bset({status:v}) },2));
      if(Q.status==='deload') k.append(bField('How many weeks? (patterning only during this time)',bSel([1,2,3,4].map(n=>[n,n+' week'+(n>1?'s':'')]),Q.deloadWeeks||1,v=>bset({deloadWeeks:Number(v)}))));
      if(Q.status==='rtt') rttBody(k,'Program start')},
    txt:()=>Q.status==='deload'?'Deload · '+(Q.deloadWeeks||1)+' wk':(STATUS_TXT[Q.status]||''), can:()=>!!Q.status&&(Q.status!=='rtt'||!!Q.rttCode)};
  D.focus={label:'Focus',title:'What is the athlete’s proposed focus for throwing development?',
    body:k=>k.append(bOpts(FOCI.map(f=>[f,f]),Q.focus,v=>x.go('focus',{focus:v}),3)), txt:()=>Q.focus||'', can:()=>!!Q.focus};
  D.pat={label:'Patterning',title:'Do you want to include patterning?',
    body:k=>{ k.append(bOpts([['yes','Yes'],['no','No']],Q.patOn,v=>{ if(v==='no') x.go('pat',{patOn:'no'}); else bset({patOn:'yes'}) }));
      if(Q.patOn==='yes'){k.append(el('div','qs','Which patterning focus?')); k.append(bOpts([['same','Same as throwing focus']].concat(FOCI.map(f=>[f,f])),Q.patFocus||'same',v=>x.go('pat',{patOn:'yes',patFocus:v}),3))}},
    txt:()=>Q.patOn==='yes'?'Yes · '+((Q.patFocus&&Q.patFocus!=='same')?Q.patFocus:'same focus'):(Q.patOn==='no'?'No':''), can:()=>Q.patOn==='no'||Q.patOn==='yes'};
  D.equip={label:'Equipment',title:'What equipment does the athlete have access to?',
    body:k=>k.append(bOpts(EQUIP,Q.equip,v=>x.go('equip',{equip:v}),2)), txt:()=>{const e=EQUIP.find(t=>t[0]===Q.equip); return e?e[1]:''}, can:()=>!!Q.equip};
  D.assume={label:'Assumptions',title:'Check the assumptions',sub:'These come from the athlete’s profile. Change anything that looks wrong; the plan below updates as you do.',
    body:k=>{ const r=el('div','qtri');
      r.append(bField('Training days per week',bSel([[4,'4 days'],[5,'5 days'],[6,'6 days']],Q.days,v=>bset({days:Number(v)}))));
      r.append(bField('Throwing level',bSel([[1,'Level 1'],[2,'Level 2'],[3,'Level 3']],Q.thrLevel||'',v=>bset({thrLevel:v}),c.thrLevel?'Auto: Level '+c.thrLevel:'Choose a level')));
      r.append(bField('Training theory',bSel(Object.keys(FAMN).map(f=>[f,FAMN[f]]),Q.theory||'',v=>bset({theory:v}),c.autoTheory?'Auto: '+FAMN[c.autoTheory]:'Auto')));
      k.append(r); k.append(el('div','qs','Training days: 6 for high school, 5 for college and pro. Level and theory read Auto when they come from the athlete’s scores.'));
      const lm=el('label','qchk'), lx=el('input'); lx.type='checkbox'; lx.checked=!!Q.mound; lx.addEventListener('change',()=>bset({mound:lx.checked})); lm.append(lx,el('span',null,'Has mound access (pitchers are assumed to find mound time)')); k.append(lm)},
    txt:()=>Q.days+' days · L'+level+' · '+theory, can:()=>true};
  return D}
// answers saved before the question box existed count as answered
function bMigrate(c,Q,eff){
  if(Q.done) return;
  const has=k=>Q[k]!=null&&Q[k]!=='', d={};
  const m={start:has('focus')||has('equip')||has('status'),comp:has('comp')||!!Q.noComp,rec:has('recovered'),can:has('canThrow'),rtt:has('rttCode'),restrict:has('restrict'),areas:!!(Q.areas&&Q.areas.length),sure:has('sure'),upper:Array.isArray(Q.upperR),thr:has('thrImpact'),lower:Array.isArray(Q.lowerR),status:has('status'),focus:has('focus'),pat:has('patOn'),equip:has('equip')};
  for(const k in m) if(m[k]) d[k]=1;
  Q.done=d}
function renderBuild(){
  const box=$('bview'); box.hidden=false; box.textContent='';
  if(A.str.on&&!SDATA) loadStrength(); if(!PAT) loadPattern();
  const c=bctx(), Q=bq();
  if(bStepFor!==cur){bStep=null; bStepFor=cur; bEditThr=false; bEditLift=null}
  if(!Q.start){const t0=ymd(new Date()), s0=day0(A.startDate); Q.start=(s0&&s0>=day0(t0))?A.startDate:t0}
  if(Q.days==null) Q.days=PBL.daysFor(c.play);
  if(Q.mound==null) Q.mound=PBL.isPitcher(c.pos);
  root.querySelector('.wrap').classList.toggle('adv',coachOpen); $('coach').hidden=!coachOpen; $('coachBtn').textContent=coachOpen?'Close advanced coach tools':'Advanced coach tools'; if(coachOpen) renderCoach(weeksAvail(),planWeeks().length);
  const eff=effective(c,Q), level=Q.thrLevel?Number(Q.thrLevel):(c.thrLevel||1), theory=Q.theory||c.autoTheory||'TL';
  bMigrate(c,Q,eff);
  const order=bOrder(c,Q,eff), defs=bDefs(c,Q,eff,level,theory), done=id=>!!(Q.done&&Q.done[id]);
  const firstOpen=order.find(id=>!done(id)&&id!=='assume');
  let curId=(bStep&&order.includes(bStep))?bStep:(bStep==='done'&&!firstOpen?'done':(firstOpen||'done'));
  if(curId==='done'&&!done('assume')&&bStep!=='done') curId='assume';
  const grid=el('div','bgrid'); box.append(grid);
  // what we already know: a compact square
  {const k=el('section','qc bknown'), hr=el('div','qhr'); hr.append(el('div','qh','What we already know'));
   if(Object.keys(Q).some(t=>!['start','days','mound','done'].includes(t))||Object.keys(Q.done||{}).length){const so=el('button','btn sm','Start over'); so.type='button'; so.addEventListener('click',()=>{if(confirm('Clear these answers and start a new plan build? The plan already applied stays as it is until you apply a new one.')){bStep=null; A.build={}; changed()}}); hr.append(so)}
   k.append(hr);
   const g=el('div','kg'), kv=(a,v,kind,clamp)=>{const t=el('div','k'+(kind?' '+kind:'')), b=el('b',clamp?'clamp':null,v||'—'); if(clamp&&v) b.title=v; t.append(el('span',null,a),b); g.append(t)};
   kv('Athlete',c.name,'h'); kv('Position / level',[c.pos,c.play].filter(Boolean).join(' · '),'h');
   kv('Throwing arm',c.hand); kv('Arm score',c.arm!=null?c.arm.toFixed(1):'');
   kv('Throwing level',c.thrLevel?'L'+c.thrLevel+' · '+c.xfer.toFixed(1):'No score'); kv('Lifting level',c.liftLevel?'L'+c.liftLevel+' · '+c.prod.toFixed(1):'No score');
   kv('Training theory',c.autoTheory?FAMN[c.autoTheory]+(c.liftLevel===3&&c.ratio!=null?' · ratio '+c.ratio.toFixed(2):''):'','w');
   kv('Injury',hasInjury(c)?[c.injStatus,c.injLoc!=='None'?c.injLoc:'',c.injNote].filter(Boolean).join(' · '):'None on file','w',1);
   kv('Program Board',[c.board.thr,c.board.lift].filter(Boolean).join('  |  '),'w',1);
   k.append(g); const rn=PBL.ratioNote(c.ratio); if(c.liftLevel===3&&rn) k.append(el('div','qmsg qwarn',rn));
   {const answered=order.filter(id=>done(id)&&defs[id]&&defs[id].txt());
    if(answered.length){const w=el('div','kans'); w.append(el('div','kansh','Your answers')); const ch=el('div','qchips'); for(const id of answered){const t=el('button','qchip'+(id===curId?' on':'')); t.type='button'; t.append(document.createTextNode(defs[id].label+': '),el('b',null,defs[id].txt())); t.addEventListener('click',()=>{bStep=id; render()}); ch.append(t)} w.append(ch); k.append(w)}}
   grid.append(k)}
  // the question box
  {const k=el('section','qc bqbox'); grid.append(k);
   const idx=order.indexOf(curId), prevId=curId==='done'?order[order.length-1]:(idx>0?order[idx-1]:null);
   const head=el('div','qbh'), back=el('button','btn sm qback','← Back'); back.type='button'; back.disabled=!prevId; back.addEventListener('click',()=>{bStep=prevId; render()});
   head.append(back,el('span','qprog',curId==='done'?'All questions answered':'Question '+(idx+1)+' of '+order.length)); k.append(head);
   if(curId==='done'){
     k.append(el('div','qtt','That’s everything.'),el('div','qs','The suggested plan is below. Go back to change an answer, or pick any answer in the list to jump to it.'));
   }else{
     const d=defs[curId]; k.append(el('div','qtt',d.title)); if(d.sub) k.append(el('div','qs',d.sub));
     const hasDate=curId==='start'||curId==='comp'||curId==='rtt'||(curId==='status'&&Q.status==='rtt'), body=el('div','qbody'+(hasDate?'':' scroll')); d.body(body); k.append(body);
     const foot=el('div','qfoot'), nx=el('button','btn primary',curId==='assume'?'Done':'Next →'); nx.type='button'; nx.disabled=!d.can(); nx.addEventListener('click',()=>bGo(curId,{}));
     foot.append(el('span'),nx); k.append(foot)}}
  const complete=order.filter(id=>id!=='assume').every(done);
  // the suggested plan, below both boxes
  const missing=[]; if(!Q.start) missing.push('a start date'); if(eff.inj&&!Q.recovered) missing.push('the injury recovery question'); if(eff.inj&&Q.recovered==='no'&&!Q.canThrow) missing.push('whether they can begin throwing'); if(eff.inj&&Q.recovered==='no'&&Q.canThrow&&!Q.restrict) missing.push('the lifting restrictions question');
  if(!eff.status) missing.push('their throwing status'); if(eff.status==='rtt'&&!eff.rtt) missing.push('a return to throw program'); if(!Q.focus) missing.push('a throwing focus'); if(!Q.patOn) missing.push('the patterning question'); if(!Q.equip) missing.push('equipment access');
  const sug=el('section','qc qsug'); box.append(sug);
  if(!complete||missing.length){sug.append(el('div','qh','Suggested 12 week plan'),el('div','qs',complete?'Still needed: '+missing.join(', ')+'.':'Answer the questions above and the suggested plan appears here.')); return}
  const cont=detectCont(c,Q.start), contUse=cont&&cont.fam===theory?cont:null;
  const advance=contUse?(Q.contAdvance?Q.contAdvance==='adv':contUse.gap>=-7):true;
  const I={start:Q.start,comp:Q.noComp?'':Q.comp,theory,liftLevel:c.liftLevel,status:eff.status,deloadWeeks:Q.deloadWeeks||1,rtt:eff.rtt,restricted:eff.restricted,
    mound:!!Q.mound&&!(eff.throwOk&&!eff.throwOk.includes('mound')),maxIdx:(eff.throwOk&&!eff.throwOk.includes('standing'))?0:null,cont:contUse?{ph:contUse.ph,advance}:null};
  I.maxIdx=I.maxIdx==null?(I.mound?7:4):I.maxIdx;
  const base=PBL.build(Object.assign({},I,{edit:null})), baseSig=base.blocks.map(x=>x.code).join('|');
  let te=(Q.te&&Q.te.sig===baseSig&&Array.isArray(Q.te.weeks)&&Q.te.weeks.length===base.blocks.length)?Q.te:null;
  if(Q.te&&!te) delete Q.te;   // an answer changed the phases, so the old edits no longer fit
  const progWeeks={}; for(const r of rttList()) progWeeks[r.code]=r.weeks;
  const out=PBL.build(Object.assign({},I,{edit:te?{weeks:te.weeks,codes:Array.isArray(te.codes)?te.codes:[],progWeeks}:null})), edited=!!out.edited||!!(te&&te.shift&&te.shift.some(s=>s!==''&&s!=null))||!!(te&&Number(te.def));
  const opts=out.lift.options.map(o=>{const e=Q.le&&Q.le[o.key]; return (e&&e.W===out.W)?Object.assign({},o,{blocks:e.blocks.map(x=>Object.assign({},x)),pat:e.blocks.map(x=>x.weeks),edited:true}):o});
  if(bEditLift&&!opts.some(o=>o.key===bEditLift.key)) bEditLift=null;
  const sel=Q.liftPat!=null&&opts[Q.liftPat]?Q.liftPat:out.lift.rec, opt=opts[sel];
  sug.append(el('div','qh',(edited?'Adjusted ':'Suggested ')+out.W+' week plan'),el('div','qs',day0(Q.start).toLocaleDateString(undefined,{month:'short',day:'numeric'})+' to '+day0(out.end).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})+' · '+out.season+(out.N!=null?' · '+out.N+' weeks to competition':'')));
  for(const w of out.warn) sug.append(el('div','qmsg qwarn',w));
  if(!c.thrLevel&&!Q.thrLevel) sug.append(el('div','qmsg qwarn','No transference score on file, so Level 1 is assumed for throwing. Set the throwing level under Assumptions if that is wrong.'));
  if(!c.autoTheory&&!Q.theory) sug.append(el('div','qmsg qwarn','No production score on file, so Tension Literacy is assumed for lifting. Set the training theory under Assumptions if that is wrong.'));
  if(contUse){const r=el('div','qrow'); r.append(el('span','qs','Continuing '+FAMN[contUse.fam]+' from P'+contUse.ph+' ('+contUse.src+').')); r.append(bSel([['adv','Advance to P'+Math.min(3,contUse.ph+1)],['hold','Hold at P'+contUse.ph]],advance?'adv':'hold',v=>bset({contAdvance:v}))); sug.append(r)}
  else if(cont&&cont.fam!==theory) sug.append(el('div','qs','The previous lifting theory was '+FAMN[cont.fam]+'. A new training theory starts at P1.'));
  // ---- throwing: weeks per phase and the slide of the training days can be edited
  const t0=()=>{const t=JSON.parse(JSON.stringify(te||{sig:baseSig,weeks:base.blocks.map(x=>x.weeks),shift:base.blocks.map(()=>''),def:0})); if(!Array.isArray(t.codes)||t.codes.length!==base.blocks.length) t.codes=base.blocks.map(()=>''); return t};
  const PHOPT=[...D.programs.filter(x=>x.uses).map(p=>[p.code,p.code+' \u00b7 '+p.name.replace(/ \(.*/,'')]),['OFF','Deload (patterning only)'],...rttList().map(r=>[r.code,r.label])];
  const maxW=i=>{const rp=rttList().find(x=>x.code===out.blocks[i].code); return rp?Math.max(1,rp.weeks-(Number(out.blocks[i].pw0)||0)):16};
  const stepW=(i,d)=>{const t=t0(); t.weeks[i]=Math.max(1,Math.min(maxW(i),(Number(t.weeks[i])||1)+d)); bset({te:t})};
  const SLIDES=[['-3','3 days earlier'],['-2','2 days earlier'],['-1','1 day earlier'],['0','As written'],['1','1 day later'],['2','2 days later'],['3','3 days later']];
  const hh=el('div','qh2r'); hh.append(el('div','qh2','Throwing'));
  {const eb=el('button','btn sm'+(bEditThr?' primary':''),bEditThr?'Done editing':'Edit plan'); eb.type='button'; eb.addEventListener('click',()=>{bEditThr=!bEditThr; render()}); hh.append(eb)}
  sug.append(hh);
  const tbl=el('div','qtbl'+(bEditThr?' ed':''));
  let wk=0;
  out.blocks.forEach((b,i)=>{const s=PBL.addDays(Q.start,wk*7), e=PBL.addDays(Q.start,(wk+b.weeks)*7-1), p=byCode(b.code), rp=rttList().find(x=>x.code===b.code), nm=b.code==='OFF'?'Deload (patterning only)':rp?rp.label:p?(p.name.replace(/ \(.*/,'')):b.code;
    const r=el('div','qtr'), sv=te&&te.shift?te.shift[i]:'';
    r.append(el('span','qt1','Weeks '+(wk+1)+(b.weeks>1?'–'+(wk+b.weeks):'')));
    if(bEditThr){const ps=el('select','qsel qprog'); ps.setAttribute('aria-label','Program for weeks '+(wk+1)+(b.weeks>1?' to '+(wk+b.weeks):'')); for(const [v,t] of PHOPT){const o=el('option',null,t); o.value=v; ps.append(o)} ps.value=b.code; ps.addEventListener('change',()=>{const t=t0(); t.codes[i]=ps.value===base.blocks[i].code?'':ps.value; bset({te:t})}); r.append(ps)}
    else{const nmEl=el('span','qt2',(b.code==='OFF'||rp?'':b.code+' · ')+nm); if(sv!==''&&sv!=null&&b.code!=='OFF'&&Number(sv)) nmEl.append(el('small','qslid',' · slid '+Math.abs(Number(sv))+(Number(sv)>0?' later':' earlier'))); r.append(nmEl)}
    if(bEditThr){const ctl=el('span','qctl'), st=el('span','qstep'), mi=el('button',null,'\u2212'), pl=el('button',null,'+'), n=el('b',null,String(b.weeks));
      mi.type=pl.type='button'; mi.setAttribute('aria-label','Fewer weeks in '+nm); pl.setAttribute('aria-label','More weeks in '+nm); mi.disabled=b.weeks<=1; pl.disabled=b.weeks>=maxW(i); mi.addEventListener('click',()=>stepW(i,-1)); pl.addEventListener('click',()=>stepW(i,1)); st.append(mi,n,pl); ctl.append(st,el('span','note','wk'));
      const ss=el('select','qslide'); ss.setAttribute('aria-label','Slide the training days in '+nm); const o0=el('option',null,'Slide: default'); o0.value=''; ss.append(o0); for(const [v,t] of SLIDES){const o=el('option',null,t); o.value=v; ss.append(o)} ss.value=(sv==null?'':String(sv)); ss.disabled=b.code==='OFF'; ss.addEventListener('change',()=>{const t=t0(); t.shift[i]=ss.value; bset({te:t})}); ctl.append(ss); r.append(ctl)}
    r.append(el('span','qt3',day0(s).toLocaleDateString(undefined,{month:'short',day:'numeric'})+' to '+day0(e).toLocaleDateString(undefined,{month:'short',day:'numeric'}))); tbl.append(r); wk+=b.weeks});
  sug.append(tbl);
  if(bEditThr){const tool=el('div','qtool');
    const gs=el('select','qslide'); gs.setAttribute('aria-label','Slide training days for every phase'); for(const [v,t] of SLIDES){const o=el('option',null,t); o.value=v; gs.append(o)} gs.value=String(Number(te&&te.def)||0); gs.addEventListener('change',()=>{const t=t0(); t.def=Number(gs.value); bset({te:t})});
    tool.append(el('span','qfl','Slide training days (all phases)'),gs,el('span','qs',out.W+' weeks · '+fmt(day0(Q.start))+' to '+fmt(day0(out.end))));
    if(edited){const rs=el('button','btn sm','Reset to suggested'); rs.type='button'; rs.addEventListener('click',()=>bset({te:null})); tool.append(rs)}
    sug.append(tool)}
  sug.append(el('div','qs','Level '+level+' · focus '+Q.focus+' · patterning '+(Q.patOn==='yes'?'included ('+(Q.patFocus&&Q.patFocus!=='same'?Q.patFocus:'same as throwing')+')':eff.status==='deload'?'only during the deload weeks':'left out')+((te&&Number(te.def))?' \u00b7 training days slid '+Math.abs(Number(te.def))+(Number(te.def)>0?' later':' earlier'):'')));
  // ---- lifting: every option has an Edit button; saving an edit selects that option
  sug.append(el('div','qh2','Lifting · '+FAMN[theory]+' · '+Q.days+' days per week'));
  const lopts=el('div','qlifts');
  const liftEditor=(o,i)=>{
    const ed=bEditLift, w=el('div','qled');
    let at=0;
    ed.blocks.forEach((x,j)=>{const r=el('div','qlr'), nw=Number(x.weeks)||1; r.append(el('span','qt1',nw>1?'Weeks '+(at+1)+'\u2013'+(at+nw):'Week '+(at+1))); at+=nw;
      r.append(bSel(Object.keys(FAMN).map(f=>[f,FAMN[f]]),x.fam,v=>{x.fam=v; render()}),bSel([[1,'P1'],[2,'P2'],[3,'P3']],x.ph,v=>{x.ph=String(v); render()}),bSel(Array.from({length:12},(_,k)=>[k+1,(k+1)+' wk']),x.weeks,v=>{x.weeks=Number(v); render()}));
      const rm=el('button','btn sm','Remove'); rm.type='button'; rm.disabled=ed.blocks.length<=1; rm.addEventListener('click',()=>{ed.blocks.splice(j,1); render()}); r.append(rm); w.append(r)});
    const sum=ed.blocks.reduce((a,x)=>a+(Number(x.weeks)||0),0), want=out.W, foot=el('div','qlf'), add=el('button','btn sm','+ Add program'); add.type='button';
    add.addEventListener('click',()=>{const l=ed.blocks[ed.blocks.length-1]||{fam:theory,ph:'1',weeks:4}; ed.blocks.push({fam:l.fam,ph:String(Math.min(3,Number(l.ph)+1)),weeks:Math.max(1,Math.min(12,want-sum))}); render()});
    foot.append(add,el('span','qs'+(sum===want?'':' warn'),'Total '+sum+' of '+want+' weeks'+(sum===want?'':sum<want?'. The lifting stops before the plan ends.':'. The lifting runs past the end of the plan.'))); w.append(foot);
    const bar=el('div','qrow'), sv=el('button','btn primary','Save and use this'), cn=el('button','btn','Cancel'); sv.type=cn.type='button';
    sv.addEventListener('click',()=>{const le=Object.assign({},Q.le||{}); le[o.key]={W:out.W,blocks:ed.blocks.map(x=>({fam:x.fam,ph:String(x.ph),weeks:Number(x.weeks)}))}; bEditLift=null; bset({le,liftPat:i})});
    cn.addEventListener('click',()=>{bEditLift=null; render()}); bar.append(sv,cn);
    if(o.edited){const rs=el('button','btn','Reset to suggested'); rs.type='button'; rs.addEventListener('click',()=>{const le=Object.assign({},Q.le||{}); delete le[o.key]; bEditLift=null; bset({le})}); bar.append(rs)}
    w.append(bar); return w};
  opts.forEach((o,i)=>{
    const card=el('div','qlo'), pick=el('button','qlift'+(i===sel?' on':'')); pick.type='button';
    const fams=new Set(o.blocks.map(x=>x.fam)), label=o.blocks.map(x=>x.weeks+'w '+((fams.size>1||x.fam!==theory)?x.fam+' ':'')+'P'+x.ph).join('  →  ');
    pick.append(el('b',null,label+((i===out.lift.rec&&!o.edited)?'   ★ suggested':'')+(o.edited?'   edited':'')),el('span',null,o.pat.join(' + ')+' weeks')); pick.addEventListener('click',()=>bset({liftPat:i}));
    const open=!!(bEditLift&&bEditLift.key===o.key), eb=el('button','btn sm qedit',open?'Close':'Edit'); eb.type='button';
    eb.addEventListener('click',()=>{ bEditLift=open?null:{key:o.key,blocks:o.blocks.map(x=>({fam:x.fam,ph:String(x.ph),weeks:x.weeks}))}; render() });
    card.append(pick,eb); lopts.append(card); if(open) lopts.append(liftEditor(o,i))});
  sug.append(lopts);
  if(theory!=='ML') sug.append(el('div','qs','Prep: '+FAMN[theory]+' prep for the same phase and split runs before every lift.'));
  sug.append(el('div','qh2','Retest')); sug.append(el('div','qs','The programs include their own test days. As a backstop, retest in weeks '+out.tests.join(', ')+'.'));
  const fl=flagSummary(out,opt,eff,Q,Q.days);
  if(fl&&fl.n) sug.append(el('div','qmsg qwarn',fl.n+' exercise'+(fl.n>1?'s':'')+' in these programs conflict with the restrictions or equipment (for example '+fl.names.slice(0,3).join(', ')+'). They are marked with a warning in the calendar so they can be swapped.'));
  sug.append(el('div','qh2','Why')); const ul=el('ul','qwhy'); for(const t of out.throwWhy.concat(out.liftWhy)) ul.append(el('li',null,t)); sug.append(ul);
  const bar=el('div','qrow'), ap=el('button','btn primary','Apply this plan'); ap.type='button'; ap.addEventListener('click',()=>applyBuild(c,Q,out,opt,eff,level,theory,te)); bar.append(ap);
  if(Q.applied){const go=el('button','btn','Open the Training Map'); go.type='button'; go.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('velou-goto',{detail:'map'}))); bar.append(go); bar.append(el('span','note','Applied '+new Date(Q.appliedAt).toLocaleString()))}
  sug.append(bar);
}
function renderNotes(){
  const box=$('nview'); box.hidden=false; box.textContent='';
  const h=el('div','nh'); h.append(el('h3',null,'Notes'),el('span','note','Saved with this athlete\u2019s plan.')); box.append(h);
  const ta=el('textarea','nta'); ta.rows=4; ta.placeholder='Add a note about this athlete…'; box.append(ta);
  const bar=el('div','qrow'), add=el('button','btn primary','Add note'); add.type='button'; add.addEventListener('click',()=>{const t=ta.value.trim(); if(!t){ta.focus(); return} (A.notes=A.notes||[]).unshift({id:rid(),at:Date.now(),by:host.dataset.coach||'',text:t}); changed()}); bar.append(add); box.append(bar);
  const list=A.notes||[]; if(!list.length) box.append(el('div','qs','No notes yet.'));
  for(const n of list){
    const c=el('article','ncard'), m=el('div','nm'); m.append(el('b',null,new Date(n.at).toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'})),el('span',null,(n.by?' · '+n.by:'')+(n.edited?' · edited':'')));
    const body=el('div','nt',n.text), acts=el('div','nact');
    const ed=el('button','btn sm','Edit'); ed.type='button'; ed.addEventListener('click',()=>{const t2=el('textarea','nta'); t2.rows=4; t2.value=n.text; const sv=el('button','btn sm primary','Save'); sv.type='button'; sv.addEventListener('click',()=>{const v=t2.value.trim(); if(!v) return; n.text=v; n.edited=Date.now(); changed()}); body.replaceWith(t2); acts.replaceChildren(sv)});
    const rm=el('button','btn sm danger','Delete'); rm.type='button'; rm.addEventListener('click',()=>{if(confirm('Delete this note?')){A.notes=(A.notes||[]).filter(x=>x!==n); changed()}});
    acts.append(ed,rm); c.append(m,body,acts); box.append(c);
  }
}

// ================= Training Map: list view or calendar view =================
const MAPK='velou.map.view', MAPLK='velou.map.layer';
let MAPV=(()=>{try{return localStorage.getItem(MAPK)==='cal'?'cal':'list'}catch(e){return 'list'}})();
let MAPL=(()=>{try{const v=localStorage.getItem(MAPLK); return v==='thr'||v==='lift'?v:'both'}catch(e){return 'both'}})();   // what the calendar shows: throwing, lifting or both
const MCS=(window.__vdm=window.__vdm||{});   // month shown and day picked, kept while the page redraws
let MCWK=null, MCT=new Set(), MCSL=[], MCW=new Map(), MCMAX=0;
function mapBar(weeks){
  const bar=$('mapbar'); bar.hidden=!weeks.length; bar.textContent=''; if(!weeks.length) return;
  const seg=el('div','seg'); seg.setAttribute('role','group'); seg.setAttribute('aria-label','Training map view');
  for(const [v,t] of [['list','List view'],['cal','Calendar view']]){const b=el('button','segb'+(MAPV===v?' on':''),t); b.type='button'; b.setAttribute('aria-pressed',String(MAPV===v)); b.addEventListener('click',()=>{ if(MAPV===v) return; MAPV=v; try{localStorage.setItem(MAPK,v)}catch(e){} render() }); seg.append(b)}
  bar.append(seg)}
// working sets in the lifting and prep programs, for each day of a plan week (edits included, rest days are 0)
const mapSetN=s=>String(s||'').split('+').reduce((a,b)=>a+(Number(b)||0),0);
const mapFocus=t=>abbrFocus(String(t||'').replace(/\s*\((?:primary|secondary)\)/gi,'').replace(/\s*\(\d+ exercises?\)/i,'')).trim();
function mapWeekSets(n){
  if(MCW.has(n)) return MCW.get(n);
  let out=null;
  try{ out=svDays(n).days.map(e=>{const x=e.x, cnt=src=>src&&src.rows?src.rows.reduce((a,r)=>a+mapSetN(liftParse(r.dose).sets),0):0; return {lift:cnt(x&&x.lift),prep:cnt(x&&x.prep),focus:(x&&x.lift&&x.lift.title)||''}}) }catch(e){out=null}
  MCW.set(n,out); return out}
function mapSetsOn(d,kind){const st=day0(A.startDate); if(!st) return kind==='focus'?'':0; const off=Math.round((d-st)/864e5); if(off<0) return kind==='focus'?'':0; const w=mapWeekSets(Math.floor(off/7)+1); return w&&w[off%7]?w[off%7][kind]:(kind==='focus'?'':0)}
// what the plan says about one date
function mapInfo(d){
  const st=day0(A.startDate), ws=MCWK; if(!st||!ws||!ws.length) return null;
  const off=Math.round((d-st)/864e5); if(off<0||off>=ws.length*7) return null;
  const w=ws[Math.floor(off/7)], day=off%7+1, pw=off>0?ws[Math.floor((off-1)/7)]:null;
  const sc=(w.rows||[]).reduce((a,x)=>a+(x.day===day?(x.wv||0):0),0)/12;
  const pk=strPick(), hit=(A.str&&A.str.on)?laneAt(MCSL,d):null, fam=hit?(hit.b.fam||pk.fam):'', ph=hit?String(hit.b.ph||pk.ph):'';
  return {w,day,off,sc,sets:mapSetsOn(d,'lift'),focus:mapSetsOn(d,'focus'),newBlock:off===0||(pw&&pw.bi!==w.bi),
    str:(hit&&fam&&fam!=='none')?{fam,ph,start:hit.wi===1&&hit.dd===1}:null,
    test:MCT.has(w.n), comp:A.compDate===ymd(d)}}
const mapPhase=w=>w.off?(w.deload?'Deload':'Off week'):(w.code+((w.uses&&w.focus)?' · '+w.focus:''));
function mapDetail(d){
  const box=el('div','mcdet'), info=mapInfo(d), total=MCWK.length;
  const hd=el('div','mcdh'); hd.append(el('b',null,d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'})));
  if(!info){ if(A.compDate===ymd(d)){hd.append(el('span','mcdc comp','Competition'))} box.append(hd); box.append(el('div','qs',A.compDate===ymd(d)?'Competition day.':'This date is outside the plan.')); return box}
  const w=info.w; hd.append(el('span','mcdc','Week '+w.n+' of '+total),el('span','mcdc','Day '+(info.off+1)+' of '+(total*7)));
  if(info.test) hd.append(el('span','mcdc tst','Retest week'));
  if(A.deload[w.n]) hd.append(el('span','mcdc dl','Deload applied')); else if(w.sugDl) hd.append(el('span','mcdc dls','Suggested deload'));
  if(info.comp) hd.append(el('span','mcdc comp','Competition'));
  {const eb=el('button','btn sm mcde','Edit day'); eb.type='button'; eb.addEventListener('click',()=>mdEditDay(d)); hd.append(eb)}
  box.append(hd);
  const g=el('div','mcdg'), row=(a,b)=>{g.append(el('span','mcdk',a),el('span','mcdv',b))};
  row('Phase',(w.off?(w.deload?'Deload (patterning only)':'Off week'):w.phase+' · week '+w.pw)+((w.uses&&w.focus)?' · '+w.focus+' focus':''));
  for(const [l,nm] of [['prep','Prep'],['pat','Patterning'],['throw','Throwing'],['lift','Lifting'],['corr','Corrective']]){
    let t='—'; try{ const x=lnDay(l,d); t=!x?'—':x.loading?'Loading…':lnHead(l,x) }catch(e){}
    const n=(l==='lift'||l==='prep')?mapSetsOn(d,l):0; row(nm,t+(n?' · '+n+' sets':''))}
  const wk=mapWeekSets(w.n), sum=k=>wk?wk.reduce((a,x)=>a+x[k],0):0;
  row('This week',w.throws+' throws · rolling '+(w.roll==null?'—':Math.round(w.roll))+' · baseline '+(w.base==null?'—':w.base.toFixed(1))+' · peak '+(w.peak?w.peak+'%':'—')+(sum('lift')?' · lifting '+sum('lift')+' sets':'')+(sum('prep')?' · prep '+sum('prep')+' sets':''));
  box.append(g); return box}
function renderMapCal(weeks){
  const box=$('mcal'); box.textContent=''; const st=day0(A.startDate); box.hidden=!(st&&weeks.length); if(box.hidden) return;
  MCWK=weeks; MCT=new Set(); for(let k=4;k<=weeks.length;k+=4) MCT.add(k); if(weeks.length%4) MCT.add(weeks.length); MCSL=strList();
  MCW=new Map(); MCMAX=0; for(let n=1;n<=weeks.length;n++){const wk=mapWeekSets(n); if(wk) for(const x of wk) MCMAX=Math.max(MCMAX,x.lift)}
  const showT=MAPL!=='lift', showL=MAPL!=='thr';
  const end=addD(st,weeks.length*7-1), cd=day0(A.compDate), last=cd&&cd>end?cd:end, now=new Date(), today=new Date(now.getFullYear(),now.getMonth(),now.getDate(),12), todayK=ymd(today);
  const inPlan=today>=st&&today<=end;
  if(MCS.cur!==cur||!MCS.month||!MCS.sel){MCS.cur=cur; MCS.sel=ymd(inPlan?today:st); const b=inPlan?today:st; MCS.month=ymd(new Date(b.getFullYear(),b.getMonth(),1,12))}
  const m0=new Date(st.getFullYear(),st.getMonth(),1,12), m1=new Date(last.getFullYear(),last.getMonth(),1,12);
  let view=day0(MCS.month); if(view<m0) view=m0; if(view>m1) view=m1;
  const redraw=()=>renderMapCal(MCWK);
  const go=n=>{view=new Date(view.getFullYear(),view.getMonth()+n,1,12); MCS.month=ymd(view); redraw()};
  const hd=el('div','mch'), pv=el('button','mcnb','‹'), nx=el('button','mcnb','›'), tt=el('span','mct',view.toLocaleDateString(undefined,{month:'long',year:'numeric'})), tb=el('button','btn sm','Today');
  pv.type=nx.type=tb.type='button'; pv.setAttribute('aria-label','Previous month'); nx.setAttribute('aria-label','Next month'); pv.disabled=view<=m0; nx.disabled=view>=m1;
  pv.addEventListener('click',()=>go(-1)); nx.addEventListener('click',()=>go(1));
  tb.addEventListener('click',()=>{const b=inPlan?today:st; MCS.sel=ymd(b); MCS.month=ymd(new Date(b.getFullYear(),b.getMonth(),1,12)); redraw()});
  hd.append(pv,tt,nx,tb,el('span','note','Plan: '+fmt(st)+' to '+fmt(end)+' · '+weeks.length+' weeks'));
  {const sg=el('div','seg sm'); sg.setAttribute('role','group'); sg.setAttribute('aria-label','What the calendar shows');
   for(const [v,t] of [['thr','Throwing'],['lift','Lifting'],['both','Both']]){const b=el('button','segb'+(MAPL===v?' on':''),t); b.type='button'; b.setAttribute('aria-pressed',String(MAPL===v)); b.addEventListener('click',()=>{ if(MAPL===v) return; MAPL=v; try{localStorage.setItem(MAPLK,v)}catch(e){} redraw() }); sg.append(b)}
   hd.append(sg)}
  box.append(hd);
  const grid=el('div','mcg'); for(const n of ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']) grid.append(el('span','mcwd',n));
  const first=new Date(view.getFullYear(),view.getMonth(),1,12), dim=new Date(view.getFullYear(),view.getMonth()+1,0,12).getDate(), rows=Math.ceil((first.getDay()+dim)/7), gs=addD(first,-first.getDay());
  for(let i=0;i<rows*7;i++){
    // a row of the month that holds no day of the plan and no competition is left out
    if(i%7===0){let any=false; for(let j=0;j<7;j++){const dj=addD(gs,i+j); if(mapInfo(dj)||A.compDate===ymd(dj)){any=true; break}} if(!any){i+=6; continue}}
    const d=addD(gs,i), k=ymd(d), om=d.getMonth()!==view.getMonth(), info=mapInfo(d);
    const tint=!info?' xp':MAPL==='lift'?((info.sets>0||info.focus)?' lf':' nl'):(info.w.off?' off':info.w.mound?' mound':' build');
    const cls='mcd'+(om?' om':'')+tint+(k===MCS.sel?' sel':'')+(k===todayK?' today':'')+(info&&info.test?' tst':'')+(A.compDate===k?' comp':'');
    const c=el('button',cls); c.type='button'; c.setAttribute('aria-label',d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})+(info?', week '+info.w.n+', '+mapPhase(info.w)+(info.focus?', lifting '+mapFocus(info.focus):''):'')); c.setAttribute('aria-pressed',String(k===MCS.sel));
    const top=el('span','mcdt'); top.append(el('span','mcn1',String(d.getDate()))); if(info&&info.day===1) top.append(el('span','mcwk','W'+info.w.n)); c.append(top);
    if(info){
      const first1=d.getDate()===1;
      if(showT&&(info.newBlock||first1)) c.append(el('span','mctg thr',mapPhase(info.w)));
      if(showL&&info.str&&(info.str.start||first1)) c.append(el('span','mctg str',info.str.fam+' P'+info.str.ph+(info.str.fam!=='ML'?' + prep':'')));
      // the throwing score sits in the middle of the day, the flags and the lifting focus along the bottom
      const mid=el('span','mcm');
      if(showT&&info.sc&&!info.w.off){const s=el('span','mcsc'+(info.sc>=7?' hot':''),String(Math.round(info.sc))); s.style.setProperty('--h',Math.min(info.sc/12,1).toFixed(3)); s.title='Day score '+info.sc.toFixed(2); mid.append(s)}
      c.append(mid);
      const bt=el('span','mcb');
      if(info.test&&info.day===1) bt.append(el('span','mcfl tst','Retest'));
      if(!A.deload[info.w.n]&&info.w.sugDl&&info.day===1) bt.append(el('span','mcfl dls','Deload'));
      if(info.comp) bt.append(el('span','mcfl comp','Comp'));
      if(showL&&(info.focus||info.sets>0)){const s=el('span','mcsc lf',info.focus?mapFocus(info.focus):'Lifting'); s.title='Lifting: '+(info.focus||'custom day')+(info.sets?' \u00b7 '+info.sets+' working sets':''); bt.append(s)}
      c.append(bt)
    } else if(A.compDate===k){ const bt=el('span','mcb'); bt.append(el('span','mcfl comp','Comp')); c.append(bt) }
    mdBind(c,d,true); c.addEventListener('click',()=>{MCS.sel=k; if(om) MCS.month=ymd(new Date(d.getFullYear(),d.getMonth(),1,12)); redraw()});
    grid.append(c)}
  box.append(grid);
  const lg=el('div','mcl'), li=[]; if(showT) li.push(['build','Build phase'],['mound','Mound phase'],['off','Deload or off'],['sc','Day score (stronger blue = harder)'],['hot','Day score 7 or more']);
  if(showL) li.push(['lfd','Lifting day'],['lf','Lifting focus for the day']);
  li.push(['tst','Retest week'],['dls','Suggested deload'],['comp','Competition'],['today','Today']);
  for(const [cls,t] of li){const i=el('span','mcli'); i.append(el('i','sw '+cls),document.createTextNode(t)); lg.append(i)}
  box.append(lg);
  box.append(mapDetail(day0(MCS.sel)||st))}

// ================= exercise search: pops up under an exercise name while editing a day =================
let EXPO=null;
const EXC={key:'',pools:null};
const exNorm=s=>String(s||'').toLowerCase().replace(/\s+/g,' ').trim();
const exTok=s=>exNorm(s).split(/[^a-z0-9]+/).filter(Boolean);
function exClose(){ if(EXPO){ const o=EXPO; EXPO=null; o.off() } }
// the exercises each kind of day can draw from, built from the program library and cached until it changes
function exPools(){
  const key=[SDATA?SDATA.ex.length:0,PAT&&PAT.blocks?Object.keys(PAT.blocks).length:0,D.drills.length,loadCustom().length].join('|');
  if(EXC.pools&&EXC.key===key) return EXC.pools; EXC.key=key;
  const mk=()=>({list:[],seen:new Set()}), P={lift:mk(),prep:mk(),throw:mk(),pat:mk(),corr:mk()};
  const add=(pool,name,cat)=>{const v=String(name||'').replace('*',' · ').trim(); if(!v) return; const k=exNorm(v); if(pool.seen.has(k)) return; pool.seen.add(k); pool.list.push({name:v,k,cat:cat||''})};
  if(SDATA) for(const code in SDATA.p){ const prep=/prep/i.test(code), pool=prep?P.prep:P.lift, p=SDATA.p[code];
    for(const dur in p.d) for(const day of p.d[dur].days) for(const r of day[3]){ const raw=SDATA.ex[r[1]]; if(!raw) continue; const full=tidyN(raw), m=full.match(/^(.*?)\s[-—]\s/); add(pool,prep?full:liftName(full),m?m[1]:'') } }
  for(const q of D.drills) add(P.throw,q[0],q[1]); for(const c of loadCustom()) add(P.throw,c.name,'Custom drill');
  for(const code in (D.S||{})) for(const row of D.S[code]) for(let k=10;k<row.length;k++) if(typeof row[k]==='string') add(P.throw,row[k],'');
  if(PAT&&PAT.blocks) for(const k in PAT.blocks) for(const n of PAT.blocks[k].drills) add(P.pat,n.replace(/\s*\(\s*\d+\s*[x×]\s*\d+[^)]*\)\s*$/i,''),'Patterning');
  for(const l of ['lift','prep','pat']) for(const it of P[l].list) add(P.corr,it.name,it.cat);
  for(const l in P) P[l].list.sort((a,b)=>a.name.localeCompare(b.name));
  EXC.pools=P; return P }
// typed words can match anywhere, in any order; words at the start of the name or of a word rank higher
function exSearch(pool,q,orig){
  const list=pool.list, toks=exTok(q);
  if(!toks.length){ // nothing typed yet: show the exercises that sit next to the current one
    const m=String(orig||'').match(/^(.*?)\s[-—]\s/), cat=exNorm(m?m[1]:String(orig||'').split(/\s+/)[0]);
    const same=cat?list.filter(it=>exNorm(it.cat)===cat||it.k.startsWith(cat)):[];
    return {title:same.length?'Similar to the current exercise':'Exercise library',items:(same.length?same:list).slice(0,40)}}
  const scored=[];
  for(const it of list){ const hay=it.k+' '+exNorm(it.cat); let s=0, ok=true;
    for(const t of toks){ const i=hay.indexOf(t); if(i<0){ok=false; break} s+=i===0?40:(/[^a-z0-9]/.test(hay[i-1])?25:8) }
    if(!ok) continue; if(it.k.includes(exNorm(q))) s+=30; s-=it.k.length*0.04; scored.push([s,it])}
  scored.sort((a,b)=>b[0]-a[0]||a[1].name.localeCompare(b[1].name));
  return {title:scored.length?scored.length+' match'+(scored.length>1?'es':'')+' in the library':'No match in the library',items:scored.slice(0,40).map(x=>x[1])}}
function exMark(text,toks){
  const frag=document.createDocumentFragment(); if(!toks.length){frag.append(text); return frag}
  const re=new RegExp('('+toks.map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')','ig'); let last=0, m;
  while((m=re.exec(text))){ if(m.index>last) frag.append(text.slice(last,m.index)); frag.append(el('b',null,m[0])); last=m.index+m[0].length; if(m[0].length===0) re.lastIndex++ }
  if(last<text.length) frag.append(text.slice(last)); return frag}
function exPick(input,lane,commit){
  input.autocomplete='off'; input.setAttribute('role','combobox'); input.setAttribute('aria-autocomplete','list'); input.setAttribute('aria-expanded','false');
  const orig=input.value; let typed=false, act=-1, items=[], pop=null, offs=[];
  const place=()=>{ if(!pop) return; const r=input.getBoundingClientRect(), vw=window.innerWidth, vh=window.innerHeight, vv=window.visualViewport, vt=vv?vv.offsetTop:0, vb=vv?Math.min(vh,vt+vv.height):vh, w=Math.min(460,vw-16), left=Math.min(Math.max(8,r.left),vw-w-8);
    pop.style.width=w+'px'; pop.style.left=left+'px'; const below=vb-r.bottom-8, above=r.top-vt-8, h=Math.min(pop.scrollHeight,340);
    if(below<Math.min(h,220)&&above>below){pop.style.top='auto'; pop.style.bottom=(vh-r.top+4)+'px'; pop.style.maxHeight=Math.min(340,above)+'px'} else {pop.style.bottom='auto'; pop.style.top=(r.bottom+4)+'px'; pop.style.maxHeight=Math.min(340,Math.max(160,below))+'px'} };
  const choose=it=>{ if(it.use){ exClose(); input.blur(); return } exClose(); input.value=it.name; const d=(lane==='pat'&&PAT&&PAT.dose)?PAT.dose[it.k]:''; let dose=null; if(d){const m=String(d).match(/^(\d+)\s*[x×]\s*(.+)$/i); if(m) dose={sets:m[1],reps:m[2].trim()}} commit(it.name,dose) };
  const draw=()=>{
    if(!pop) return; pop.textContent='';
    const pools=exPools(), pool=pools[lane]||pools.corr, ready=pool.list.length;
    if(!ready){ pop.append(el('div','exe','The exercise library is still loading. You can type a name as written.')); place(); return }
    const q=typed?input.value:'', res=exSearch(pool,q,orig), toks=exTok(q); items=res.items.slice();
    pop.append(el('div','exph',res.title));
    const useRow=typed&&input.value.trim()&&!items.some(it=>it.k===exNorm(input.value)); if(useRow) items.push({use:true}); act=items.length?0:-1;
    items.forEach((it,i)=>{const b=el('button','exi'+(it.use?' exu':'')+(i===act?' on':'')); b.type='button'; b.id='exi'+i; b.setAttribute('role','option');
      if(it.use) b.append(el('span','exn','Use \u201c'+input.value.trim()+'\u201d as written'));
      else{const nm=el('span','exn'); nm.append(exMark(it.name,toks)); b.append(nm); if(it.cat&&exNorm(it.cat)!==exNorm(it.name)) b.append(el('small',null,it.cat))}
      b.addEventListener('mousedown',e=>e.preventDefault()); b.addEventListener('click',()=>choose(it)); b.addEventListener('mousemove',()=>{act=i; mark()}); pop.append(b)});
    place()};
  const mark=()=>{ if(!pop) return; [...pop.querySelectorAll('.exi')].forEach((b,i)=>{b.classList.toggle('on',i===act); if(i===act){ input.setAttribute('aria-activedescendant',b.id); b.scrollIntoView({block:'nearest'}) }}) };
  const open=()=>{
    if(EXPO&&EXPO.input===input) return; exClose();
    pop=el('div','expop'); pop.setAttribute('role','listbox'); root.append(pop); input.setAttribute('aria-expanded','true');
    const outside=e=>{const p=e.composedPath(); if(!p.includes(pop)&&!p.includes(input)) exClose()};
    const vv=window.visualViewport; window.addEventListener('scroll',place,true); window.addEventListener('resize',place); document.addEventListener('pointerdown',outside,true); if(vv){vv.addEventListener('resize',place); vv.addEventListener('scroll',place)}
    offs=[()=>window.removeEventListener('scroll',place,true),()=>window.removeEventListener('resize',place),()=>document.removeEventListener('pointerdown',outside,true),()=>{if(vv){vv.removeEventListener('resize',place); vv.removeEventListener('scroll',place)}}];
    EXPO={input,off:()=>{offs.forEach(f=>f()); offs=[]; if(pop){pop.remove(); pop=null} input.setAttribute('aria-expanded','false')}};
    draw()};
  input.addEventListener('focus',()=>{input.select(); open()}); input.addEventListener('click',open);
  input.addEventListener('input',()=>{typed=true; open(); draw()});
  input.addEventListener('keydown',e=>{
    if(e.key==='Escape'){ if(EXPO&&EXPO.input===input){e.preventDefault(); e.stopPropagation(); input.value=orig; exClose()} return }
    if(!pop) return;
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){ e.preventDefault(); if(items.length){ act=(act+(e.key==='ArrowDown'?1:-1)+items.length)%items.length; mark() } }
    else if(e.key==='Enter'){ if(act>=0&&items[act]&&typed){ e.preventDefault(); choose(items[act]) } else { exClose(); input.blur() } }
    else if(e.key==='Tab'){ exClose() } })}

// ================= Training Map: hover a day to see it, edit the day, then edit the whole week =================
const MD=(window.__vmd=window.__vmd||{open:false,mode:'peek',dk:'',pin:false,cur:'',t:0,lane:'all'});   // kept while the page redraws
let MDP=null, MDK=null, MDWK=[], MDSH=0, MDHD=0;   // the floating card, the dim layer behind the week panel, the weeks drawn last, show and hide timers
const mdAt=dt=>{const st=day0(A.startDate); if(!st||!MDWK.length) return null; const off=Math.round((dt-st)/864e5); if(off<0||off>=MDWK.length*7) return null; return {w:MDWK[Math.floor(off/7)],day:off%7+1,off}};
const mdScore=(w,day)=>(w.rows||[]).reduce((a,x)=>a+(x.day===day?(x.wv||0):0),0)/12;
const mdWeekDates=w=>{const o=[]; for(let d=1;d<=7;d++){const x=dateFor(w.n,d); if(x) o.push(x)} return o};
function mdTear(){ if(MDP){MDP.remove(); MDP=null} if(MDK){MDK.remove(); MDK=null} for(const n of root.querySelectorAll('.mdon')) n.classList.remove('mdon') }
function mdClose(){ clearTimeout(MDSH); clearTimeout(MDHD); MD.open=false; MD.mode='peek'; MD.pin=false; MD.pos=null; exClose(); mdTear() }
// a day square or cell: resting the pointer on it shows the day, a click holds the card open
function mdBind(n,dt,noHover){
  mdWire(); n.dataset.dk=ymd(dt); n.classList.add('mdq'); if(MD.open&&MD.dk===n.dataset.dk) n.classList.add('mdon');
  if(noHover) return;
  n.addEventListener('pointerenter',e=>{ if(e.pointerType!=='touch') mdHover(dt) });
  n.addEventListener('pointerleave',e=>{ if(e.pointerType!=='touch') mdLeave() });
  n.addEventListener('click',()=>mdPick(dt)) }
function mdHover(dt){
  clearTimeout(MDHD); clearTimeout(MDSH); if(MD.open&&(MD.pin||MD.mode!=='peek')) return; if(MD.open&&MD.dk===ymd(dt)) return;
  MDSH=setTimeout(()=>{ MD.open=true; MD.mode='peek'; MD.pin=false; MD.dk=ymd(dt); MD.pos=null; mdRender() },MD.open?260:150) }
function mdLeave(){ clearTimeout(MDSH); if(MD.open&&!MD.pin&&MD.mode==='peek'){ clearTimeout(MDHD); MDHD=setTimeout(mdClose,280) } }
function mdPick(dt){
  clearTimeout(MDSH); clearTimeout(MDHD); const dk=ymd(dt);
  if(MD.open&&MD.mode==='week') return;
  if(MD.open&&MD.mode==='peek'&&MD.pin&&MD.dk===dk){ mdClose(); return }
  MD.open=true; MD.pin=true; MD.dk=dk; MD.pos=null; if(MD.mode!=='day') MD.mode='peek'; mdRender() }
// open the editor for a date straight away (the calendar view's day details use this)
function mdEditDay(dt){ clearTimeout(MDSH); clearTimeout(MDHD); MD.open=true; MD.pin=true; MD.mode='day'; MD.dk=ymd(dt); MD.pos=null; mdRender() }
function mdShell(cls){
  if(MDP&&MDP._cls===cls) return MDP;
  mdTear(); const p=el('div',cls); p._cls=cls; p.setAttribute('role','dialog'); p.setAttribute('aria-label',cls==='mdw'?'Edit the week':'Day plan');
  p.addEventListener('pointerenter',()=>clearTimeout(MDHD)); p.addEventListener('pointerleave',()=>{ if(!MD.pin&&MD.mode==='peek'){ clearTimeout(MDHD); MDHD=setTimeout(mdClose,280) } });
  root.append(p); MDP=p; return p }
// keep the scroll position and the cursor when the card is redrawn after an edit
function mdKeep(p){const b=p.querySelector('.mdb'), a=root.activeElement; return {top:b?b.scrollTop:0,left:b?b.scrollLeft:0,fk:a&&a.dataset&&a.dataset.fk,s:a&&a.selectionStart,e:a&&a.selectionEnd}}
function mdBack(p,k,moved){const b=p.querySelector('.mdb'); if(b&&!moved){b.scrollTop=k.top; b.scrollLeft=k.left} if(k.fk&&!moved){const x=[...p.querySelectorAll('input[data-fk]')].find(i=>i.dataset.fk===k.fk); if(x){x.focus({preventScroll:true}); try{x.setSelectionRange(k.s,k.e)}catch(_){}}}}
function mdPlace(final){
  const p=MDP; if(!p) return; const vw=window.innerWidth, ih=window.innerHeight, vv=window.visualViewport, vt=vv?vv.offsetTop:0, vh=vv?Math.min(ih,vv.height):ih, vb=vt+vh;   // vh: what is really visible (a phone keyboard covers part of the page)
  if(p._cls==='mdw'){ const w=Math.min(1900,vw-24); p.style.width=w+'px'; p.style.left=Math.max(12,Math.round((vw-w)/2))+'px'; p.style.top=Math.round(vt+vh*.03)+'px'; p.style.bottom='auto'; p.style.maxHeight=Math.round(vh*.94)+'px'; return }
  const w=Math.min(MD.mode==='peek'||MD.mode==='day'?760:430,vw-16); p.style.width=w+'px'; let pos=MD.pos;
  if(!pos){
    p.style.maxHeight='none';   // measure the card at its natural height, not the height it was last squeezed to
    let r=null; for(const n of root.querySelectorAll('.mdq[data-dk="'+MD.dk+'"]')){const b=n.getBoundingClientRect(); if(b.width&&b.height){r=b; break}}
    if(r&&(r.bottom<vt+24||r.top>vb-24)) r=null;   // the day is scrolled out of sight: place the card in the middle of the screen
    if(r) MD.r={l:r.left,t:r.top,w:r.width,h:r.height}; else if(MD.r&&!(MD.r.t+MD.r.h<vt+24||MD.r.t>vb-24)) r={left:MD.r.l,top:MD.r.t,width:MD.r.w,height:MD.r.h,bottom:MD.r.t+MD.r.h}; else r={left:vw/2-10,top:vt+vh/3,width:20,height:20,bottom:vt+vh/3+20};
    const h=Math.max(p.offsetHeight,240), below=vb-r.bottom-12, above=r.top-vt-12, side=(below>=Math.min(h,380)||below>=above)?'below':'above', left=Math.min(Math.max(8,r.left+r.width/2-w/2),vw-w-8);
    pos=((MD.mode!=='peek'||MD.pin)&&Math.max(below,above)<Math.min(h,520))
      ? {left,side:'top',y:vt+12,room:vh-24}   // a short window (a phone): a card that is held open takes the whole height instead of a strip beside the day
      : {left,side,y:side==='below'?r.bottom+6:ih-r.top+6,room:side==='below'?below:above};
    if(final&&MD.mode!=='peek') MD.pos=pos }   // an open editor keeps the place it got once its content was in, while it is redrawn
  p.style.left=pos.left+'px'; p.style.maxHeight=Math.max(240,Math.min(pos.room,Math.round(vh*.88)))+'px';
  if(pos.side==='above'){p.style.bottom=pos.y+'px'; p.style.top='auto'} else {p.style.top=pos.y+'px'; p.style.bottom='auto'} }
// the title, the day score and the week figures, updated in place so the buttons under the pointer are never replaced
function mdHeadFill(dt,at){
  const p=MDP; if(!p||!p._h) return; const w=at.w, h=p._h, N=MDWK.length;
  if(p._cls==='mdw'){
    const ds=mdWeekDates(w); h.t1.textContent='Week '+w.n+' of '+N+(ds.length?' · '+fmt(ds[0])+' – '+fmt(ds[ds.length-1]):'');
    h.t2.textContent=mapPhase(w)+' · '+w.throws+' throws · rolling '+(w.roll==null?'—':Math.round(w.roll))+' · peak '+(w.peak?w.peak+'%':'—');
    if(p._chips) for(const [dk,c] of p._chips){const d=day0(dk), a=d&&mdAt(d), s=a?mdScore(a.w,a.day):0; c.textContent=s?String(Math.round(s)):'–'; c.classList.toggle('hot',s>=7); c.title=s?'Day score '+s.toFixed(2):'No throwing'}
  } else {
    h.t1.textContent=dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
    h.t2.textContent='Week '+w.n+' of '+N+' · Day '+at.day+' · '+mapPhase(w);
    const s=mdScore(w,at.day); h.sc.textContent=s?String(Math.round(s)):'–'; h.sc.classList.toggle('hot',s>=7); h.sc.title=s?'Day score '+s.toFixed(2):'No throwing'
  } }
function mdHead(){ if(!MDP||!MD.open) return; const dt=day0(MD.dk), at=dt&&mdAt(dt); if(at) mdHeadFill(dt,at) }
function mdDayView(dt,at){
  const edit=MD.mode==='day', p=mdShell('mdp'), keep=mdKeep(p);
  p.textContent=''; const hd=el('div','mdh'), tt=el('div','mdt'), t1=el('b'), t2=el('span'), sc=el('span','mdsc'); tt.append(t1,t2); p._h={t1,t2,sc};
  const go=el('button','btn sm primary mdgo',edit?'Edit the week':'Edit day'); go.type='button';
  go.addEventListener('click',()=>{ MD.pin=true; MD.pos=edit?null:MD.pos; MD.mode=edit?'week':'day'; mdRender() });
  const x=el('button','mdx','✕'); x.type='button'; x.setAttribute('aria-label','Close'); x.addEventListener('click',mdClose);
  hd.append(tt,sc,go,x); const body=el('div','mdb'); p.append(hd,body);
  if(edit){const f=el('div','mdf'), st=el('span','note'); st.id='mdst'; f.append(el('span',null,'Changes save to the plan as you make them.'),st); p.append(f)}
  mdHeadFill(dt,at); mdPlace();
  {const W=body.clientWidth-24; buildGrid(body,[dt],{edit,all:true,noHead:true,compact:!edit,layer:root,scroller:body,width:W,lanesCols:W>=640?2:1})}
  mdPlace(true); mdBack(p,keep,lnFocusPending(body)) }
function mdWeekView(dt,at){
  const w=at.w, p=mdShell('mdw'), keep=mdKeep(p), ds=mdWeekDates(w);
  if(!MDK){ MDK=el('div','mdk'); MDK.addEventListener('click',mdClose); MDK.addEventListener('wheel',e=>e.preventDefault(),{passive:false}); root.insertBefore(MDK,p) }
  p.textContent=''; const hd=el('div','mdh'), tt=el('div','mdt'), t1=el('b'), t2=el('span'); tt.append(t1,t2); p._h={t1,t2}; p._chips=new Map();
  const nav=(txt,lab,dn)=>{const b=el('button','btn sm',txt); b.type='button'; b.setAttribute('aria-label',lab); b.disabled=!MDWK[w.n-1+dn]; b.addEventListener('click',()=>{const d=dateFor(w.n+dn,at.day); if(d){MD.dk=ymd(d); mdRender()}}); return b};
  const done=el('button','btn sm primary mdgo','Done'); done.type='button'; done.addEventListener('click',mdClose);
  hd.append(tt,nav('←','Previous week',-1),nav('→','Next week',1),done);
  const tl=el('div','mdtl'), sg=el('div','seg sm'); sg.setAttribute('role','group'); sg.setAttribute('aria-label','Lanes shown'); tl.append(el('span','note','Show'),sg);
  for(const [v,t] of [['all','All'],...LANES.map(l=>[l,LCFG[l].name])]){const b=el('button','segb'+(MD.lane===v?' on':''),t); b.type='button'; b.setAttribute('aria-pressed',String(MD.lane===v)); b.addEventListener('click',()=>{ if(MD.lane===v) return; MD.lane=v; mdRender() }); sg.append(b)}
  const body=el('div','mdb'), f=el('div','mdf'), st=el('span','note'); st.id='mdst'; f.append(el('span',null,'Hold a day heading to swap whole days, hold an exercise to move it. Changes save to the plan as you make them.'),st); p.append(hd,tl,body,f);
  mdHeadFill(dt,at); mdPlace();
  buildGrid(body,ds,{edit:true,all:true,layer:root,scroller:body,width:body.clientWidth-24,focusDk:MD.dk,lanes:MD.lane==='all'?null:[MD.lane],chip:d=>{const c=el('span','ldsc'); p._chips.set(ymd(d),c); return c}});
  mdHeadFill(dt,at); mdPlace(); mdBack(p,keep,lnFocusPending(body)) }
function mdRender(){
  if(!MD.open||!MV){ mdTear(); return }
  const dt=day0(MD.dk), at=dt&&mdAt(dt); if(!at){ mdClose(); return }
  MD.t=Date.now(); MD.cur=cur;
  if(MD.mode==='week') mdWeekView(dt,at); else mdDayView(dt,at);
  for(const n of root.querySelectorAll('.mdq')) n.classList.toggle('mdon',n.dataset.dk===MD.dk) }
// the page was redrawn: keep the card in step (a field edit only needs the figures refreshed)
function mdRefresh(weeks,quiet){
  MDWK=weeks; if(!MD.open) return;
  if((MD.cur&&MD.cur!==cur)||(!MDP&&Date.now()-MD.t>4000)){ MD.open=false; MD.mode='peek'; MD.pin=false; return }
  if(quiet&&MDP) mdHead(); else mdRender() }
function mdWire(){ if(mdWire.on) return; mdWire.on=true;
  const esc=e=>{ if(!host.isConnected){window.removeEventListener('keydown',esc); return} if(e.key==='Escape'&&MD.open&&!EXPO) mdClose() };
  const away=e=>{ if(!host.isConnected){document.removeEventListener('pointerdown',away,true); return} if(!MD.open||MD.mode!=='peek'||!MD.pin||EXPO) return; const pth=e.composedPath(); if((MDP&&pth.includes(MDP))||pth.some(n=>n&&n.classList&&n.classList.contains('mdq'))) return; mdClose() };
  // the window or the visible area changed (a phone keyboard opened or closed): while a box is being typed in only the card's size follows, otherwise it is laid out again
  const rz=()=>{ if(!host.isConnected){window.removeEventListener('resize',rz); if(window.visualViewport) window.visualViewport.removeEventListener('resize',rz); return} if(!MD.open) return; clearTimeout(rz.t); rz.t=setTimeout(()=>{ if(!MD.open) return; const a=root.activeElement; if(a&&a.tagName==='INPUT'){ mdPlace(); return } MD.pos=null; mdRender() },200) };
  window.addEventListener('keydown',esc); document.addEventListener('pointerdown',away,true); window.addEventListener('resize',rz); if(window.visualViewport) window.visualViewport.addEventListener('resize',rz) }
// the program's throwing rows, with every day the coach edited swapped for the edited drills, so day scores, throws and the rolling score follow the edits
function statRows(w){
  const rows=weekRows(w), T=(A.laneDays||{}).throw; if(!T||w.off) return rows;
  const ed={}; for(let d=1;d<=7;d++){const dt=dateFor(w.n,d), o=dt&&T[ymd(dt)]; if(o&&Array.isArray(o.rows)) ed[d]=o}
  if(!Object.keys(ed).length) return rows;
  const out=rows.filter(r=>!ed[r.day]||r.plan);
  for(const d in ed) for(const r of ed[d].rows){ if(r.info) continue;
    const reps=parseFloat(r.reps)||0, sets=Number(r.sets)||(reps?1:0), rpe=parseFloat(r.int)||0, nm=String(r.name||'');
    out.push({day:+d,slot:'e'+r.id,label:'',base:nm,name:nm,weight:r.ball||'',weight0:r.ball||'',reps0:reps,rpe0:rpe,ed:{},dl:false,sets,reps,rpe,wv:sets*reps*mult(rpe),k:'ed:'+r.id,target:'',swapped:false,edited:true}) }
  return out}

// ================= Athlete's View: the day as the athlete follows it =================
// Exercise library (the Athletes Warehouse video database): a video for each exercise, what has to be entered for it, and the list the swap search draws from.
const XLURL='/athlete-management/athlete/exercise-library.json?v=1', VFK='velou.videos.fix';
let XL=null, XLP=null, XLC=new Map();   // XL: null until loaded, false if it could not be
let VFIX=(()=>{try{return JSON.parse(localStorage.getItem(VFK)||'{}')||{}}catch(e){return {}}})();   // videos a coach corrected, shared by every athlete
const XSYN=[[/\bsingle[ -]?leg\b/g,'sl'],[/\bs\/l\b/g,'sl'],[/\bsingle[ -]?arm\b/g,'sa'],[/\bs\/a\b/g,'sa'],[/\bhalf[ -]?kneeling\b/g,'hk'],[/\bh\/k\b/g,'hk'],[/\btall[ -]?kneeling\b/g,'tk'],[/\bt\/k\b/g,'tk'],[/\bfront[ -]?rack\b/g,'fr'],[/\bf\/r\b/g,'fr'],[/\boverhead\b/g,'oh'],[/\bbarbell\b/g,'bb'],[/\bdumbbell\b/g,'db'],[/\bkettlebell\b/g,'kb'],[/\bmedicine ball\b/g,'mb'],[/\bmed ball\b/g,'mb'],[/\beccentric\b/g,'ecc'],[/\bconcentric\b/g,'conc'],[/\bisometric\b/g,'iso'],[/\bpush[ -]?ups?\b/g,'pushup'],[/\bpull[ -]?ups?\b/g,'pullup'],[/\bchin[ -]?ups?\b/g,'chinup'],[/\bstep[ -]?ups?\b/g,'stepup'],[/\bstep[ -]?downs?\b/g,'stepdown'],[/\bsit[ -]?ups?\b/g,'situp'],[/\bkick[ -]?ups?\b/g,'kickup'],[/\bdepth drops?\b/g,'depth jump']];
const XKEY=new Set('lateral reverse backward forward sl sa hk tk incline decline bulgarian rotational'.split(' ')), XSTOP=new Set('the a an of to and with on in for into at by from up down'.split(' ')), XQUAL=new Set('pause ecc tempo heavy light yielding overcoming iso conc rapid fast slow dead start reactive max effort explosive 1/2 1 2 degree'.split(' '));
function xCore(s){ s=String(s||'').replace(/½/g,' 1/2 ').replace(/°/g,' degree ').replace(/\([^)]*\)/g,' ').replace(/\[[^\]]*\]/g,' ').toLowerCase().replace(/&/g,' and '); for(const [re,to] of XSYN) s=s.replace(re,to); return s.replace(/[^a-z0-9]+/g,' ').trim().split(' ').map(t=>t.length>3&&t.endsWith('s')&&!t.endsWith('ss')?t.slice(0,-1):t).join(' ') }
const xCat=n=>{const m=/^[^-]{2,48}?\s-\s(.+)$/.exec(n); return m?m[1]:n};    // "Sprint - Build-Up Run" -> "Build-Up Run"
const xCat0=n=>{const m=/^([^-]{2,48}?)\s-\s/.exec(n); return m?m[1]:''};
const xToks=s=>xCore(s).split(' ').filter(t=>t&&!XSTOP.has(t));
function xlLoad(){ if(XLP) return XLP; XLP=fetch(XLURL,{credentials:'same-origin'}).then(r=>{if(!r.ok) throw new Error('library '+r.status); return r.json()}).then(j=>{
    const S=j.s, E=j.e.map((r,i)=>({i,n:r[0],v:r[1],tr:r[2],cat:S[r[3]],mod:S[r[4]],body:S[r[5]],mus:S[r[6]],pat:S[r[7]],tags:S[r[8]],c:xCore(r[0])})), byc=new Map(), inv=new Map(), df=new Map();
    for(const e of E){ e.t=new Set(xToks(e.n)); if(!byc.has(e.c)) byc.set(e.c,[]); byc.get(e.c).push(e); for(const t of e.t){ df.set(t,(df.get(t)||0)+1); if(!inv.has(t)) inv.set(t,[]); inv.get(t).push(e) } }
    const N=E.length; XL={E,byc,inv,N,idf:t=>Math.log(1+N/(1+(df.get(t)||0)))}; XLC=new Map(); try{render()}catch(e){console.warn(e)} }).catch(e=>{XL=false; console.warn(e)}); return XLP }
const xDice=(q,c)=>{let wi=0,wq=0,wc=0; for(const t of q){const w=XL.idf(t); wq+=w; if(c.has(t)) wi+=w} for(const t of c) wc+=XL.idf(t); return wi?2*wi/(wq+wc):0};
// the library entry for an exercise name: the same name, the same movement with a word added or dropped (pause, eccentric, tempo ...), or nothing
function xFind(name,lane){
  if(!XL||!name) return null; const key=lane+'|'+name; if(XLC.has(key)) return XLC.get(key);
  const pick=l=>{let b=null,bs=-9; for(const e of l){const s=(e.v?10:0)+(lane==='lift'&&e.cat==='Strength'?2:0)+(lane!=='lift'&&e.cat!=='Strength'?1:0); if(s>bs){bs=s; b=e}} return b};
  let res=null; for(const c of [name,xCat(name),xCat(xCat(name))]){ const l=XL.byc.get(xCore(c)); if(l&&l.length){ res={e:pick(l),q:'exact',s:1}; break } }
  if(!res){ const q=new Set(xToks(xCat(name))); if(q.size){ const cand=new Set(), q2=new Set([...q].filter(t=>!XQUAL.has(t)));
      for(const t of q) if(XL.idf(t)>1||q.size<=2) for(const e of (XL.inv.get(t)||[])) cand.add(e);
      let top=null, ts=0;
      for(const e of cand){ const c2=new Set([...e.t].filter(t=>!XQUAL.has(t))); if(!q2.size||!c2.size) continue; const sm=q2.size<=c2.size?q2:c2, bg=sm===q2?c2:q2; if(![...sm].every(t=>bg.has(t))) continue;
        let a=0,b=0; for(const t of sm) a+=XL.idf(t); for(const t of bg) b+=XL.idf(t); if(a/b<0.55||(sm.size<2&&bg.size>2)) continue; if([...bg].some(t=>XKEY.has(t)&&!sm.has(t))) continue;
        let s=0.8+0.19*xDice(q2,c2); if(!e.v) s-=0.03; if(s>ts){ts=s; top=e} }
      if(top) res={e:top,q:'variant',s:ts} } }
  XLC.set(key,res); return res }
// links: a code is y:<youtube id>, v:<vimeo id>, e:<path on the Everfit video bucket>, f:<full link>
const EVF='https://everfit-exercise-library-prod.s3-us-west-1.amazonaws.com/';
function vParse(u){u=String(u||'').trim(); if(!u) return ''; let m=/youtu\.be\/([\w-]{11})/.exec(u)||/youtube\.com\/watch\?v=([\w-]{11})/.exec(u)||/youtube\.com\/(?:embed|shorts)\/([\w-]{11})/.exec(u); if(m) return 'y:'+m[1]; m=/vimeo\.com\/(\d+)/.exec(u); if(m) return 'v:'+m[1]; if(u.startsWith(EVF)) return 'e:'+u.slice(EVF.length); return 'f:'+u}
function vInfo(code){ const k=code.slice(0,1), v=code.slice(2);
  if(k==='y') return {kind:'youtube',watch:'https://www.youtube.com/watch?v='+v,embed:'https://www.youtube-nocookie.com/embed/'+v+'?rel=0&playsinline=1'};
  if(k==='v') return {kind:'vimeo',watch:'https://vimeo.com/'+v,embed:'https://player.vimeo.com/video/'+v};
  if(k==='e') return {kind:'mp4',watch:EVF+v,embed:EVF+v};
  return {kind:'link',watch:v,embed:''} }
// the video for an exercise: a coach's correction first, then the throwing and patterning libraries, then the exercise library
function avVid(row){
  const nm=row.eff?row.eff.name:row.name, nk=xCore(nm)||exNorm(nm), fx=VFIX[nk]; if(fx) return Object.assign({code:fx.c,q:'fix',via:fx.n||''},vInfo(fx.c));
  if(row.lane==='throw'||row.lane==='pat'){ const u=(row.name===row.orig&&row.video)||vid(nm); if(u){ const c=vParse(u); if(c) return Object.assign({code:c,q:'sheet',via:''},vInfo(c)) } }
  const m=xFind(nm,row.lane); if(m&&m.e.v) return Object.assign({code:m.e.v,q:m.q,via:m.q==='exact'?'':m.e.n},vInfo(m.e.v));
  return null }
// what the athlete enters for an exercise: a weight, a time, or just a check
function avKind(row,eff){
  const m=xFind(eff.name,row.lane), tr=m?m.e.tr:'', hasPct=/%/.test(String(eff.int||''))||/\d%/.test(String(eff.reps||''));
  const nm=eff.name, plyo=/\b(jump|hop|bound|sprint|skip)s?\b/i.test(nm)&&!/\b(weighted|loaded|vest|sled|resisted)\b/i.test(nm)&&!hasPct, loaded=/\b(sled|carry|weighted|loaded|heavy)\b/i.test(nm);
  const w=(row.lane==='lift'||row.lane==='prep')&&!plyo&&(hasPct||/w/.test(tr)||loaded||(!m&&/\b(BB|DB|KB|barbell|dumbbell|machine|cable|trap bar|plate)\b/i.test(nm)))&&!/^(jump|sprint|crawl)$/i.test(xCat0(nm))||(row.lane==='prep'||row.lane==='lift')&&loaded&&!/^(jump|crawl)$/i.test(xCat0(nm));
  const t=!w&&(/\btimed\b/i.test(nm)||/\b(record|test)\b/i.test(String(eff.reps||'')));
  return {w,t,hold:/^\d+(?:\.\d+)?\s*(?:s|sec|seconds)\b/i.test(String(eff.reps||''))} }

// ---- what the athlete has saved: logs by day, and the changes they asked to keep ----
window.__vav=window.__vav||{}; const AVN=(window.__vav[host.dataset.athlete||'']=window.__vav[host.dataset.athlete||'']||{dk:''});
let AVS=null, AVO=null, AVT=0, AVW=false;
const AVK=()=>'velou.athlete.'+cur;
function avLoad(){ if(AVS&&AVS._for===cur) return AVS; let o=null; try{o=JSON.parse(localStorage.getItem(AVK())||'null')}catch(e){} AVS=Object.assign({logs:{},prefs:{}},o||{}); AVS.prefs=Object.assign({sub:{},adj:{}},AVS.prefs||{}); AVS.prefs.sub=AVS.prefs.sub||{}; AVS.prefs.adj=AVS.prefs.adj||{}; AVS._for=cur; return AVS }
function avSave(){ clearTimeout(AVT); AVT=setTimeout(()=>{ try{const o=Object.assign({},AVS); delete o._for; localStorage.setItem(AVK(),JSON.stringify(o))}catch(e){console.warn(e)} },250) }
// an exercise's log is only stored once something is entered, so looking at a day leaves nothing behind
const avGet=(dk,ek)=>((avLoad().logs[dk]||{})[ek])||null;
const avPut=(dk,ek,X)=>{avLoad(); (AVS.logs[dk]=AVS.logs[dk]||{})[ek]=X};
const avN=v=>{const n=parseFloat(String(v==null?'':v).replace(/[^\d.]/g,'')); return isNaN(n)?0:n};
// "4+1" is four working sets and a bonus set; no sets written means one
function avSetN(s,reps){ const p=String(s==null?'':s).split('+').map(x=>parseInt(x,10)).filter(x=>x>0); if(!p.length) return {n:reps?1:0,bonus:0}; const n=p.reduce((a,b)=>a+b,0); return {n,bonus:p.length>1?p[p.length-1]:0} }
const avBand=t=>{const m=/(\d*\.?\d+)\s*[-–]\s*(\d*\.?\d+)\s*m\/s/i.exec(String(t||'')); return m?{lo:+m[1],hi:+m[2],txt:m[1]+'–'+m[2]+' m/s'}:null};
const avTempo=t=>{const m=/(\d+):(\d+):(\d+):(\d+)/.exec(String(t||'')); return m?m[0]:''};
const avRepN=r=>{const m=/\d+/.exec(String(r||'')); return m?m[0]:''};

// the day: each lane's rows, with the athlete's saved swaps and changes applied
function avModel(dt){
  const dk=ymd(dt); avLoad(); const secs=[]; let ac=false;
  for(const l of LANES){
    const d=lnDay(l,dt); if(!d||d.loading||d.out) continue;
    const rows=[], seen=new Map(), fam=d.fam||'';
    (d.rows||[]).forEach((r,i)=>{
      if(r.info){ rows.push({lane:l,i,info:true,name:r.name,prog:r.info,key:l+'|info|'+exNorm(r.name)}); return }
      const orig=String(r.name||''), nk=xCore(orig)||exNorm(orig), n=(seen.get(nk)||0)+1; seen.set(nk,n);
      const row=Object.assign({},r,{lane:l,i,orig,nk,key:l+'|'+nk+(n>1?'#'+n:''),fam}), X=avGet(dk,row.key)||{}, pf=AVS.prefs;
      const sw=X.sub||pf.sub[nk], adj=Object.assign({},pf.adj[nk]||{},X.adj||{});
      row.name=sw&&sw.n?sw.n:orig; row.swapped=!!(sw&&sw.n); row.saved=!!(pf.sub[nk]&&!X.sub);
      row.eff={name:row.name,sets:adj.sets!=null&&adj.sets!==''?adj.sets:r.sets,reps:adj.reps!=null&&adj.reps!==''?adj.reps:r.reps,int:adj.int!=null&&adj.int!==''?adj.int:r.int,skip:!!adj.skip}; row.adjusted=Object.keys(adj).length>0;
      row.band=avBand(r.tempo)||avBand(r.method); row.tempoCode=avTempo(r.tempo); row.cl=/^\[/.test(String(r.reps||''));
      row.ac=!!row.band||/speed (?:or landing quality )?drops|stop the set (?:the moment|when) speed/i.test(String(r.method||''));   // the acceleration completion rule applies
      rows.push(row)});
    if(rows.length) secs.push({l,name:LCFG[l].name,head:d.rest&&!d.title?LCFG[l].none:lnHead(l,d),rows,fam});
    if(fam==='AC'&&(l==='lift'||l==='prep')) ac=true }
  return {dt,dk,secs,ac} }
// rows that sit in the same lettered slot (A1, A2) are a superset
function avGroups(rows){ const g=[]; for(const r of rows){ const sl=String(r.slot||''), L=r.info?'':sl.replace(/\d+$/,''), last=g[g.length-1]; if(last&&L&&last.L===L&&/\d$/.test(sl)) last.rows.push(r); else g.push({L,rows:[r]}) } for(const x of g) x.ss=x.rows.length>1&&!!x.L&&x.rows.every(r=>/\d$/.test(String(r.slot||''))); return g }
function avTotals(m){ let done=0,all=0; for(const s of m.secs) for(const r of s.rows){ const X=avGet(m.dk,r.key)||{sets:[]}; if(r.info){ all++; if(X.done) done++; continue } if(r.eff.skip) continue; const n=avSetN(r.eff.sets,r.eff.reps).n||1; all+=n; for(let i=0;i<n;i++) if(X.sets[i]&&X.sets[i].ok) done++ } return {done,all} }

// ---- the screen ----
function renderAthlete(){
  const box=$('aview'); box.hidden=false; box.textContent=''; if(A.str.on&&!SDATA) loadStrength(); if(A.pat.on&&!PAT) loadPattern(); xlLoad(); avLoad();
  const today=ymd(new Date(new Date().setHours(12,0,0,0))); if(!AVN.dk) AVN.dk=today;
  const dt=day0(AVN.dk)||day0(today), st=day0(A.startDate), app=el('div','av'); box.append(app);
  const who=el('div','avwho'); who.append(el('b',null,"Athlete’s view"),el('span',null,(host.dataset.athlete||cur)+' · the screen the athlete follows. Logs save in this browser.')); app.append(who);
  const nav=n=>{AVN.dk=ymd(addD(dt,n)); render()}, mkb=(t,l,fn,dis)=>{const b=el('button','avnb',t); b.type='button'; b.setAttribute('aria-label',l); b.disabled=!!dis; b.addEventListener('click',fn); return b};
  const dn=el('div','avdn'); dn.append(mkb('‹','Previous day',()=>nav(-1)),el('div','avdt',dt.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})),mkb('›','Next day',()=>nav(1)),mkb('Today','Back to today',()=>{AVN.dk=''; render()},AVN.dk===today)); app.append(dn);
  if(!st){ app.append(el('p','avmsg','Set a start date in Plan Build to see this athlete’s days.')); return }
  const weeks=planWeeks(), off=Math.round((dt-st)/864e5);
  if(off<0||!weeks.length||off>=weeks.length*7){ app.append(el('p','avmsg',off<0?'The plan starts '+fmt(st)+'.':'This date is past the end of the plan.')); return }
  const w=weeks[Math.floor(off/7)], m=avModel(dt), some=m.secs.some(s=>s.rows.length), busy=(A.str.on&&!SDATA&&sLoading)||(A.pat.on&&!PAT&&pLoading);
  if(!some&&busy){ app.append(el('p','avmsg','Loading the program…')); return }
  if(!some&&A.str.on&&!SDATA){ app.append(el('p','avmsg','The program library could not be loaded. Reload the page to try again.')); return }
  app.append(el('div','avsub','Week '+w.n+' · Day '+(off%7+1)+' · '+(w.off?(w.deload?'Deload':'Off week'):w.code+((w.uses&&w.focus)?' · '+w.focus:''))));
  const pr=el('div','avpr'), bar=el('div','avbar'), fill=el('i'); bar.append(fill); pr.append(bar,el('span','avprt')); app.append(pr);
  const pset=()=>{const t=avTotals(m); fill.style.width=(t.all?Math.round(t.done/t.all*100):0)+'%'; pr.querySelector('.avprt').textContent=t.all?t.done+' of '+t.all+' done':'Nothing planned'; pr.classList.toggle('alld',t.all>0&&t.done>=t.all)}; pset();
  const ct=el('div','avcoach'); ct.append(el('span','note','Coach tools'));
  const rv=el('button','btn sm','Check videos'); rv.type='button'; rv.addEventListener('click',()=>avReview(m));
  const rd=el('button','btn sm','Clear this day’s log'); rd.type='button'; rd.addEventListener('click',()=>{ if(!AVS.logs[m.dk]) return; if(confirm('Clear everything logged for this day?')){ delete AVS.logs[m.dk]; avSave(); render() } }); ct.append(rv,rd); app.append(ct);
  if(m.ac) app.append(avRules());
  if(!some){ app.append(el('p','avmsg','Rest day. Nothing planned for this date.')); return }
  for(const s of m.secs){ const sec=el('section','avl'); sec.dataset.lane=s.l; const hd=el('div','avlh'); hd.append(el('b',null,s.name),el('span',null,s.head)); sec.append(hd);
    for(const g of avGroups(s.rows)){ const wrap=g.ss?el('div','avss'):sec; if(g.ss){ const sh=el('div','avssh'); sh.append(el('b',null,'SUPERSET '+g.L),el('span',null,g.rows.map(r=>r.slot).join(' → ')+' · alternate the sets, rest after each pair')); wrap.append(sh) }
      for(const r of g.rows) wrap.append(r.info?avInfo(m,r,pset):avCard(m,r,pset)); if(g.ss) sec.append(wrap) }
    app.append(sec) }
  const fin=el('button','btn primary avfin','Finish the day'); fin.type='button'; fin.addEventListener('click',()=>{ const t=avTotals(m), L=(AVS.logs[m.dk]=AVS.logs[m.dk]||{}); L._fin=Date.now(); avSave(); fin.textContent=(t.done>=t.all?'All done':t.done+' of '+t.all+' done')+' ✓ saved'; fin.classList.add('on') }); app.append(fin);
  if((AVS.logs[m.dk]||{})._fin){ fin.textContent='Saved ✓'; fin.classList.add('on') } }
function avRules(){ const b=el('div','avrules'), u=el('ul'); b.append(el('b',null,'Acceleration day: follow the completion rules'),u);
  for(const t of ['Every rep is max intent. Start where the exercise says (dead start off the pins, or the start position) and move as fast as you can.','The speed band is marked on each lift. For every set, record the result: in the band, or below it.','The moment speed drops below the band, the set is over. Log the reps you completed and go to the next set.','The bonus set (the "+1") is only done when every set before it held the band.','Rest fully between sets. Quality reps only.']) u.append(el('li',null,t)); return b }
function avInfo(m,r,pset){ const c=el('article','avx avi'), X=avGet(m.dk,r.key)||{sets:[]}, top=el('div','avxh'); const ck=el('button','avck'+(X.done?' on':''),'✓'); ck.type='button'; ck.setAttribute('aria-label','Mark done');
  ck.addEventListener('click',()=>{ X.done=!X.done; avPut(m.dk,r.key,X); ck.classList.toggle('on',X.done); c.classList.toggle('done',X.done); avSave(); pset() }); c.classList.toggle('done',!!X.done); const nm=el('div','avname'); nm.append(el('b',null,r.name),el('span',null,r.prog)); top.append(ck,nm); c.append(top); return c }
function avCard(m,r,pset){
  const e=r.eff, X=avGet(m.dk,r.key)||{sets:[]}, kind=avKind(r,e), nSet=avSetN(e.sets,e.reps), N=nSet.n||1, band=r.band, c=el('article','avx'+(r.ac?' ac':'')+(e.skip?' skip':''));
  c.dataset.k=r.key; const top=el('div','avxh'), attach=()=>avPut(m.dk,r.key,X);
  if(r.slot&&r.lane!=='throw') top.append(el('span','avslot',r.slot));
  const nm=el('div','avname'); nm.append(el('b',null,e.name)); if(r.swapped) nm.append(el('span','avsw',(r.saved?'Your usual swap for ':'Swapped for ')+r.orig)); top.append(nm);
  const v=avVid(r), vb=el('button','avvid'+(v?'':' none'),v?'▶ Video':'No video'); vb.type='button'; vb.addEventListener('click',()=>avWatch(r,v)); top.append(vb); c.append(top);
  const rx=el('div','avrx'), chip=(t,cls)=>rx.append(el('span','avchip'+(cls?' '+cls:''),t));
  chip(N+(nSet.bonus?' ('+(N-nSet.bonus)+' + '+nSet.bonus+' bonus)':'')+' × '+(e.reps||'—'),'main'); if(e.int) chip('@ '+e.int);
  if(band) chip('SPEED '+band.txt,'speed'); if(r.tempoCode) chip('TEMPO '+r.tempoCode,'tempo'); if(r.target) chip('TARGET '+r.target,'speed'); if(r.ball) chip('BALL '+r.ball);
  if(/max(?:imal)?[- ]intent/i.test(String(r.method||''))) chip('MAX INTENT','speed'); if(/VBT/i.test(String(r.method||''))&&!band) chip('VBT','speed'); if(r.ac) chip('ACCELERATION RULES','ac');
  if(r.adjusted) chip('Adjusted','adj'); if(e.skip) chip('Skipped','adj'); c.append(rx);
  if(r.method) c.append(el('p','avcue',r.method));
  if(!e.skip) c.append(avSets(m,r,X,attach,kind,N,nSet,band,pset,c));
  const act=el('div','avact'), btn=(t,fn)=>{const b=el('button','avab',t); b.type='button'; b.addEventListener('click',fn); act.append(b)};
  btn('Swap exercise',()=>avSwap(m,r)); btn('Adjust',()=>avAdjust(m,r)); btn(X.note?'Note ✓':'Add a note',()=>avNote(m,r));
  if(r.swapped||r.adjusted||e.skip) btn('Back to the coach’s version',()=>{ const L=AVS.logs[m.dk]&&AVS.logs[m.dk][r.key]; if(L){ delete L.sub; delete L.adj } delete AVS.prefs.sub[r.nk]; delete AVS.prefs.adj[r.nk]; avSave(); render() }); c.append(act);
  if(X.note) c.append(el('p','avnote',X.note));
  c._dn=()=>{ if(e.skip) return; let ok=true; for(let i=0;i<N;i++) if(!(X.sets[i]&&X.sets[i].ok)) ok=false; c.classList.toggle('done',ok) }; c._dn(); return c }
// the weight the athlete used the last time this exercise was in a log
function avLast(nk,dk){ avLoad(); for(const d of Object.keys(AVS.logs).sort().reverse()){ if(d>=dk) continue; const L=AVS.logs[d]; for(const ek in L){ if(ek.replace(/#\d+$/,'').split('|')[1]!==nk) continue; const s=((L[ek]&&L[ek].sets)||[]).filter(x=>x&&x.ok&&x.w); if(s.length) return s[s.length-1].w } } return '' }
function avSets(m,r,X,attach,kind,N,nSet,band,pset,card){
  const inline=!kind.w&&!kind.t&&!r.ac, box=el('div','avsets'+(inline?' inl':'')), rows=[], last=kind.w?avLast(r.nk,m.dk):'', repsDef=avRepN(r.eff.reps);
  X.sets=X.sets||[]; const need=el0=>{ el0.classList.add('need'); setTimeout(()=>el0.classList.remove('need'),900) };
  for(let i=0;i<N;i++){
    const S=X.sets[i]||{}, bonus=nSet.bonus&&i>=N-nSet.bonus, row=el('div','avset'+(bonus?' bonus':'')), touch=()=>{ X.sets[i]=S; attach() };
    if(!inline) row.append(el('span','avsn',bonus?'+1':String(i+1)));
    let wi=null, ri=null, ti=null, spIn=null, sp=null;
    if(kind.w){ wi=el('input','avin'); wi.inputMode='decimal'; wi.placeholder=last||'lb'; wi.setAttribute('aria-label','Weight in pounds, set '+(i+1)); wi.value=S.w||''; row.append(wi);
      wi.addEventListener('input',()=>{ S.w=wi.value; S.wauto=false; wi.classList.remove('auto'); touch(); avSave(); for(let j=i+1;j<N;j++){ const T=rows[j]; if(T&&!T.S.ok&&(!T.S.w||T.S.wauto)){ T.S.w=wi.value; T.S.wauto=true; T.wi.value=wi.value; T.wi.classList.add('auto') } } });   // the next sets follow the weight just used
      if(!kind.hold){ ri=el('input','avin avrep'); ri.inputMode='numeric'; ri.placeholder=repsDef||'reps'; ri.setAttribute('aria-label','Reps, set '+(i+1)); ri.value=S.r||''; ri.addEventListener('input',()=>{S.r=ri.value; touch(); avSave()}); row.append(ri) } }
    if(kind.t){ ti=el('input','avin'); ti.inputMode='decimal'; ti.placeholder='time (s)'; ti.setAttribute('aria-label','Time in seconds, set '+(i+1)); ti.value=S.t||''; ti.addEventListener('input',()=>{S.t=ti.value; touch(); avSave()}); row.append(ti) }
    if(r.ac){ sp=el('span','avsp');
      if(band){ spIn=el('input','avin avspd'); spIn.inputMode='decimal'; spIn.placeholder='m/s'; spIn.setAttribute('aria-label','Bar speed, set '+(i+1)); spIn.value=S.sp||''; spIn.addEventListener('input',()=>{ S.sp=spIn.value; const v=parseFloat(spIn.value); if(!isNaN(v)) S.res=v>=band.lo?'in':'low'; touch(); avSave(); showRes() }); row.append(spIn) }
      const bi=el('button','avres',band?'In band':'Held'), bl=el('button','avres low',band?'Below':'Dropped'); bi.type=bl.type='button'; bi.addEventListener('click',()=>{S.res=S.res==='in'?'':'in'; touch(); avSave(); showRes()}); bl.addEventListener('click',()=>{S.res=S.res==='low'?'':'low'; touch(); avSave(); showRes()}); sp.append(bi,bl); row.append(sp) }
    const ck=el('button','avck'+(S.ok?' on':''),inline?(S.ok?'✓':String(bonus?'+1':i+1)):'✓'); ck.type='button'; ck.setAttribute('aria-label','Set '+(i+1)+' done'); row.append(ck);
    const showRes=()=>{ if(sp){ const bs=sp.querySelectorAll('.avres'); bs[0].classList.toggle('on',S.res==='in'); bs[1].classList.toggle('on',S.res==='low') } row.classList.toggle('lowspd',S.res==='low'); bonusRule() };
    ck.addEventListener('click',()=>{
      if(row.classList.contains('locked')) return;
      if(!S.ok){
        if(kind.w&&!String(S.w||'').trim()){ wi.focus(); need(wi); return }
        if(r.ac&&!S.res){ need(sp); return }
        if(kind.w&&ri&&S.res==='low'&&!String(S.r||'').trim()){ ri.focus(); need(ri); return }   // speed dropped: say how many reps were completed
        if(kind.t&&!avN(S.t)){ ti.focus(); need(ti); return }
        if(kind.w&&ri&&!String(S.r||'').trim()&&repsDef){ S.r=repsDef; ri.value=repsDef } }
      S.ok=!S.ok; touch(); ck.classList.toggle('on',S.ok); if(inline) ck.textContent=S.ok?'✓':String(bonus?'+1':i+1); row.classList.toggle('ok',S.ok); avSave(); pset(); card._dn&&card._dn() });
    row.classList.toggle('ok',!!S.ok); row.classList.toggle('lowspd',S.res==='low'); box.append(row); rows[i]={row,wi,S,bonus};
    if(kind.w&&!S.w&&i>0&&rows[i-1].S.w){ S.w=rows[i-1].S.w; S.wauto=true; wi.value=S.w }   // the weight from the set before
    if(wi&&S.wauto) wi.classList.add('auto') }
  // the bonus set is earned: every working set held the speed band
  function bonusRule(){ if(!(r.ac&&nSet.bonus)) return; const work=rows.filter(x=>!x.bonus), lowed=work.some(x=>x.S.res==='low'); for(const x of rows) if(x.bonus){ x.row.classList.toggle('locked',lowed); let n=x.row.querySelector('.avlock'); if(lowed&&!n){ n=el('span','avlock','Skip: speed dropped'); x.row.append(n) } else if(!lowed&&n) n.remove() } }
  bonusRule(); return box }

// ---- sheets ----
function avSheet(title,cls){ avClose(); if(!AVW){ AVW=true; window.addEventListener('keydown',e=>{ if(e.key==='Escape'&&AVO&&!EXPO&&host.isConnected) avClose() }) }
  const o=el('div','avov'), p=el('div','avpn'+(cls?' '+cls:'')), h=el('div','avph'), x=el('button','mdx','✕'); x.type='button'; x.setAttribute('aria-label','Close'); x.addEventListener('click',avClose); h.append(el('b',null,title),x); p.append(h); o.append(p);
  o.addEventListener('pointerdown',e=>{ if(e.target===o) avClose() }); root.append(o); AVO=o; const body=el('div','avpb'); p.append(body); return body }
function avClose(){ if(AVO){ AVO.remove(); AVO=null } exClose() }
function avWatch(r,v){ const b=avSheet(r.eff?r.eff.name:r.name,'vid');
  if(!v){ b.append(el('p','avmsg','No video is linked to this exercise yet.')); avFixBtn(b,r); return }
  if(v.kind==='youtube'||v.kind==='vimeo'){ const f=document.createElement('iframe'); f.src=v.embed; f.setAttribute('allow','autoplay; encrypted-media; picture-in-picture; fullscreen'); f.setAttribute('allowfullscreen',''); f.className='avfr'; b.append(f) }
  else if(v.kind==='mp4'){ const vd=document.createElement('video'); vd.src=v.embed; vd.controls=true; vd.setAttribute('playsinline',''); vd.className='avfr'; b.append(vd) }
  if(v.via&&v.q!=='fix'&&v.q!=='sheet') b.append(el('p','avcap','Closest video in the library: '+v.via));
  const a=el('a','avlink','Open the video in a new tab'); a.href=v.watch; a.target='_blank'; a.rel='noopener'; b.append(a); avFixBtn(b,r) }
function avFixBtn(b,r){ const x=el('button','btn sm','Wrong or missing video? Choose another'); x.type='button'; x.addEventListener('click',()=>avPickVideo(r)); b.append(x) }
// choose the right video for an exercise: search the library, pick one, and every athlete gets it
function avPickVideo(r,back){ const nm=r.eff?r.eff.name:r.name, b=avSheet('Choose the video for '+nm), nk=xCore(nm)||exNorm(nm);
  const inp=el('input','avsrch'); inp.type='search'; inp.placeholder='Type an exercise name'; inp.setAttribute('aria-label','Search the exercise library'); const list=el('div','avres2'); b.append(inp,list);
  if(VFIX[nk]){ const rm=el('button','btn sm','Remove the correction'); rm.type='button'; rm.addEventListener('click',()=>{ delete VFIX[nk]; try{localStorage.setItem(VFK,JSON.stringify(VFIX))}catch(e){} avClose(); render(); if(back) back() }); b.append(rm) }
  const draw=()=>{ list.textContent=''; if(!XL){ list.append(el('p','avmsg','The exercise library is loading…')); return } const q=inp.value, hits=(q.trim()?avFind(q):avSimilarLib(nm)).filter(x=>x.v).slice(0,40);
    for(const e of hits){ const it=el('button','avit'); it.type='button'; const t=el('span','avitn'); t.append(exMark(e.n,exTok(q))); it.append(t,el('small',null,[e.cat,e.body].filter(Boolean).join(' · '))); it.addEventListener('click',()=>{ VFIX[nk]={c:e.v,n:e.n}; try{localStorage.setItem(VFK,JSON.stringify(VFIX))}catch(x){} avClose(); render(); if(back) back() }); list.append(it) }
    if(!list.childNodes.length) list.append(el('p','avmsg',q.trim()?'No video found for that name.':'Type to search the library.')) };
  inp.addEventListener('input',draw); draw(); setTimeout(()=>inp.focus(),50) }
function avFind(q){ const toks=exTok(q); if(!toks.length||!XL) return []; const out=[]; for(const e of XL.E){ const hay=e.c+' '+exNorm(e.cat); let s=0, ok=true; for(const t of toks){ const i=hay.indexOf(t); if(i<0){ok=false; break} s+=i===0?40:(/[^a-z0-9]/.test(hay[i-1])?25:8) } if(!ok) continue; if(e.c.includes(exNorm(q))) s+=30; s-=e.n.length*0.04; if(e.v) s+=6; out.push([s,e]) } out.sort((a,b)=>b[0]-a[0]); return out.slice(0,60).map(x=>x[1]) }
function avSimilarLib(name){ if(!XL) return []; const m=xFind(name,'lift'), me=m&&m.e, q=new Set(xToks(xCat(name))), out=[]; for(const e of XL.E){ if(me&&e.i===me.i) continue; let s=xDice(q,e.t)*10; if(!s) continue; if(me){ if(me.pat&&e.pat===me.pat) s+=3; if(me.mus&&e.mus===me.mus) s+=2; if(me.body&&e.body===me.body) s+=1; if(me.cat===e.cat) s+=0.5 } out.push([s+(e.v?0.3:0),e]) } out.sort((a,b)=>b[0]-a[0]); const seen=new Set(), res=[]; for(const [,e] of out){ if(seen.has(e.c)) continue; seen.add(e.c); res.push(e); if(res.length>=60) break } return res }
function avReview(m){ const b=avSheet('Videos for '+m.dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}),'rev'), rows=[], list=el('div','avrv'); let ok=0; for(const s of m.secs) for(const r of s.rows) if(!r.info) rows.push(r);
  for(const r of rows){ const v=avVid(r), q=v?(v.q==='exact'||v.q==='sheet'||v.q==='fix'?'ok':'sim'):'none'; if(q==='ok') ok++; const it=el('div','avrvr '+q), nm=el('div','avrvn'); nm.append(el('b',null,r.eff.name),el('small',null,v?(v.q==='exact'?'Matched by name':v.q==='sheet'?'From the program library':v.q==='fix'?'Chosen by a coach':'Closest match: '+v.via):'No video found')); const bt=el('button','btn sm',v?'Change':'Find a video'); bt.type='button'; bt.addEventListener('click',()=>avPickVideo(r,()=>avReview(m))); it.append(nm,bt); list.append(it) }
  b.append(el('p','avmsg',ok+' of '+rows.length+' have a video that matches the exercise by name. The rest show the closest video, or none, until a coach picks one.'),list) }
function avPrompt(title,msg,btns){ const b=avSheet(title,'ask'); b.append(el('p','avmsg',msg)); const row=el('div','avbtns'); for(const [t,fn,cls] of btns){ const x=el('button','btn'+(cls?' '+cls:''),t); x.type='button'; x.addEventListener('click',()=>{avClose(); fn()}); row.append(x) } b.append(row) }
function avSwap(m,r){ const b=avSheet('Swap '+r.eff.name,'swap'), inp=el('input','avsrch'), list=el('div','avres2'); inp.type='search'; inp.placeholder='Type the exercise you want to do instead'; inp.setAttribute('aria-label','Search for a substitute exercise'); b.append(inp,list);
  const pools=exPools(), choose=n=>{ if(exNorm(n)===exNorm(r.eff.name)){ avClose(); return } avClose(); const X=avGet(m.dk,r.key)||{sets:[]}; X.sub={n}; avPut(m.dk,r.key,X); avSave();
    avPrompt('Use this swap next time too?','Swap “'+r.orig+'” for “'+n+'” every time it is in your program?',[['Just today',()=>render()],['Every time',()=>{ AVS.prefs.sub[r.nk]={n}; delete X.sub; avSave(); render() },'primary']]) };
  const draw=()=>{ list.textContent=''; const q=inp.value.trim(); let items=[]; if(!XL&&!q){ list.append(el('p','avmsg','The exercise library is loading…')); return }
    if(q){ const seen=new Set(); for(const it of exSearch(pools[r.lane]||pools.corr,q,r.orig).items){ seen.add(xCore(it.name)); items.push({n:it.name,cat:it.cat}) } for(const e of avFind(q)){ if(seen.has(e.c)) continue; seen.add(e.c); items.push({n:e.n,cat:[e.cat,e.body].filter(Boolean).join(' · ')}) } items=items.slice(0,40) }
    else { items=avSimilarLib(r.orig).slice(0,30).map(e=>({n:e.n,cat:[e.cat,e.body].filter(Boolean).join(' · ')})); list.append(el('div','avhd','Similar to '+r.eff.name)) }
    for(const it of items){ const bt=el('button','avit'), t=el('span','avitn'); bt.type='button'; t.append(exMark(it.n,exTok(q))); bt.append(t,el('small',null,it.cat||'')); bt.addEventListener('click',()=>choose(it.n)); list.append(bt) }
    if(q&&!items.some(x=>exNorm(x.n)===exNorm(q))){ const bt=el('button','avit use'); bt.type='button'; bt.append(el('span','avitn','Use “'+q+'” as written')); bt.addEventListener('click',()=>choose(q)); list.append(bt) }
    if(!list.querySelector('.avit')) list.append(el('p','avmsg','No match. Keep typing, or use your own name.')) };
  inp.addEventListener('input',draw); draw(); setTimeout(()=>inp.focus(),50) }
function avAdjust(m,r){ const b=avSheet('Adjust '+r.eff.name,'adj'), e=r.eff, f={};
  const row=(lab,key,val,ph)=>{ const l=el('label','avfld'), i=el('input','avin avwide'); l.append(el('span',null,lab)); i.value=val==null?'':val; i.placeholder=ph||''; i.addEventListener('input',()=>{f[key]=i.value}); l.append(i); b.append(l); f[key]=i.value };
  b.append(el('p','avmsg','Change what you will do for this exercise.')); row('Sets','sets',e.sets,'e.g. 3'); row('Reps','reps',e.reps,'e.g. 5'); if(e.int||r.lane==='lift') row('Intensity','int',e.int,'e.g. 80%');
  const sk=el('label','avchk'), cb=document.createElement('input'); cb.type='checkbox'; cb.checked=!!e.skip; sk.append(cb,el('span',null,'Skip this exercise')); b.append(sk);
  const bt=el('div','avbtns'), ok=el('button','btn primary','Apply'), cn=el('button','btn','Cancel'); ok.type=cn.type='button'; cn.addEventListener('click',avClose);
  ok.addEventListener('click',()=>{ const adj={}; for(const k of ['sets','reps','int']){ if(!(k in f)) continue; const v=String(f[k]==null?'':f[k]).trim(); if(v!==String(r[k]==null?'':r[k]).trim()) adj[k]=v } if(cb.checked) adj.skip=true; avClose();
    const X=avGet(m.dk,r.key)||{sets:[]}; if(!Object.keys(adj).length){ delete X.adj; avPut(m.dk,r.key,X); avSave(); render(); return }
    X.adj=adj; avPut(m.dk,r.key,X); avSave(); avPrompt('Make this change every time?','Use these changes every time “'+r.orig+'” is in your program?',[['Just today',()=>render()],['Every time',()=>{ AVS.prefs.adj[r.nk]=Object.assign({},adj); delete X.adj; avSave(); render() },'primary']]) });
  bt.append(ok,cn); b.append(bt) }
function avNote(m,r){ const b=avSheet('Note for '+r.eff.name,'adj'), t=document.createElement('textarea'), X=avGet(m.dk,r.key)||{sets:[]}; t.className='avta'; t.rows=4; t.value=X.note||''; t.placeholder='How did it feel? Anything your coach should know?'; b.append(t);
  const row=el('div','avbtns'), ok=el('button','btn primary','Save'); ok.type='button'; ok.addEventListener('click',()=>{ X.note=t.value.trim(); avPut(m.dk,r.key,X); avSave(); avClose(); render() }); row.append(ok); b.append(row); setTimeout(()=>t.focus(),50) }

window.addEventListener('velou-plan-change',e=>{ if(!DV||!host.isConnected||!e.detail||e.detail.src===host||!cur) return; let o=null; try{o=JSON.parse(localStorage.getItem(key())||'null')}catch(_){} if(!o) return;
  A=Object.assign(blank(),o); for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','dayMove','baseline','deload','strEd','patEd']) A[k]=A[k]||{}; A.str=Object.assign({on:1,fam:'',ph:''},A.str||{}); A.str.on=1; A.str.fam=''; A.str.ph=''; A.pat=Object.assign({on:1,foc:''},A.pat||{}); A.patBlocks=A.patBlocks||[]; A.strBlocks=A.strBlocks||[]; saved=true; render()});
const key=()=>'velou.plan.'+cur;
function status(t,warn){const s=$('status'); s.textContent=t; s.className='note'+(warn?' warn':''); const d=$('dvst'); if(d){d.textContent=t; d.className='note'+(warn?' warn':'')} const m=$('mdst'); if(m){m.textContent=t; m.className='note'+(warn?' warn':'')}}
function changed(quiet){if(A.shareCode&&A.pubAt) A.pubDirty=true; A.updated=Date.now(); setTimeout(()=>schedulePush(),0); try{setTimeout(()=>window.dispatchEvent(new CustomEvent('velou-plan-change',{detail:{src:host}})),0)}catch(e){} QUIET=!!quiet; try{render()}finally{QUIET=false} try{localStorage.setItem(key(),JSON.stringify(A)); saved=true; status(connected()?'Saving to the team sheet\u2026':'Saved in this browser for '+cur+'.')}catch(e){status('Could not save in this browser.',true)} if(coachOpen&&!DV) renderCoach(weeksAvail(),planWeeks().length)}
function reload(){
  if(RV){renderRoster(); return}
  const name=L().athlete; if(name===cur&&cur) {if(!HV&&archiveIfDone()) status('Program completed and saved to Program History.'); if(!saved&&!A.fromBoard){const sd=boardSeed(); if(sd){A=Object.assign(blank(),sd.S); for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','dayMove','baseline','deload']) A[k]=A[k]||{}; A.str=Object.assign({on:1,fam:'',ph:''},A.str||{}); A.pat=Object.assign({on:1,foc:''},A.pat||{}); A.patBlocks=A.patBlocks||[]; A.strBlocks=A.strBlocks||[]; BOARD_ISS=sd.iss; viewWeek=currentWeek(planWeeks().length)||1; status('Draft loaded from the Program Board. Review it; your first change saves it.'+(BOARD_ISS.length?' Check: '+BOARD_ISS.join('; ')+'.':''),BOARD_ISS.length>0)}} draw();return}
  cur=name; let o=null; try{o=JSON.parse(localStorage.getItem(key())||'null')}catch(e){}
  saved=!!o; A=Object.assign(blank(),o||{}); BOARD_ISS=[]; if(!saved){const sd=boardSeed(); if(sd){A=Object.assign(blank(),sd.S); BOARD_ISS=sd.iss}}
  A.swaps=A.swaps||{}; A.rowSwaps=A.rowSwaps||{}; A.removed=A.removed||{}; A.rowEdits=A.rowEdits||{}; A.added=A.added||{}; A.order=A.order||{}; A.dayMove=A.dayMove||{}; A.str=Object.assign({on:1,fam:'',ph:''},A.str||{}); A.str.on=1; A.str.fam=''; A.str.ph=''; if(A.str.fam==='none') A.str.fam=''; (A.strBlocks||[]).forEach(b=>{if(b.fam==='none') delete b.fam}); (A.blocks||[]).forEach(b=>{if(b.sFam==='none') delete b.sFam}); A.pat=Object.assign({on:1,foc:''},A.pat||{}); A.patBlocks=A.patBlocks||[]; A.strBlocks=A.strBlocks||[]; A.baseline=A.baseline||{}; A.deload=A.deload||{};
  const n=planWeeks().length; viewWeek=currentWeek(n)||1;
  coachOpen=DV?dvEdit:(BV?coachOpen:(coachOpen||!saved));
  LOGS={}; CHECKS={}; TRES={}; LLIST=[]; CLIST=[]; TLIST=[]; logsFor=''; if(!HV) loadLogs();
  const arc=archiveIfDone(); if(arc){A.updated=Date.now(); try{localStorage.setItem(key(),JSON.stringify(A))}catch(e){}}
  pullRemote(cur,arc);
  status(arc?'Program completed and saved to Program History.':A.archived?'This program is complete and saved in Program History. Reset the plan to start a new one.':saved?'Plan saved in this browser.':A.fromBoard?'Draft loaded from the Program Board. Review it; your first change saves it.'+(BOARD_ISS.length?' Check: '+BOARD_ISS.join('; ')+'.':''):'No saved plan for this athlete yet.',!saved&&BOARD_ISS.length>0);
  draw();
}
$('lnC1').addEventListener('change',e=>{A.coach1=e.target.value.trim(); changed()});
$('lnC2').addEventListener('change',e=>{A.coach2=e.target.value.trim(); changed()});
const nextStart=list=>{const l=list[list.length-1]; if(l&&bEnd(l)) return ymd(addD(bEnd(l),1)); return A.startDate||ymd(new Date())};
$('lnStrAdd').addEventListener('click',()=>{const l=A.strBlocks[A.strBlocks.length-1]; A.strBlocks.push(l?{fam:l.fam,ph:l.ph?String(Math.min(3,Number(l.ph)+1)):'',weeks:4}:{weeks:4}); changed()});
$('svSug').addEventListener('click',()=>{const st=day0(A.startDate), comp=day0(A.compDate); let W=st&&comp?Math.round((comp-st)/6048e5):planWeeks().length; if(!W||W<1) W=12;
  const a=strAuto();
  const lens=[]; let left=W; while(left>=4){lens.push(4); left-=4} if(left>=2) lens.push(2); if(!lens.length) lens.push(2); const n=lens.length;
  if(A.strBlocks.length&&!confirm('Replace the current strength blocks with a suggested progression?')) return;
  A.strBlocks=lens.map((w,k)=>({fam:a.fam,ph:String(Math.min(3,Math.floor(k*3/n)+1)),weeks:w})); changed()});
$('lnStrCopy').addEventListener('click',()=>{A.strBlocks=thrBlocks().map(b=>({weeks:SLEN(b.weeks)})); changed()});
$('lnCopyRows').addEventListener('click',()=>{const tsv=laneRows().map(r=>r.join('\t')).join('\n'); try{navigator.clipboard.writeText(tsv).then(()=>{$('lnWSt').textContent='Copied. Paste into the sheet.'},()=>{$('lnWSt').textContent='Copy blocked by the browser.'})}catch(e){$('lnWSt').textContent='Copy failed.'}});
$('lnWrite').addEventListener('click',async()=>{const c=acfg(), st=$('lnWSt'); if(!c.url||!c.key){st.textContent='Connect the Apps Script in Athlete app settings first.'; return} st.textContent='Writing\u2026'; try{await api('POST',{action:'saveBlocks',key:c.key,athlete:cur,rows:laneRows()}); st.textContent='Written to the Program Blocks tab.'}catch(e){st.textContent=/bad_action/.test(e.message)?'Update Code.gs in Apps Script, then redeploy.':'Could not write: '+e.message}});
$('pFoc').addEventListener('change',e=>{A.pat.foc=e.target.value; changed()});
$('pOn').addEventListener('change',e=>{A.pat.on=e.target.value==='1'?1:0; changed()});
$('sOn').addEventListener('change',e=>{A.str.on=e.target.value==='1'?1:0; changed()});
$('sFam').addEventListener('change',e=>{A.str.fam=e.target.value; changed()});
$('sPh').addEventListener('change',e=>{A.str.ph=e.target.value; changed()});
$('svCoach').addEventListener('click',()=>{svCo=!svCo; renderSV()});
$('svPrev').addEventListener('click',()=>{svW=(svW||1)-1; svSel=null; renderSV()});
$('svNext').addEventListener('click',()=>{svW=(svW||1)+1; svSel=null; renderSV()});
$('coachBtn').addEventListener('click',()=>{coachOpen=!coachOpen;render()});
$('prevW').addEventListener('click',()=>{viewWeek=Math.max(1,viewWeek-1);render()});
$('nextW').addEventListener('click',()=>{viewWeek=viewWeek+1;render()});
const bind=(id,k,num)=>$(id).addEventListener('input',e=>{let v=e.target.value; if(num) v=v===''?'':Number(v); A[k]=v; if(k==='program'||k==='startDate'){viewWeek=currentWeek(planWeeks().length)||1} changed()});
bind('fProg','program'); bind('fLevel','level',true); bind('fFocus','focus'); bind('fDate','startDate'); bind('fShift','shift',true); bind('fComp','compDate'); bind('fVelo','velo',true); bind('fKneel','kneel',true); bind('fLT','lt',true);
$('sugBtn').addEventListener('click',()=>{A.phaseWeeks=null;A.blocks=null;changed()});
$('addBlk').addEventListener('click',()=>{const c=JSON.parse(JSON.stringify(blocks())); c.push({code:'OFF',weeks:1}); A.blocks=c; A.phaseWeeks=null; changed()});
$('newDrill').addEventListener('click',()=>openAdd(null,null));
$('clearBtn').addEventListener('click',()=>{A.swaps={};A.rowSwaps={};A.removed={};A.rowEdits={};changed()});
let delArmed=false;
$('delBtn').addEventListener('click',()=>{
  if(!delArmed){delArmed=true;$('delBtn').textContent='Select again to reset '+cur+"'s plan";setTimeout(()=>{delArmed=false;$('delBtn').textContent='Reset plan'},4000);return}
  delArmed=false;$('delBtn').textContent='Reset plan';
  try{localStorage.removeItem(key())}catch(e){}
  saved=false; A=blank(); viewWeek=1; status('Plan reset.'); render();
});
function buildOpts(){
  $('fProg').textContent=''; {const o=el('option',null,TLLABEL);o.value=TL;$('fProg').append(o)}
  for(const p of D.programs){const o=el('option',null,p.name);o.value=p.name;$('fProg').append(o)}
  $('fFocus').textContent=''; for(const f of D.focus){$('fFocus').append(el('option',null,f))}
}
buildOpts();
{const lv=$('fLevel'); const o=el('option',null,'From throwing level'); o.value=''; lv.append(o); for(const n of [1,2,3]){const x=el('option',null,'Level '+n); x.value=n; lv.append(x)}}
function fillDrills(){const dl=$('drillList'); dl.textContent=''; for(const d of loadCustom()){const o=el('option');o.value=d.name;o.label='Custom drill';dl.append(o)} for(const d of (D.drills||[])){const o=el('option');o.value=d[0];if(d[1])o.label=d[1];dl.append(o)}}
fillDrills();
const ACK='velou.athleteApp';
const acfg=()=>{try{return JSON.parse(localStorage.getItem(ACK)||'{}')||{}}catch(e){return {}}};
let LOGS={}, CHECKS={}, TRES={}, TLIST=[], LLIST=[], CLIST=[], logsFor='', TP={};
const sid=u=>{const m=String(u||'').match(/\/macros\/s\/([A-Za-z0-9_-]+)/); return m?m[1]:''};
const appBase=()=>/\.dc\.html/i.test(location.pathname)?'handoff/apps-script/Athlete.html':'apps-script/Athlete.html';
function athLink(){const c=acfg(); if(!A.shareCode||!c.url) return ''; return c.url.replace(/[?#].*$/,'')+'?code='+A.shareCode}
function newCode(){const a=new Uint8Array(9); crypto.getRandomValues(a); return [...a].map(b=>'abcdefghjkmnpqrstuvwxyz23456789'[b%31]).join('')}
async function api(method,body,q){const c=acfg(); if(!c.url) throw new Error('No Apps Script URL saved.');
  const u=c.url+(q?'?'+new URLSearchParams(q):'');
  const r=method==='GET'?await fetch(u):await fetch(c.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body)});
  const j=await r.json(); if(!j.ok) throw new Error(j.error==='auth'?'Coach key is not correct.':j.error==='not_found'?'Plan not found.':j.error==='bad_action'?'Your Apps Script is out of date. Paste the latest Code.gs, run authorize, and redeploy with a new version (see SETUP.md).':(j.error||'Request failed.')); return j}
function athletePayload(){
  const ws=planWeeks(), tpl=testPlan(ws), SM=[], smi={}, M_=s=>{if(smi[s]==null){smi[s]=SM.length; SM.push(s)} return smi[s]}, drills=[], di={}, D_=n=>{if(di[n]==null){di[n]=drills.length; drills.push([n,vid(n)||''])} return di[n]};
  const used=[...new Set(ws.filter(w=>!w.off).map(w=>w.code))], phases={};
  for(const c of used){const p=byCode(c); if(p) phases[c]={name:phaseName(p),desc:PDESC[c]||''}}
  const fset=[...new Set(ws.filter(w=>!w.off&&w.uses&&w.focus).map(w=>w.focus))], focus={}; for(const f of fset) focus[f]=FDESC[f]||'';
  const weeks=ws.map(w=>{ if(w.off) return {n:w.n,off:1};
    const rows=weekRows(w), days=[], sums=[];
    for(let day=1;day<=7;day++){const ord=A.order[w.n+'-'+day]||[], dr=rows.filter(r=>r.day===day&&!r.plan).map((r,i)=>({r,i})).sort((a,b)=>{const x=ord.indexOf(a.r.k), y=ord.indexOf(b.r.k); return (x<0?1e3+a.i:x)-(y<0?1e3+b.i:y)}).map(q=>q.r);
      days.push(dr.map(r=>[D_(r.name),r.weight||'Baseball',r.sets,r.reps,r.rpe||'',r.target||''])); sums.push(dr.length?daySummary(dr,!!A.deload[w.n],w.uses?w.focus:''):'')}
    return {n:w.n,code:w.code,pw:w.pw,focus:w.uses?w.focus:'',dl:A.deload[w.n]?1:0,days,sums,pat:(()=>{const s=patWeek(w,ws); if(!s) return null; const o=[]; for(let d=1;d<=7;d++){const x=s.days[d]; o.push(x?x.blocks.map(b=>[b.ch,b.name,b.drills.map(q=>[q.name,q.video,q.dose])]):null)} return {lab:s.focus+' \u00b7 L'+s.lv,days:o}})(),str:(()=>{const s=strWeek(w,ws); if(!s) return null; const o=[]; for(let d=1;d<=7;d++){const x=s.days[d]; o.push(x?{t:(x.lift?x.lift.title:x.prep.title)||'',pm:x.prep?x.prep.min:'',p:x.prep?x.prep.rows.map(r=>[r.name,r.dose]):[],l:x.lift?x.lift.rows.map(r=>[r.code,r.name,M_(r.method),r.dose,r.tier]):[]}:null)} return {lab:strLabel(s),wk:s.wk,days:o}})(),tests:(tpl[w.n]||[]).map(t=>({day:t.day,items:t.items.map(k=>({k,label:TDEF[k].label,unit:TDEF[k].unit}))}))}});
  return {v:1,sm:SM,athlete:cur,program:progLabel(),start:A.startDate||'',comp:A.compDate||'',published:new Date().toISOString(),phases,focus,drills,weeks};
}
async function loadLogs(force){const c=acfg(); if(!c.url||!c.key||!cur) return; if(logsFor===cur&&!force) return; logsFor=cur;
  const who=cur; try{const j=await api('GET',null,{action:'logs',key:c.key,athlete:who}); if(who!==cur) return; const m={},ck={},tr={}; for(const l of j.logs||[]) m[l.week+'-'+l.day]=l; for(const x of j.checkins||[]) ck[x.week+'-'+x.day]=x; for(const x of j.tests||[]) tr[x.week+'-'+x.day+'-'+x.test]=x.value; LOGS=m; CHECKS=ck; TRES=tr; LLIST=j.logs||[]; CLIST=j.checkins||[]; TLIST=j.tests||[]; if(!HV&&!RV) render()}catch(e){LOGS={}; CHECKS={}; TRES={}}}
function renderApp(){
  const c=acfg(), set=(id,v)=>{const e=$(id); if(root.activeElement!==e) e.value=v||''};
  set('aUrl',c.url); set('aKey',c.key);
  $('aConn').textContent=c.url&&c.key?'Connected settings saved on this browser.':'Paste the web app URL and coach key from the Apps Script setup.';
  const link=athLink(); $('aLinkRow').hidden=!link||!A.pubAt; $('aLink').value=link; $('aStop').hidden=!A.pubAt;
  $('aPub').textContent=A.pubAt?'Republish to athlete':'Publish to athlete';
  const ps=$('aPubSt'); ps.className='note'+(A.pubDirty?' warn':'');
  ps.textContent=A.pubAt?(A.pubDirty?'Plan changed since last publish on '+new Date(A.pubAt).toLocaleString()+'. Republish so the athlete sees it.':'Published '+new Date(A.pubAt).toLocaleString()+'.'):'Not shared with the athlete yet.';
}
$('aSave').addEventListener('click',()=>{const u=$('aUrl').value.trim(), k=$('aKey').value.trim(); try{localStorage.setItem(ACK,JSON.stringify({url:u,key:k}))}catch(e){} $('aConn').textContent='Checking…';
  api('GET',null,{action:'ping',key:k}).then(j=>{$('aConn').textContent=j.coach?'Connected. Coach key accepted.':'Connected, but the coach key was not accepted.'; logsFor=''; loadLogs(true)}).catch(e=>{$('aConn').textContent='Could not connect: '+e.message})});
$('aPub').addEventListener('click',async()=>{const c=acfg(), ps=$('aPubSt'); if(!c.url||!c.key){ps.textContent='Save the Apps Script URL and coach key first.'; ps.className='note warn'; return}
  if(!planWeeks().length){ps.textContent='Build the plan before publishing.'; ps.className='note warn'; return}
  if(!A.shareCode) A.shareCode=newCode(); ps.textContent='Publishing…'; ps.className='note';
  try{await api('POST',{action:'publish',key:c.key,code:A.shareCode,athlete:cur,plan:athletePayload()}); A.pubAt=new Date().toISOString(); A.pubDirty=false; try{localStorage.setItem(key(),JSON.stringify(A)); saved=true}catch(e){} renderApp()}
  catch(e){ps.textContent='Publish failed: '+e.message; ps.className='note warn'}});
$('aStop').addEventListener('click',async()=>{const c=acfg(); try{await api('POST',{action:'unpublish',key:c.key,code:A.shareCode}); A.pubAt=null; A.pubDirty=false; A.shareCode=null; try{localStorage.setItem(key(),JSON.stringify(A))}catch(e){} renderApp()}catch(e){$('aPubSt').textContent='Could not stop sharing: '+e.message}});
$('aPrev').addEventListener('click',()=>{try{localStorage.setItem('velou.athletePreview',JSON.stringify(athletePayload()))}catch(e){} const u=new URL(appBase()+'?preview=1',location.href).href; const w=window.open(u,'_blank','noopener'); if(!w) $('aPubSt').textContent='Preview saved. Open '+u+' in a new tab.'});
$('aCopy').addEventListener('click',()=>{const i=$('aLink'); i.select(); try{navigator.clipboard.writeText(i.value).then(()=>{$('aCopy').textContent='Copied'; setTimeout(()=>$('aCopy').textContent='Copy link',1500)},()=>document.execCommand('copy'))}catch(e){document.execCommand('copy')}});

const connected=()=>{const c=acfg(); return !!(c.url&&c.key)};
function buildMeta(){const ws=planWeeks(), tp=testPlan(ws), tests=[]; for(const n in tp) for(const t of tp[n]){const dt=dateFor(+n,t.day); if(dt) tests.push({n:+n,d:t.day,date:ymd(dt),items:t.items})}
  tests.sort((a,b)=>a.date.localeCompare(b.date)); const l=L();
  return {program:progLabel(),start:A.startDate||'',comp:A.compDate||'',weeks:ws.map(w=>({n:w.n,code:w.code,phase:w.off?'Off week':w.phase,pw:w.pw,off:!!w.off,focus:w.uses?w.focus:''})),days:plannedDays(),tests,published:!!A.pubAt,pubDirty:!!A.pubDirty,coach1:A.coach1||'',coach2:A.coach2||'',strs:(()=>{try{const pk=strPick(); return strList().map(b=>({s:b.start||'',w:Number(b.weeks)||1,f:b.fam==='none'?'':(b.fam||pk.fam),p:String(b.ph||pk.ph||'')}))}catch(e){return []}})(),arm:l.arm,injury:l.injury||'',level:lvl(),archived:!!A.archived,snap:new Date().toISOString()}}
const PEND={}; let pushT=null;
function schedulePush(){if(!connected()||!cur||!saved) return; let body; try{body={action:'saveCoach',key:acfg().key,athlete:cur,updated:A.updated||Date.now(),data:{state:A,hist:loadHist()},meta:buildMeta()}}catch(e){console.warn(e); return} PEND[cur]=JSON.parse(JSON.stringify(body)); clearTimeout(pushT); pushT=setTimeout(flushPush,1200)}
async function flushPush(){for(const who of Object.keys(PEND)){const b=PEND[who]; delete PEND[who];
  try{const j=await api('POST',b); if(who===cur&&!HV&&!RV) status('Saved to the team sheet for '+who+' \u00b7 '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})+'.')}
  catch(e){if(/stale/.test(e.message)){if(who===cur){status('Another coach saved a newer version. Loading it\u2026',true); pullRemote(who,false,true)}} else if(who===cur) status('Saved in this browser. Could not reach the team sheet; it will retry on your next change.',true)}}}
async function pullRemote(who,forcePush,adopt){if(!connected()||!who) return; let j; try{j=await api('GET',null,{action:'coach',key:acfg().key,athlete:who})}catch(e){if(who===cur&&!RV) status((saved?'Saved in this browser. ':'')+(/out of date/.test(e.message)?e.message:'Could not reach the team sheet.'),true); return}
  if(who!==cur) return; const loc=Number(A.updated)||0;
  if(j.found&&(adopt||j.updated>loc)){const d=j.data||{}; if(d.state){A=Object.assign(blank(),d.state); for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','dayMove','baseline','deload']) A[k]=A[k]||{}; A.updated=j.updated; saved=true; try{localStorage.setItem(key(),JSON.stringify(A))}catch(e){}}
    if(Array.isArray(d.hist)){const h=d.hist.slice(), ids=new Set(h.map(x=>x.id)); for(const x of (JSON.parse(localStorage.getItem(HK())||'[]')||[])) if(!ids.has(x.id)) h.push(x); try{localStorage.setItem(HK(),JSON.stringify(h))}catch(e){}}
    viewWeek=currentWeek(planWeeks().length)||viewWeek; if(!RV) status('Loaded the latest plan from the team sheet.'); draw(); try{window.dispatchEvent(new CustomEvent('velou-plan-change'))}catch(e){}}
  else if(saved&&(forcePush||!j.found||loc>j.updated)){if(!A.updated){A.updated=Date.now(); try{localStorage.setItem(key(),JSON.stringify(A))}catch(e){}} schedulePush()}
  else if(saved&&!RV) status('Plan is up to date with the team sheet.')}

const HV=host.dataset.view==='history', SV=host.dataset.view==='strength', DV=host.dataset.view==='days', BV=host.dataset.view==='build', NV=host.dataset.view==='notes', MV=host.dataset.view==='map', AV=host.dataset.view==='athlete', LANE=host.dataset.lane||'', PREPL=SV&&LANE==='prep', LIFTL=SV&&LANE==='lift';
root.querySelector('.wrap').classList.add(DV?'dv':BV?'bv':NV?'nv':MV?'mv':AV?'av':HV?'hv':SV?'sv':host.dataset.view==='roster'?'rv':'tv');
const HK=()=>'velou.history.'+cur;
const loadHist=()=>{try{return JSON.parse(localStorage.getItem(HK())||'[]')||[]}catch(e){return []}};
const saveHist=h=>{try{localStorage.setItem(HK(),JSON.stringify(h))}catch(e){} A.updated=Date.now(); try{if(saved) localStorage.setItem(key(),JSON.stringify(A))}catch(e){} setTimeout(()=>schedulePush(),0)};
const withA=(o,fn)=>{const sv=A; A=Object.assign(blank(),o); for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','baseline','deload']) A[k]=A[k]||{}; try{return fn()}finally{A=sv}};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const progLabel=()=>isTL()?'Level '+lvl()+' offseason plan':prog().uses?phaseName(prog())+' \u00b7 L'+lvl():phaseName(prog());
function endDate(){const c=day0(A.compDate); if(c) return c; const s=day0(A.startDate); if(!s) return null; const n=planWeeks().length; if(!n) return null; const e=new Date(s); e.setDate(e.getDate()+n*7-1); return e}
function archiveIfDone(){
  if(!saved||A.archived||!day0(A.startDate)) return false;
  const e=endDate(); if(!e) return false; const t=new Date(); t.setHours(0,0,0,0); const ee=new Date(e); ee.setHours(0,0,0,0); if(t<=ee) return false;
  const v=V(), l=L(), snap=JSON.parse(JSON.stringify(A)); snap.level=lvl(); snap.velo=v.velo; snap.kneel=v.kneel; snap.lt=v.lt;
  const id=Date.now().toString(36), h=loadHist(), ds=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  h.unshift({id,athlete:cur,done:ds(ee),savedAt:new Date().toISOString(),levelRaw:l.levelRaw||'',A:snap}); saveHist(h);
  A.archived=id; try{localStorage.setItem(key(),JSON.stringify(A))}catch(e){} return true;
}
function summarize(o){return withA(o,()=>{const ws=planWeeks(); let thr=0; const ph=[]; for(const w of ws){const c=w.off?'OFF':w.code; if(!w.off) thr+=weekRows(w).reduce((a,r)=>a+(r.plan?0:r.sets*r.reps),0); if(ph[ph.length-1]!==c) ph.push(c)} return {weeks:ws.length,throws:thr,phases:ph,label:progLabel(),start:day0(A.startDate),end:endDate()}})}
function planHTML(o){return withA(o,()=>{
  const ws=planWeeks(), v=V(), fd=d=>d?d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):'';
  const st=day0(A.startDate), en=endDate(), used=[...new Set(ws.filter(w=>!w.off).map(w=>w.code))];
  let h='<header><div class="k">Velo University throwing program</div><h1>'+esc(cur)+'</h1><div class="sub">'+esc(progLabel())+(A.focus&&(isTL()||prog().uses)?' \u00b7 '+esc(A.focus):'')+'</div><div class="meta">';
  const m=(k,x)=>{if(x!==''&&x!=null) h+='<span><i>'+k+'</i>'+esc(x)+'</span>'};
  m('Start',fd(st)); m(A.compDate?'Competition':'Ends',fd(en)); m('Weeks',ws.length); {const tv=Number(A.velo)||numv(host.dataset.velo)||v.velo, kv=Number(A.kneel)||numv(host.dataset.kneel)||v.kneel; m('Top velo',tv?tv+' mph':''); m('Kneeling',kv?kv+' mph':'')}
  h+='</div></header><section class="ov"><h2>Phases</h2><dl>';
  for(const c of used){const p=byCode(c); if(!p) continue; const n=ws.filter(w=>w.code===c).map(w=>w.n); h+='<dt>'+esc(phaseName(p))+' <small>Weeks '+n[0]+(n.length>1?'\u2013'+n[n.length-1]:'')+'</small></dt><dd>'+esc(PDESC[c]||'')+'</dd>'}
  h+='</dl><p class="how">Ball is the implement to throw. Sets \u00d7 reps is the throw count. Intensity is percent effort; Target is the velocity or distance that effort should produce. Underlined drill names open the demo video.</p></section>';
  for(const w of ws){
    const d1=dateFor(w.n,1), d7=dateFor(w.n,7), p=byCode(w.code);
    h+='<section class="wk"><h2><span class="wn">Week '+w.n+'</span><span class="wp">'+(w.off?'Off week':esc(p?phaseName(p):'')+' \u00b7 Wk '+w.pw)+'</span>'+(!w.off&&w.focus&&w.uses?'<span class="wf">'+esc(w.focus)+'</span>':'')+(A.deload[w.n]?'<span class="dl">Deload</span>':'')+'<span class="wd">'+(d1?fmt(d1)+' \u2013 '+fmt(d7):'')+'</span></h2>';
    if(w.off){h+='<p class="rest">No throwing this week.</p></section>'; continue}
    const rows=weekRows(w);
    {const s=patWeek(w,ws); if(s){h+='<h3 class="sh ph">1 \u00b7 Patterning \u00b7 '+esc(s.focus)+' \u00b7 Level '+esc(s.lv)+'</h3><table class="st"><colgroup><col class="c1"><col class="sc2"><col></colgroup><thead><tr><th>Day</th><th>Block</th><th>Drills</th></tr></thead>';
      for(let d=1;d<=7;d++){const x=s.days[d]; if(!x) continue; const dt=dateFor(w.n,d), dl=dt?dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'}):'Day '+d;
        h+='<tbody>'; x.blocks.forEach((b,i)=>{h+='<tr>'+(i===0?'<td class="dd" rowspan="'+x.blocks.length+'">'+esc(dl)+'</td>':'')+'<td class="nm">'+esc(b.ch+' \u00b7 '+b.name)+'</td><td class="mt">'+b.drills.map(q=>(q.video?'<a href="'+esc(q.video)+'">'+esc(q.name)+'</a>':esc(q.name))+' <b>'+esc(q.dose)+'</b>').join(' \u00b7 ')+'</td></tr>'}); h+='</tbody>'}
      h+='</table>'}}
    h+='<h3 class="sh th">2 \u00b7 Throwing</h3><table><colgroup><col class="c1"><col><col class="c3"><col class="c4"><col class="c5"><col class="c6"></colgroup><thead><tr><th>Day</th><th>Drill</th><th>Ball</th><th>Sets \u00d7 Reps</th><th>Intensity</th><th>Target</th></tr></thead>';
    for(let day=1;day<=7;day++){
      const ord=A.order[w.n+'-'+day]||[], dr=rows.filter(r=>r.day===day&&!r.plan).map((r,i)=>({r,i})).sort((a,b)=>{const x=ord.indexOf(a.r.k), y=ord.indexOf(b.r.k); return (x<0?1e3+a.i:x)-(y<0?1e3+b.i:y)}).map(q=>q.r);
      const dt=dateFor(w.n,day), dl=dt?dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'}):'Day '+day;
      h+='<tbody>';
      if(!dr.length) h+='<tr class="rd"><td class="dd">'+esc(dl)+'</td><td colspan="5">Rest</td></tr>';
      else { const sm=daySummary(dr,!!A.deload[w.n],w.uses?w.focus:''); dr.forEach((r,i)=>{const u=vid(r.name); h+='<tr>'+(i===0?'<td class="dd" rowspan="'+dr.length+'">'+esc(dl)+'<small>'+esc(sm)+'</small></td>':'')+'<td class="nm">'+(u?'<a href="'+esc(u)+'">'+esc(r.name)+'</a>':esc(r.name))+'</td><td>'+esc(r.weight||'Baseball')+'</td><td class="n">'+r.sets+' \u00d7 '+r.reps+'</td><td class="n">'+(r.rpe?r.rpe+'%':'')+'</td><td class="n">'+esc(r.target||'')+'</td></tr>'}); }
      h+='</tbody>';
    }
    h+='</table>';
    {const s=strWeek(w,ws); if(s){h+='<h3 class="sh">3 \u00b7 Lift \u00b7 '+esc(strLabel(s))+' \u00b7 week '+s.wk+'</h3><table class="st"><colgroup><col class="c1"><col class="sc2"><col><col class="sc4"></colgroup><thead><tr><th>Day</th><th>Exercise</th><th>Method / cue</th><th>Sets \u00d7 reps</th></tr></thead>';
      for(let d=1;d<=7;d++){const x=s.days[d]; if(!x) continue; const dt=dateFor(w.n,d), dl=dt?dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'}):'Day '+d, rows=[].concat(x.prep?x.prep.rows.map(r=>Object.assign({pre:1},r)):[],x.lift?x.lift.rows:[]);
        h+='<tbody>'; rows.forEach((r,i)=>{h+='<tr>'+(i===0?'<td class="dd" rowspan="'+rows.length+'">'+esc(dl)+'<small>'+esc((x.lift?x.lift.title:x.prep.title)||'')+'</small></td>':'')+'<td class="nm">'+(r.pre?'<span class="pp">Prep</span> ':'')+esc(r.code+' '+r.name)+'</td><td class="mt">'+esc(r.method)+'</td><td class="n">'+esc(r.dose)+'</td></tr>'}); h+='</tbody>'}
      h+='</table>'}}
    h+='</section>';
  }
  const css='@page{size:letter;margin:.45in}*{box-sizing:border-box}body{margin:0;font:9.5pt/1.35 "Instrument Sans",-apple-system,"Segoe UI",sans-serif;color:#111;-webkit-print-color-adjust:exact;print-color-adjust:exact}header{border-bottom:3px solid #e10600;padding-bottom:10px;margin-bottom:12px}.k{font:600 8pt/1 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#e10600}h1{font-size:22pt;margin:6px 0 2px;line-height:1.1}.sub{font-size:11pt;font-weight:600}.meta{display:flex;flex-wrap:wrap;gap:6px 22px;margin-top:8px}.meta span{display:flex;flex-direction:column;font-weight:600;font-size:10.5pt}.meta i{font:normal 600 7pt/1.4 "JetBrains Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:#666}.ov h2{font:600 8pt "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#666;margin:0 0 6px}.ov dl{margin:0;display:grid;grid-template-columns:170px 1fr;gap:4px 14px}.ov dt{font-weight:700}.ov dt small{display:block;font-weight:400;color:#666;font-size:8pt}.ov dd{margin:0;color:#333}.how{margin:10px 0 0;padding:8px 10px;background:#f3f4f5;font-size:9pt}.wk{margin-top:14px}.wk h2{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;margin:0 0 4px;padding:5px 8px;background:#111;color:#fff;font-size:10.5pt;break-after:avoid}.wn{font:700 9pt "JetBrains Mono",monospace;color:#ff8a85}.wf{font-weight:400;color:#cfd4d8}.dl{font:700 7.5pt "JetBrains Mono",monospace;background:#88e0c6;color:#06281b;padding:2px 5px;letter-spacing:.06em;text-transform:uppercase}.wd{margin-left:auto;font:400 8.5pt "JetBrains Mono",monospace;color:#cfd4d8}.rest{margin:4px 0;color:#555}table{width:100%;border-collapse:collapse;table-layout:fixed}col.c1{width:84px}col.c3{width:70px}col.c4{width:74px}col.c5{width:64px}col.c6{width:92px}th{font:600 7pt "JetBrains Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:#666;text-align:left;padding:3px 6px;border-bottom:1.5px solid #111}td{padding:3.5px 6px;border-bottom:1px solid #d9dcdf;vertical-align:top}tbody{break-inside:avoid}tbody tr:first-child td{border-top:1px solid #9aa1a6}td.dd{font-weight:700;font-size:8.5pt;background:#f3f4f5}.sh{font-size:10pt;margin:10px 0 3px;color:#0b4a66}.sh.ph{color:#7a5200}.sh.th{color:#a30400}table.st td.mt{font-size:8pt;color:#444}col.sc2{width:200px}col.sc4{width:80px}.pp{font:700 6.5pt "JetBrains Mono",monospace;color:#0b4a66;letter-spacing:.05em;text-transform:uppercase}td.dd small{display:block;margin-top:2px;font:600 7pt/1.2 "JetBrains Mono",monospace;letter-spacing:.04em;text-transform:uppercase;color:#b30500}td.n{font-family:"Barlow",system-ui,sans-serif;font-size:9pt;white-space:nowrap}tr.rd td{color:#888}tr.rd td.dd{color:#555}a{color:#0b57d0;text-decoration:underline}@media screen{body{max-width:8in;margin:24px auto;padding:0 16px}}';
  return '<!doctype html><html><head><meta charset="utf-8"><title>Velo University Throwing Plan - '+esc(cur)+'</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap"><style>'+css+'</style></head><body>'+h+'</body></html>';
})}
function printDoc(html){
  let f=document.getElementById('velou-plan-print'); if(f) f.remove();
  f=document.createElement('iframe'); f.id='velou-plan-print'; f.setAttribute('aria-hidden','true'); f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
  document.body.append(f); const d=f.contentDocument; d.open(); d.write(html); d.close();
  const go=()=>{try{f.contentWindow.focus(); f.contentWindow.print()}catch(e){}};
  const fr=d.fonts&&d.fonts.ready; setTimeout(()=>{fr?fr.then(go,go):go()},350);
}
function download(name,text){const b=new Blob([text],{type:'application/json'}), u=URL.createObjectURL(b), a=document.createElement('a'); a.href=u; a.download=name; document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u),1000)}
function expFile(){const ds=new Date().toISOString().slice(0,10); download('Velo University plan - '+cur+' - '+ds+'.json',JSON.stringify({type:'velou-plan',version:1,athlete:cur,exported:new Date().toISOString(),plan:saved?A:null,history:loadHist()},null,1))}
function impFile(file,st){if(!file) return; const rd=new FileReader(); rd.onload=()=>{let o; try{o=JSON.parse(rd.result)}catch(e){st('That file could not be read.',true); return}
  if(!o||o.type!=='velou-plan'){st('That is not a VeloU plan file.',true); return}
  if(o.history&&o.history.length){const h=loadHist(), ids=new Set(h.map(x=>x.id)); for(const x of o.history) if(!ids.has(x.id)) h.push(x); h.sort((a,b)=>String(b.done).localeCompare(String(a.done))); saveHist(h)}
  if(o.plan){A=Object.assign(blank(),o.plan); for(const k of ['swaps','rowSwaps','removed','rowEdits','added','order','baseline','deload']) A[k]=A[k]||{}; try{localStorage.setItem(key(),JSON.stringify(A)); saved=true}catch(e){} viewWeek=currentWeek(planWeeks().length)||1}
  const from=o.athlete&&o.athlete!==cur?' (exported from '+o.athlete+')':''; draw(); st('Imported'+(o.plan?' plan':'')+(o.plan&&o.history&&o.history.length?' and':'')+(o.history&&o.history.length?' '+o.history.length+' history entr'+(o.history.length>1?'ies':'y'):'')+' for '+cur+from+'.');
  try{window.dispatchEvent(new CustomEvent('velou-plan-change'))}catch(e){}
 }; rd.readAsText(file)}
function renderHist(){
  $('hist').hidden=false; const box=$('histList'); box.textContent=''; const h=loadHist();
  if(!h.length){box.append(el('p','note','No completed programs yet for '+(cur||'this athlete')+'.')); return}
  h.forEach((e,i)=>{const s=summarize(e.A), r=el('div','he'), fd=d=>d?d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):'\u2014';
    const hd=el('div','hd'); hd.append(el('b',null,s.label),el('span',null,fd(s.start)+' \u2013 '+fd(s.end)));
    const ph=el('div','hph'); for(const c of s.phases){const p=byCode(c); ph.append(el('span','tag'+(MOUND.includes(c)?' mound':''),c==='OFF'?'Off':(p?p.code:c)))}
    const hs=el('div','hs'); const st=(k,x)=>{const d=el('div'); d.append(el('b',null,String(x)),el('span',null,k)); hs.append(d)};
    st('Weeks',s.weeks); st('Throws',s.throws.toLocaleString()); if(e.A.focus&&isTL) st('Focus',e.A.focus); if(e.A.velo) st('Start velo',e.A.velo+' mph'); if(e.A.kneel) st('Kneeling',e.A.kneel+' mph');
    const ha=el('div','ha'), pb=el('button','btn sm','Download PDF'); pb.type='button'; pb.addEventListener('click',()=>printDoc(planHTML(e.A)));
    const db=el('button','btn sm danger','Delete'); db.type='button'; let armed=false; db.addEventListener('click',()=>{if(!armed){armed=true; db.textContent='Select again to delete'; setTimeout(()=>{armed=false; db.textContent='Delete'},4000); return} saveHist(loadHist().filter(x=>x.id!==e.id)); renderHist()});
    ha.append(pb,db); r.append(hd,ph,hs,ha); box.append(r)});
}
function renderAlog(){
  const p=$('alogp'); if(!connected()||!planWeeks().length){p.hidden=true; return} p.hidden=false;
  const days=plannedDays(), st=logStats(days,x=>LOGS[x.n+'-'+x.d]), unread=LLIST.filter(l=>l.note&&!l.read).length;
  const last=CLIST.slice().sort((a,b)=>(b.date+b.updated).localeCompare(a.date+a.updated))[0];
  const box=$('alStats'); box.textContent=''; const s=(k,v,c)=>{const d=el('div'); const b=el('b',c||null,String(v)); d.append(b,el('span',null,k)); box.append(d)};
  s('Completion, last 2 weeks',st.pct==null?'\u2014':st.pct+'%'); s('Current streak',st.streak); s('Best streak',st.best); s('Sessions logged',st.logged+' / '+st.past); s('Unread notes',unread,unread?'bad':'');
  if(last) s('Last check-in',last.soreness+'/10'+(last.pain&&last.pain!=='None'?' \u00b7 '+last.pain:''),painFlag(last.soreness,last.pain)?'bad':'');
  $('alRead').hidden=!unread; $('alSt').textContent=A.pubAt?'From the athlete app.':'Publish the plan to the athlete to start collecting logs.';
  const t=ymd(new Date()), list=$('alList'); list.textContent='';
  const rows=days.filter(x=>x.date<=t).slice(-14).reverse();
  if(!rows.length){list.append(el('p','note','No training days yet.'))}
  else{const h=el('div','alr h'); for(const c of ['Date','Day','Status','Check-in','Note']) h.append(el('span',null,c)); list.append(h);
    for(const x of rows){const l=LOGS[x.n+'-'+x.d], ck=CHECKS[x.n+'-'+x.d], r=el('div','alr'), dt=new Date(x.date+'T12:00:00');
      r.append(el('span',null,dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})), el('span',null,x.sum));
      r.append(el('span','st '+(l&&l.status||'none'),l&&l.status?({done:'Done',partial:'Partly',skipped:'Skipped'}[l.status]):(x.date<t?'Not logged':'Today')));
      r.append(el('span','ck'+(ck&&painFlag(ck.soreness,ck.pain)?' flag':''),ck&&ck.soreness!=null?ck.soreness+'/10'+(ck.pain&&ck.pain!=='None'?' \u00b7 '+ck.pain:''):'\u2014'));
      const n=el('span'); if(l&&l.note){if(!l.read) n.append(el('span','unread','NEW')); n.append(l.note)} else n.textContent=''; r.append(n); list.append(r)}}
  const tb=$('alTests'); tb.textContent=''; if(TLIST.length){tb.append(el('h3',null,'Test results'));
    const by={}; for(const x of TLIST.slice().sort((a,b)=>a.date.localeCompare(b.date))) (by[x.test]=by[x.test]||[]).push(x);
    const g=el('div','altbl'); const h=el('div','alr h'); for(const c of ['Date','Test','Result','Change','']) h.append(el('span',null,c)); g.append(h);
    for(const k of Object.keys(by)) by[k].forEach((x,i)=>{const pv=i?by[k][i-1].value:null, r=el('div','alr'); r.append(el('span',null,new Date(x.date+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'})), el('span',null,(TDEF[k]||{label:k}).label), el('span','n',x.value+' '+((TDEF[k]||{}).unit||''))); const dv=pv==null?null:Math.round((x.value-pv)*10)/10; r.append(el('span','st '+(dv==null?'none':dv>0?'done':dv<0?'skipped':'none'),dv==null?'First test':(dv>0?'+':'')+dv), el('span')); g.append(r)});
    tb.append(g)}
}
$('alRef').addEventListener('click',()=>{logsFor=''; loadLogs(true); pullRemote(cur)});
$('alRead').addEventListener('click',async()=>{try{await api('POST',{action:'markRead',key:acfg().key,athlete:cur}); logsFor=''; loadLogs(true)}catch(e){$('alSt').textContent='Could not mark notes read: '+e.message}});

const RV=host.dataset.view==='roster';
if(RV) root.querySelector('.wrap').classList.add('rv');
let RCACHE=null, RAT=0;
async function renderRoster(force){
  const tb=$('rTbl'), st=$('rSt'); $('roster').hidden=false;
  if(!connected()){tb.textContent=''; st.textContent='Connect the athlete app in Training Plan > Coach tools to see the roster.'; return}
  if(force||!RCACHE||Date.now()-RAT>60000){st.textContent='Loading\u2026'; try{RCACHE=await api('GET',null,{action:'roster',key:acfg().key}); RAT=Date.now()}catch(e){st.textContent='Could not load the roster: '+e.message; return}}
  const J=RCACHE, names=new Set(String(host.dataset.names||'').split('\n').map(s=>s.trim()).filter(Boolean)); for(const p of J.plans) names.add(p.athlete);
  const t=ymd(new Date()), today=new Date(); today.setHours(12,0,0,0);
  const rows=[...names].map(name=>{const p=J.plans.find(x=>x.athlete===name), m=p?p.meta:null, lg={}, mine=J.logs.filter(l=>l.athlete===name); for(const l of mine) lg[l.week+'-'+l.day]=l;
    const cks=J.checkins.filter(c=>c.athlete===name).sort((a,b)=>(b.date+b.updated).localeCompare(a.date+a.updated)), ck=cks[0];
    let phase='No plan', sub='';
    if(m&&m.weeks&&m.weeks.length){const s=m.start?new Date(m.start+'T12:00:00'):null; if(m.archived){phase='Program complete'} else if(!s){phase=m.program||'Plan'; sub='No start date'} else {const i=Math.floor((today-s)/6048e5); if(i<0){phase='Starts '+s.toLocaleDateString(undefined,{month:'short',day:'numeric'}); sub=(m.weeks[0].phase||'')} else if(i>=m.weeks.length){phase='Plan complete'} else {const w=m.weeks[i]; phase=w.off?'Off week':w.phase+' \u00b7 Wk '+w.pw; sub='Week '+(i+1)+' of '+m.weeks.length+(w.focus?' \u00b7 '+w.focus:'')}}}
    const stt=m&&m.days?logStats(m.days,x=>lg[x.n+'-'+x.d]):null, unread=mine.filter(l=>l.note&&!l.read).length;
    const nt=m&&m.tests?m.tests.find(x=>x.date>=t):null, armFlag=m&&m.arm!=null&&m.arm<85, inj=m&&m.injury&&!/^(none|\u2014|-|n\/a)$/i.test(m.injury);
    const ckFlag=ck&&painFlag(ck.soreness,ck.pain)&&ck.date>=ymd(new Date(Date.now()-3*864e5));
    const att=(ckFlag?4:0)+(inj?3:0)+(armFlag?2:0)+(unread?1:0)+(stt&&stt.pct!=null&&stt.pct<70?1:0);
    return {name,m,phase,sub,stt,ck,ckFlag,unread,nt,armFlag,inj,att}});
  rows.sort((a,b)=>b.att-a.att||(!!b.m-!!a.m)||a.name.localeCompare(b.name));
  tb.textContent=''; const h=el('div','rr h'); for(const c of ['Athlete','Phase \u00b7 week','Completion 2 wk','Streak','Last check-in','Unread','Arm Score / injury','Next test']) h.append(el('span',null,c)); tb.append(h);
  for(const r of rows){const b=el('button','rr'); b.type='button'; b.setAttribute('aria-label','Open '+r.name);
    const nm=el('span'); nm.append(el('b',null,r.name)); const ph=el('span'); ph.append(el('span',null,r.phase)); if(r.sub){ph.append(el('br'),el('span','mut',r.sub))}
    const pc=el('span','n'+(r.stt&&r.stt.pct!=null&&r.stt.pct<70?' bad':''),r.stt&&r.stt.pct!=null?r.stt.pct+'%':'\u2014');
    const sk=el('span','n',r.stt?String(r.stt.streak):'\u2014');
    const ck=el('span',r.ckFlag?'bad':(r.ck?'':'mut'),r.ck?r.ck.soreness+'/10'+(r.ck.pain&&r.ck.pain!=='None'?' \u00b7 '+r.ck.pain:'')+' \u00b7 '+new Date(r.ck.date+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'\u2014');
    const un=el('span','n'+(r.unread?' bad':' mut'),String(r.unread||0));
    const ai=el('span',(r.armFlag||r.inj)?'bad':'mut',r.m?[(r.m.arm!=null?'Arm '+r.m.arm:''),(r.inj?r.m.injury:'')].filter(Boolean).join(' \u00b7 ')||'OK':'\u2014');
    const ntx=el('span',r.nt?'':'mut',r.nt?new Date(r.nt.date+'T12:00:00').toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})+' \u00b7 '+r.nt.items.map(k=>TDEF[k].label.replace(' velo','')).join(', '):'\u2014');
    b.append(nm,ph,pc,sk,ck,un,ai,ntx);
    b.addEventListener('click',()=>{try{window.dispatchEvent(new CustomEvent('velou-open-athlete',{detail:{name:r.name}}))}catch(e){}});
    tb.append(b)}
  st.textContent=rows.length+' athletes \u00b7 updated '+new Date(RAT).toLocaleTimeString([], {hour:'numeric',minute:'2-digit'});
}
$('rRef').addEventListener('click',()=>renderRoster(true));
function draw(){if(RV) return renderRoster(); if(HV){if(A.str.on&&!SDATA) loadStrength(); if(A.pat.on&&!PAT) loadPattern(); try{renderLanes()}catch(e){console.warn(e)} return renderHist()} if(SV) return renderSV(); render()}
const hst=(t,w)=>{const s=$('hStatus'); s.textContent=t; s.className='note'+(w?' warn':'')};
$('boardBtn').addEventListener('click',()=>{const sd=boardSeed(); if(!sd){status('This athlete has nothing on the Program Board.',true); return} if(saved&&!confirm('Replace this plan with the Program Board throwing, patterning and lifting programs?')) return; {const kn=A.notes, kb=A.build; A=Object.assign(blank(),sd.S); if(kn) A.notes=kn; if(kb) A.build=kb} BOARD_ISS=sd.iss; viewWeek=currentWeek(planWeeks().length)||1; changed(); status('Loaded from the Program Board.'+(sd.iss.length?' Check: '+sd.iss.join('; ')+'.':''),sd.iss.length>0)});
$('pdfBtn').addEventListener('click',()=>printDoc(planHTML(A)));
$('expBtn').addEventListener('click',expFile); $('hExp').addEventListener('click',expFile);
$('impIn').addEventListener('change',e=>{impFile(e.target.files[0],status); e.target.value=''});
$('hImp').addEventListener('change',e=>{impFile(e.target.files[0],hst); e.target.value=''});
if(PREPL){const sc=root.querySelector('#svCoachP'), lane=root.querySelector('#svCoachP .lane'), pc=root.querySelector('#coach .strc'); if(sc&&lane&&pc){lane.hidden=true; sc.append(pc)}}
MOUNTS.add({refreshLib(){if(window.VELOU_STRENGTH) SDATA=window.VELOU_STRENGTH; if(window.VELOU_PATTERN) PAT=window.VELOU_PATTERN; buildOpts(); fillDrills(); if(cur) draw()}});
return {reload,render};
}

function setLibrary(lib){
  if(!lib||!lib.programs||!lib.programs.length||!lib.S) return false;
  D.S=lib.S; D.programs=lib.programs; D.map=lib.map; if(lib.focus&&lib.focus.length) D.focus=lib.focus; if(lib.drills) D.drills=lib.drills; if(lib.ref&&lib.ref.length) D.ref=lib.ref;
  PH=D.programs.filter(p=>p.uses); FOCUS0=D.focus.includes('Vertical Force')?'Vertical Force':D.focus[0];
  for(const k of Object.keys(PDESC)) if(lib.pdesc&&lib.pdesc[k]==null) {} 
  Object.assign(PDESC,lib.pdesc||{}); Object.assign(FDESC,lib.fdesc||{});
  for(const k of Object.keys(LIBV)) delete LIBV[k]; Object.assign(LIBV,lib.videos||{});
  BALLS=(()=>{const s=new Set(['Baseball','Football','3oz','5oz','8oz','12oz','16oz']); for(const k in D.S) for(const r of D.S[k]) for(const i of [4,5,6]) if(r[i]) s.add(String(r[i])); return [...s]})();
  window.__veloULibApplied=true;
  for(const m of MOUNTS) try{m.refreshLib()}catch(e){}
  try{window.dispatchEvent(new CustomEvent('velou-plan-change'))}catch(e){}
  return true;
}
function setStrength(s){if(s&&s.p&&Object.keys(s.p).length){window.VELOU_STRENGTH=s; for(const m of MOUNTS) try{m.refreshLib()}catch(e){}}}
window.VeloUPlan={setStrength,setLibrary,current(name,opt){
  if(!name) return null; let o=null; try{o=JSON.parse(localStorage.getItem('velou.plan.'+name)||'null')}catch(e){} if(!o) return null;
  const pn=p=>p.name.replace(/ \(.*/,'').replace('THR\u2022',''), list=[];
  if(o.program!==TL){const p=D.programs.find(x=>x.name===o.program)||D.programs[0]; for(let i=1;i<=p.weeks;i++) list.push({phase:pn(p),pw:i,focus:p.uses?o.focus:''})}
  else{
    let bl=o.blocks; if(!bl){const a=day0(o.startDate),b=day0(o.compDate); if(a&&b){const N=Math.max(0,Math.floor((b-a)/6048e5+1e-6)), s=suggest(N); bl=o.phaseWeeks?PH.map(p=>{const f=s.find(x=>x.code===p.code), v=o.phaseWeeks[p.code]; return {code:p.code,weeks:v==null?(f?f.weeks:0):v}}).filter(x=>x.weeks>0):s} else bl=[]}
    for(const b of bl){const p=byCode(b.code); for(let i=1;i<=b.weeks;i++){ if(b.code==='OFF') list.push({off:true}); else if(p) list.push({phase:pn(p),pw:((i-1)%p.weeks)+1,focus:p.uses?((b.focus)||o.focus):''}) }}
  }
  if(!list.length) return null;
  const st=day0(o.startDate); let idx=0, pre=false, post=false;
  if(st){const n=Math.floor((new Date()-st)/6048e5); if(n<0){pre=true} else if(n>=list.length){post=true; idx=list.length-1} else idx=n}
  const w=list[idx]; const fd=list.find(x=>x.focus)||{};
  let strength='', sFam='', sPh='';
  {const FM={ML:'Movement Literacy',TL:'Tension Literacy',FC:'Force Control',AC:'Acceleration',AP:'Applied Power'}, PN={1:'Overcoming + Sub-Max Eccentric',2:'Overcoming + Supra-Max Eccentric',3:'Yielding + Concentric'}, PF={FC:{1:'Eccentric Force',2:'Transition',3:'Eccentric Power'},AC:{1:'Dead-Start Concentric',2:'Rapid Descent to a Pause',3:'Reactive, No Pause'},AP:{1:'VBT Clusters',2:'Complex',3:'French Contrast'},ML:{1:'Flood the Variety',2:'Narrow & Deepen',3:'Introduce Tempo'}};
   const au=(()=>{const t=String((opt&&opt.rec)||'')+' '+String((opt&&opt.perf)||''), n=Number((String((opt&&opt.perf)||'').match(/(\d+)/)||[])[1])||0, br=/force\s*control|\bFC\b/i.test(t)?'FC':/applied|\bAP\b/i.test(t)?'AP':/accel|\bAC\b/i.test(t)?'AC':''; const f=n===1?'ML':n===2?'TL':n>=3?(br||'FC'):br||(/movement/i.test(t)?'ML':'TL'); return {fam:f,ph:(t.match(/\bP\s*([123])\b/i)||[])[1]||'1'}})(), s0=o.str||{}, dFam=(s0.fam&&s0.fam!=='none')?s0.fam:au.fam, dPh=s0.ph||au.ph;
   const bl=(o.strBlocks&&o.strBlocks.length)?o.strBlocks:null; let hit=null;
   if(bl){let at=0; const wi=pre?0:idx; for(const b of bl){const n=Number(b.weeks)||1; if(wi<at+n){hit=b; break} at+=n} if(!hit) hit=bl[bl.length-1]}
   const fam=(hit&&hit.fam&&hit.fam!=='none')?hit.fam:dFam, ph=String((hit&&hit.ph)||dPh||'1'), nm=(PF[fam]||{})[ph]||PN[ph]||'';
   if(FM[fam]){sFam=FM[fam]; sPh='P'+ph+(nm?' \u00b7 '+nm:''); strength=sFam+' \u00b7 '+sPh}}
  if(w.off) return {phase:'Off week',focus:fd.focus||o.focus||'',strength,sFam,sPh};
  return {phase:post?'Plan complete':(pre?'Starts '+fmt(st)+' \u00b7 '+w.phase:w.phase), focus:w.focus||fd.focus||o.focus||'',strength,sFam,sPh};
}};
class VeloUTrainingPlan extends HTMLElement{
  static get observedAttributes(){return ['data-perf','data-strrec','data-names','data-athlete','data-level','data-velo','data-kneel','data-lt','data-armscore','data-injury','data-focus','data-videos','data-board','data-xfer','data-prod','data-ratio','data-pos','data-playlevel','data-injstatus','data-injloc','data-injnote','data-hand','data-coach']}
  connectedCallback(){
    if(!this.shadowRoot){const r=this.attachShadow({mode:'open'}); r.innerHTML='<style>'+CSS+'</style>'+HTML; this.api=mount(this)}
    this.api.reload();
  }
  attributeChangedCallback(){if(!this.api) return; clearTimeout(this._t); this._t=setTimeout(()=>this.api.reload(),30)}
}
customElements.define('velou-training-plan',VeloUTrainingPlan);
if(window.__veloULib) setLibrary(window.__veloULib);
})();
